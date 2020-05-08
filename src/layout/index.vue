<template>
  <div class="wrapper" :class="{ closeBar: opened }">
    <m-header></m-header>
    <div class="wrapper_con">
      <page-main></page-main>
    </div>
    <m-bottom></m-bottom>
  </div>
</template>

<script>
import PageMain from './components/PageMain'
import MHeader from './components/header'
import MBottom from './components/bottom'
import { mapGetters } from 'vuex'
export default {
  name: 'layout',
  mounted() {
   
  },
  computed: {
    ...mapGetters(['opened'])
  },
  components: {
    MHeader,
    MBottom,
    PageMain
  }
}
</script>
