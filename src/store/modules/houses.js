import axios from "axios";

export const namespaced = true;

export const state = {
    houses: [
        { 
            name: 'Gryffindor',
            ideology:'We will teach all those with acts of courage towards his name and his heart',
            logo:'https://i.postimg.cc/DZp55gSC/gryffindor-removebg-preview.png'

        },
        {
            name:'Slytherin',
            ideology:'We Slytherins are brave, yes, but not stupid. For example, when given the option, we will always choose to save our own necks.',
            logo:'https://i.postimg.cc/g0dM0r9K/slytherin-removebg-preview.png'

        }, 
        {
            name: 'Hufflepuff',
            ideology: 'You can belong to Hufflepuff, where they are fair and loyal. Those persistent Hufflepuffs. They really don not fear the heavy lifting',
            logo:'https://i.postimg.cc/DZwBqDwJ/hufflepuff-removebg-preview.png'

        },
        {
            name: 'Ravenclaw',
            ideology:'An intelligence without limits is the greatest treasure of men.',
            logo:'https://i.postimg.cc/5t3sQ1bW/ravenclaw-removebg-preview.png'

        }
    ],
    currentHouse: []
}

export const mutations = {
    SET_CURRENT_HOUSE(state, value){
        state.currentHouse = value;
    },
    SET_MEMBERS_HOUSE(state, value){
        state.houses.forEach(house => {
            if(house.name === value.name){
                house.numberOfMembers = value.members;
            }
        });
    },
    DELETE_CURRENT_HOUSE(state){
        state.currentHouse = [];
    },
    ORDER_CURRENT_HOUSE_MEMBERS(state, value){
        if(value === 'name') {
            state.currentHouse.sort((a,b) => {

                const firtsValue = a.name.toLowerCase();
                const nextValue  = b.name.toLowerCase();

                if(firtsValue < nextValue){
                    return -1;
                }
    
                if(firtsValue > nextValue){
                    return 1;
                }
    
                return 0;
            });
        }

        if(value === 'last-name') {
            state.currentHouse.sort((a,b) => {
                const firtsValueWhiteSpace  = a.name.indexOf(" ");
                const secondValueWhiteSpace = b.name.indexOf(" ");

                const firtsValue = a.name.slice(firtsValueWhiteSpace).toLowerCase();
                const nextValue  = b.name.slice(secondValueWhiteSpace).toLowerCase();
                
                if(firtsValue < nextValue){
                    return -1;
                }
    
                if(firtsValue > nextValue){
                    return 1;
                }
    
                return 0;
            });
        }
        
    }
}

export const actions = {
    async getHouseMembers({ commit }, house){
        try{
            const { data } = await axios({
                method: "GET",
                url:`${process.env.VUE_APP_HARRY_POTTER_API_URL}house/${house}`
            });
            commit("SET_CURRENT_HOUSE", data);
            return { success: true, data  };
        }catch(error){
            return { success: false, erorr:`something went wrong: ${error}` };
        }
    },
    async setHouseMembers({ commit, state }){
        try{
            state.houses.forEach(async (house) => {
                const { data } = await axios({
                    method: "GET",
                    url:`${process.env.VUE_APP_HARRY_POTTER_API_URL}house/${house.name}`
                });
                commit("SET_MEMBERS_HOUSE", {
                    members: data.length,
                    name: data[0].house
                });
            });
        }catch(error){
            return { success: false, erorr:`something went wrong: ${error}` };
        }
    }
}