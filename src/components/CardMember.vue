<template>
    <div class="container">
        <figure class="container-perfil">
            <img :src="member.image" alt="">
        </figure>
        <h2 class="container-title">{{ member.name }}</h2>
        <p class="container-blood">{{ member.ancestry ? member.ancestry.split('-').join(' ') : 'unknowable' }}</p>
    </div>
</template>

<script>
export default {
    props: {
        member : {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.container {
    width: 100%;
    height: 150px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: $-bg-secondary;
    &-perfil {
        width: 70px;
        height: 71px;
        img {
            width: 70px;
            height: 71px;
            border-radius: 50%;
        }
    }
    &-title {
        margin-top: 4px;
        font-family: $-font-secondary;
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        text-align: center;
        color: $-color-texts;
    }
    &-blood {
        margin-top: -4px;
        font-family: $-font-secondary;
        font-style: normal;
        font-weight: 500;
        font-size: 1.2rem;
        text-align: center;
        text-transform: capitalize;
        color: $-color-texts;
    }
}

/* Media Query */

@media screen and (min-width:768px){
  .container {
    margin: 0 auto;
    max-width: 380px;
    min-height: 260px;
    &-perfil {
        width: 120px;
        height: 120px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    &-title {
        margin-top: 4px;
        font-size: 2.5rem;
        
    }
    &-blood {
        margin-top: -4px;
        font-size: 2rem;
        
    }
}
}

</style>