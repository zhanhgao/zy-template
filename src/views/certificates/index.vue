<template>
  <div class="certificates">
      <section class="single" v-for="(item,index) in list" :key="index">
        <img src="https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=432536759,2467392518&fm=58" alt="图片" />
        <div class="info" @click="goDetail(22)">
            <p class="g_title_style">安徽阿瑞斯科技有限公司-重服务守信用证书</p>
            <p>2020年5月29日</p>
        </div>
        <p class="more">阅读更多<span></span></p>
      </section>

  </div>
</template>

<script>
import { searchCompany } from '@/api/api'
import router from '@/router'
import data from '@/mock'
// import { mapGetters } from 'vuex'
export default {
 data() {
    return {
      val: '',//输入框val   
      list:[1,2,3,4,5],//数据列表   
    }
  },
  computed: {
    
  },
  components: {
  },
  methods: {
    // 搜索企业
    goDetail(e){
      console.log(router,searchCompany,data);
      router.push({
          name: 'Tactics',
          params: {e}
      })
      // let __data={
      //   key:this.val
      // }
      // searchCompany(__data).then(res=>{
      //   res=data.searchList;
      //   if(res.page.list.length){
      //     router.push({
      //       name: 'Project',
      //       params: {
      //         data: __data
      //       }
      //     })
      //   }else{
      //     this.$message('没有搜索内容')
      //   }
      // }).catch(err=>{
      //   console.log(err);
      // })
    }
  },
}
</script>
<style lang="scss" scoped>
.certificates{
  margin: 0 50px;
}

.single{
  border-bottom: 1px solid #e1e1e1;
  .g_title_style{
    font-size: 24px;
    margin: 10px 0;
  }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    padding: 40px 0 50px 0;
    .index{
        flex-shrink: 0;
        width: 44px;   
        height: 44px;   
        line-height: 44px;   
        text-align: center;
        border-radius: 22px;
        background-color: #fcfcfc;
        font-size: 13px;
        color: #a7a7a7;
        box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
        margin-right: 15px;
    }
    .info{
        font-size: 12px;
        color: #919191;
    }
    .more{
      display: flex;
      align-items: center;
      font-size: 15px;
      color: #cf1b15;
      width: 100%;
    }
    .more span{
      display: inline-block;
      width: 7px;
      height: 7px;
      border-bottom:  1px solid #cf1b15;
      border-right:  1px solid #cf1b15;
      transform: rotate(-45deg) ;
    }
}
@import "@/style/media.scss";
</style>

