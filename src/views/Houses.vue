<template>
  <transition name="fade" appear>
    <div>
    <h2>Our Houses</h2>
    <ul class="galery-house">
      <li class="galery-house-item" v-for="house in houses.houses" :key="house.name">
        <router-link :to="{ name: 'house-members', params: { namehouse: `${house.name.toLowerCase()}` }}">
          <card-house :house="house"/>
        </router-link>
      </li>
    </ul>
    <Footer />
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";

import CardHouse from "@/components/CardHouse";
import Footer    from "@/components/Footer";
export default {
  components: {
    CardHouse,
    Footer
  },
  computed: {
    ...mapState(['houses'])
  }
}
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
h2 {
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: $-font-primary;
  font-style: normal;
  font-weight: normal;
  font-size: 4.2rem;
  text-align: center;
  color: $-color-title;
}

/* Media Query */

@media screen and (min-width:768px){
  h2 {
    margin-top: 60px;
    font-size: 10.3rem;
  }

  .galery-house {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    &-item {
      width: 45%;
    }
  }
}
</style>