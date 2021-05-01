<template>
  <div class="container">
    <figure class="container-img">
      <img :src=house.logo alt="">
      <h2 class="container-img--title">{{ house.name }}</h2>
    </figure>
    <div class="container-content">
      <h2 class="container-content--title">{{ house.name }}</h2>
      <p class="container-content--text">“{{ house.ideology }}”</p>
      <p class="container-content--members">Members({{ house.numberOfMembers }})</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    house: {
      type: Object,
      required: true
    }
  }
};
</script>


<style scoped lang="scss">
@import "@/scss/_variables.scss";

.container {
  width: 93%;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: baseline;
  margin:20px auto;
  border-radius: 8px;
  background-color: $-bg-secondary;
  &-img{
    width: 20%;
    height: 80px;
    margin-left: 14px;
    img{
      width: 100%;
      height: 100%;
    }
    &--title{
      display: none;
    }
  }
  &-content{
    width: 80%;

    &--title {
      margin-left: 10px;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: normal;
      font-family: $-font-primary;
      color: $-color-texts;
    }

    &--text {
      padding: 0 10px;
      font-size: 1.2rem;
      font-family: $-font-secondary;
      font-style: italic;
      font-weight: 100;
      color: $-color-texts;
    }

    &--members{
      text-align: right;
      margin-right: 14px;
      font-family: $-font-secondary;
      font-style: normal;
      font-weight: 600;
      font-size: 1rem;
      color: $-color-texts;
    }
  }
}

/* Media Query */
@media screen and (min-width:768px){
  .container {
  position: relative;
  width: 100%;
  max-width: 480px;
  min-height: 380px;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  &-img{
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    margin-left: 14px;

    img{
      width: 107px;
      height: 130px;
    }

    &--title{
      display: block;
      margin-left: 10px;
      font-size: 3.8rem;
      font-style: normal;
      font-weight: normal;
      font-family: $-font-primary;
      color: $-color-texts;
    }
  }
  &-content{
    width: 90%;

    &--title {
      display: none;
    }

    &--text {
      margin-top: 28px;
      padding: 0 10px;
      font-size: 1.8rem;
    }

    &--members{
      position: absolute;
      bottom: 0;
      right: 0;
      margin-bottom: 8px;
      font-size: 1.5rem;
    }
  }
}
}
</style>
