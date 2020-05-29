<template>
    <div class="certificates">
        <section class="single" v-for="(item,index) in list" :key="index">
            <a class="img"></a>
            <div class="info" @click="goDetail(item.id,item.custId)">
                <p class="g_title_style">{{custName}}-{{item.certificateTypeName}}</p>
                <p>{{item.createTime}}</p>
            </div>
            <p class="more">
                阅读更多
                <span></span>
            </p>
        </section>

        <!-- 分页 -->
        <div class="pagination">
            <el-pagination
                background
                layout="prev, pager, next,total"
                :total="totalCount"
                :page-size="10"
                @current-change="handleCurrentChange"
            ></el-pagination>
        </div>

    </div>
</template>

<script>
import { certificateList } from '@/api/api'
import router from '@/router'
import data from '@/mock'
// import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            totalCount:10,
            customerId: '',
            list: [], //数据列表
            custName: '', //公司名称
        }
    },
    computed: {},
    created() {
        if (this.$route.params.id) {
            this.customerId = this.$route.params.id
        }
    },
    mounted(){
        this.getCertificateList();
    },
    components: {},
    methods: {
        //获取某公司的证书列表
        getCertificateList(){
          let _data={
            customerId:this.customerId
          }
          certificateList(_data).then(res=>{
              res=data.certificateList;
              if(res.page.length){
                this.list=res.page;
                this.totalCount=res.page.length;
                this.custName=res.cust.custName;
              }else{
                this.$message('没有搜索内容')
              }
          }).catch(err=>{
            console.log(err);
          })
        },
        // 跳转到企业详情
        goDetail(id,custId) {
            router.push({
                name: 'Tactics',
                params: { id,custId },
            })
        },
        // 切换页面处理
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`)
        },
    },
}
</script>
<style lang="scss" scoped>
    .certificates {
        margin: 0 50px;
    }

.single {
    cursor: pointer;
    border-bottom: 1px solid #e1e1e1;
    .img {
        width: 81px;
        height: 81px;
        overflow: hidden;
        border-radius: 4px;
        float: left;
        margin: 6px 0 0 0;
        position: relative;
        text-align: center;
        line-height: 81px;
        position: relative;
        display: block;
        background: #919191;
        color: #ffffff;
        transition: all 0.3s ease-out;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMAVaqA+O/cKwXmklvq1MWvoYdPSjcWEAv78+HY0c28nIxwZUZCMCMgv6U7M7eXbicbeHLKc4THAAABhklEQVRYw+3WyY6CUBAF0FJAEQccQJwVFXBq7e77///Wr0CJ2yqSZuNdkMtLDpDiJUCf/H/Cg3Wc6nm8AmfQ1fHExysbjW84uT3ZfOwofO7uGUVjbpbK3x55n3LfKzyWz/sGpvflnrNxy/NM6psLPs4TXohsoCH15DYGXEJeOgG/Us/TMw795xgvYs9Zm+4RxYDjyj2nB6CbOICv88S7aOsDvbbGczygxftI6ykDZ6j2xRybeu+yP1fwq2rPH1X1fX6Jej+t6MMlgK/6/DfvP68+n7Hf6X26qOYf7Ed63+7U6xP2lt5fe9V8UNU71fxF4In3Wsub0FuOEn9Akd2bnws87YAeOIPykiJPK8Brj2yYFAsTW+SD4nt75UkMFZ4sYJaXgXF3ovFM5tn5ReM7T8Q+5a92UfemnqWeYgPcZx+aLvV0e/t9HSt8ZERc1PaoI/fUNSRlbS0AhacmsDZ6Ceg8zY3pv/Tm5yr1B5Tx9ynJYxXYPndDsS1n6GwnLqkTWEf6pLb8Ae29ZJq4wKspAAAAAElFTkSuQmCC');
        background-size: 26px;
        background-repeat: no-repeat;
        background-position: center;
    }
    a:hover {
        background-color: #cf1b15;
        color: #ffffff;
        border-color: #ad0903;
    }
    .g_title_style {
        font-size: 24px;
        margin: 10px 0;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    padding: 40px 0 50px 0;
    .index {
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
    .info {
        font-size: 12px;
        color: #919191;
    }
    .more {
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #cf1b15;
        width: 100%;
    }
    .more span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-bottom: 1px solid #cf1b15;
        border-right: 1px solid #cf1b15;
        transform: rotate(-45deg);
    }
}
@import '@/style/media.scss';
</style>

