<template>
    <div>
        <h2>{{ namehouse }}</h2>
        <label for="search">
            <div class="wrapper">
                <input 
                    class="wrapper-input" 
                    id="search" 
                    type="text" 
                    placeholder="Search member..." 
                    v-model="nameMember"
                />
            </div>
        </label>
        <div class="section-order" @click="order = !order">
            <p class="section-order-title">Order</p>
            <img src="@/assets/icons/arrow-down.svg" alt="arrow-down">
        </div>
        <transition name="fade">
            <div v-if="order === true" class="order">
            <label 
                
                for="name" 
                class="order-radio">
                <input 
                type="radio" 
                name="order" 
                id="name" 
                value="name"
                @click="sortMembers($event)"
                class="order-radio__input" />
                By name
                <div 
                class="order-radio__radio"></div>
            </label>
            <label 
                for="last-name" 
                class="order-radio">
                <input 
                @click="sortMembers($event)"
                type="radio" 
                name="order" 
                id="last-name" 
                value="last-name"
                class="order-radio__input" />
                By last name
                <div 
                class="order-radio__radio"></div>
            </label>
            </div>
        </transition>
        <ul class="galery">
            <li 
            class="galery-member"
            v-for="member in searchMember" :key="member.name">
                <card-member :member="member"/>
            </li>
            <li v-if="searchMember.length === 0">
                <p class="error">{{ message }}</p>
            </li>
        </ul>
        <Footer  />
    </div>
</template>

<script>
import { mapState } from "vuex";

import CardMember from "@/components/CardMember";
import Footer     from "@/components/Footer";

export default {
    props: {
        namehouse: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            order: false,
            nameMember: '',
            message: 'Member not found'
        }
    },
    components: {
        CardMember,
        Footer
    },
    computed: {
        searchMember () {
            return this.house.filter((member) => {
                return member.name.toLowerCase().includes(this.nameMember.toLowerCase());
            });
        },
        ...mapState({
            house: state => state.houses.currentHouse
        })
    },  
    methods: {
      getHouse(){
        this.$store.dispatch('houses/getHouseMembers', `${this.namehouse}`);
      },
      sortMembers(element){
          const orderBy = element.target.value;
          this.$store.commit('houses/ORDER_CURRENT_HOUSE_MEMBERS', orderBy);
      }
    },
    created(){
        this.getHouse();
    },
    beforeDestroy(){
        this.$store.commit('houses/DELETE_CURRENT_HOUSE');
    }   
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

h2 {
    margin-top: 20px;
    font-family: $-font-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 4.2rem;
    text-align: center;
    text-transform: capitalize;
    color: $-color-title;
}

.wrapper {
    width: 93%;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid $-color-title;
    border-radius: 8px;
    &-input {
        width: 100%;
        height: 50px;
        padding-left: 16px;
        font-family: $-font-secondary;
        font-style: normal;
        font-weight: 300;
        font-size: 2rem;
        background-color: transparent;
        outline: none;
        border: none;
        color: $-color-texts;
    }
}

.section-order {
    display: flex;
    align-items: center;
    padding-left: 6%;
    margin-top: 20px;
    margin-bottom: 20px;
    &-title {
        font-family: $-font-secondary;
        font-style: normal;
        font-weight: 300;
        font-size: 2rem;
        line-height: 30px;
        color: $-color-texts;
    }
}

.order {
    padding-left: 6%;
    margin-top: -10px;
    margin-bottom: 20px;
    &-radio {
       display: inline-flex;
       align-items: center;
       cursor: pointer;
       margin-right: 8px;
       font-family: $-font-secondary;
       font-style: normal;
       font-weight: 300;
       font-size: 2rem;
       color: $-color-texts;

       &__input {
           display: none;
       }

       &__radio {
           width: 24px;
           height: 24px;
           padding: 2px;
           margin-left: 8px;
           margin-right: 10px;
           border: 2px solid $-color-texts;
           border-radius: 50%;

           &::after {
               content: "";
               width: 100%;
               height: 100%;
               display: block;
               background-color: #c4c4c4;
               border-radius: 50%;

               transform: scale(0);
               transition: transform 0.15s;
           }
       }

       &__input:checked + &__radio::after {
            transform: scale(1);
       }
    }
}

.galery {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    &-member {
        width: 45%;
        margin-bottom: 20px;
    }
}

.error {
    margin-top: 20px;
    font-family: $-font-primary;
    font-style: normal;
    font-weight: normal;
    font-size: 4rem;
    text-align: center;
    text-transform: capitalize;
    color: $-color-title;
}

@media screen and (min-width:768px){
  h2 {
    margin-top: 60px;
    font-size: 10.3rem;
  }

  .wrapper {
      margin-top: 70px;
  }

  .section-order {
      margin-top: 35px;
  }

  .galery {
      margin-top: 35px;
  }
}

@media screen and (min-width:1024px){
  
  .galery {
      &-member {
        width: 30%;
    }
  }
}
</style>