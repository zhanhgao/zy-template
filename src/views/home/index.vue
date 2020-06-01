<template>
  <div class="home">
      <div class="search">
        <h3>信用查询</h3>
        <div style="margin-top: 15px;">
          <el-input placeholder="请输入内容" v-model="val">
              <template slot="prepend">公司名</template>
              <el-button slot="append" @click="search">搜索</el-button>
              <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
          </el-input>
        </div>
      </div>
     
      <div class="ad">
        <img src="http://www.credit315gov.com/wp-content/uploads/2019/06/2019061902151774.jpg" alt="ad">
      </div>
  </div>
</template>

<script>
import { searchCompany } from '@/api/api'
import router from '@/router'
export default {
 data() {
    return {
      val: '',//输入框val      
    }
  },
  computed: {
    
  },
  components: {
  },
  methods: {
    // 搜索企业
    search(){
      let __data={
        key:this.val
      }
      searchCompany(__data).then(res=>{
        if(res.page.list.length){
          router.push({
            name: 'Project',
            params: {
              data: __data
            }
          })
        }else{
          this.$message('没有搜索内容')
        }
      }).catch(err=>{
        console.log(err);
      })
    }
  },
}
</script>
<style lang="scss" scoped>


.home{
  margin: 0 50px;
}
.search{
  margin: 50px 0;
  h3{
    color: #ad0505;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }
    height: 132px;
    background-color: #e0e0e0;
    background: linear-gradient(#e0e0e0,#ffffff);
    padding: 20px;
    border-radius: 0px;
}
.ad{
  img{
    width: 100%;
  }
  margin: 10px 0;
}
.other{
  .title{
    height: 50px;
  }
    width: 60%;
    background: url(http://www.credit315gov.com/wp-content/uploads/2019/06/2019061905513515.png)  no-repeat;
    background-size: 100% ;
    border-width: 1px;
    border-color: #e8e8e8;
    border-style: solid;
    padding: 15px 10px 10px 20px;
    border-radius: 5px;
}
.single{
  height: 41px;
  padding: 10px 0;
  border-top: 1px solid #e1e1e1;
  color: #919191;
  font-size: 12px;
  .desc{
    color: #222222;
    font-size: 14px;
    font-weight: bold;
  }
}
@import "@/style/media.scss";
</style>

