<template>
    <div class="wrapper">
        <img src="@/assets/icons/owl.svg" alt="owl">
        <h2 class="wrapper-title">
          Erro 404 - Page not Found
        </h2>
        <router-link class="wrapper-link" :to="{ name: 'Houses'}">
          <Button>
            Go back to our houses
          </Button>
        </router-link>
        <Footer class="footer__down" />
    </div>
</template>

<script>
import Button from "@/components/Button";
import Footer from "@/components/Footer";
export default {
    components: {
        Button,
        Footer
    },
    methods: {
        async setHouses(){
          await this.$store.dispatch("houses/setHouseMembers");
        }
    },
    created(){
      this.setHouses();
    }
}
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.wrapper {
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    &-title {
        margin-top: 24px;
        font-size: 3.5rem;
        font-family: $-font-primary;
        text-align: center;
        color: $-color-title;
    }

    &-link {
        margin-top: -24px;
    }
}

.footer__down {
  position: absolute;
  bottom: 0;
}

@media screen and (min-width:768px){
  .wrapper {
    
    &-title{
      font-size: 7.2rem;
    }

    &-link {
        margin-top: 0px;
    }
  }
}
</style>