<template>
  <div class="header">
    <div class="header_t">
        <img src="http://www.credit315gov.com/wp-content/uploads/2019/07/2019070509570263.png" alt="logo" />
    </div>
  <div class="header_b">
    <section v-for="(item,index) in menu" :key="index">
      <router-link :to="{ name: item.href }">{{item.name}}</router-link>
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
        href:'Home'
      },{
        name:'信用查询',
        href:'Project'
      },{
        name:'招标信息',
        href:'Tactics'
      },{
        name:'项目信息',
        href:'Tactics'
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
