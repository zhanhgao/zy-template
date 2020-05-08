<template>
  <div class="pageMain">
    <transition name="fade-page" mode="out-in">
        <router-view ></router-view>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.pageMain {
  margin: auto;
  max-width: 1310px;
}
@import "@/style/media.scss";
</style>