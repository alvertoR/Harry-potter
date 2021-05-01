<template>
  <transition name="fade" appear>
    <div class="container">
      <h1 class="container-title">
          Welcome to Magician School Education
      </h1>
      <router-link :to="{ name: 'Houses'}">
        <Button>
          See our houses
        </Button>
      </router-link>
      <Footer class="footer__down" />
    </div>
  </transition>
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

.container {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  &-title{
    font-size: 4.2rem;
    font-family: $-font-primary;
    text-align: center;
    color: $-color-title;
  }
}

.footer__down {
  position: absolute;
  bottom: 0;
}

@media screen and (min-width:768px){
  .container {
    
    &-title{
      font-size: 7.2rem;
    }
  }
}
</style>
