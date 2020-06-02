<template>
  <div class="header">
    <div class="header_t">
        <!-- <img src="http://www.credit315gov.com/wp-content/uploads/2019/07/2019070509570263.png" alt="logo" /> -->
        <!-- <img src="http://www.gsxt.gov.cn/images/index-bg.png" alt="banner"> -->
        <!-- http://xfb.beijing.gov.cn/images/xfb_head_20200302.png -->
        <img src="./banner_font.png" alt="banner_font">
    </div>
  <div class="header_b">
    <section v-for="(item,index) in menu" :key="index">
      <template v-if="item.type===1">
        <router-link :to="{ name: item.href }">{{item.name}}</router-link>
      </template>
      <template v-else>
        <a  target="_blank" :href="item.href" >{{item.name}}</a>
      </template>
    </section>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
      {
        name:'首页',
        type:1,//1:内部跳转 0:外部跳转
        href:'Home'
      },{
        name:'招标信息',
        type:0,
        href:'http://www.zgbiaoxun.com/tendernotice/index.html'
      },{
        name:'项目信息',
        type:0,
        href:'http://www.zgbiaoxun.com/proposedproject/index.html'
      }
      ]
    }
  },
  components: {
    
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.header_t{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 342px;
  background-image: url(./tripod.png),url(./banner_bg.png);
  background-repeat: no-repeat;
  background-position: 1000px bottom,left top ;
  background-size: 250px,cover;
  img{
    width: 900px;
  }
}
@import "@/style/media.scss";
</style>