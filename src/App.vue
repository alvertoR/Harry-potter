<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./scss/_variables.scss";

html {
  font-size: 62.5%;
  background-color: $-bg-primary;
}

* {
  margin:0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}

#app {
  margin: 0 auto;
  max-width: 1024px;
}

/* TRANSITIONS */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
