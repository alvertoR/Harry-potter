<template>
    <button class="btn">
        <p class="btn-content">
            <slot></slot>
        </p>
    </button>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.btn {
    width: 254px;
    height: 45px;
    margin-top: 40px;
    background-color: $-bg-button;
    outline: none;
    border: none;
    border-color: $-bg-button;
    border-radius: 8px;
    cursor: pointer;
    &-content {
        font-size: 1.6rem;
        font-family: $-font-primary;
        color: $-color-title;
    }
}

@media screen and (min-width:768px){
  .btn {
    width: 450px;
    height: 90px;
    &-content {
        font-size: 4.2rem;
        
    }
}
}

</style>