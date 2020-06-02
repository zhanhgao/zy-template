<template>
    <div class="certificates">
        <!-- 间隔线 -->
        <p class="line"></p>
        <!-- 搜索结果列表 -->
        <div class="lists">
            <p class="title_res">{{totalCount}} 搜索结果：</p>
            <template v-if="list.length">
                <section class="single"  v-for="(item,index) in list" :key="index">
                        <div class="index">{{index+1}}</div>
                        <div class="info" @click="goDetail(item.id,item.custId)">
                            <p class="g_title_style">{{item.certificateTypeName}}</p>
                            <p>{{item.createTime}}</p>
                        </div>
                </section>
            </template>
        </div>
        <!-- 分页 -->
        <div class="pagination" v-if="list.length">
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
// import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            totalCount:0,
            customerId: '',
            list: [], //数据列表
            custName: '', //公司名称
        }
    },
    computed: {},
    created() {
        let _id = sessionStorage.getItem("id");
        _id&&(this.customerId = _id);
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
                name: 'Tactics'
            })
            sessionStorage.setItem("detailId", id);
            sessionStorage.setItem("custId", custId);
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

    .title {
        max-width: 300px;
        margin: 50px 0 0 0;
        padding-left: 30px;
    }
    .satisfied {
        font-size: 13px;
        color: #e1e1e1;
    }

    .line {
        background: #e1e1e1;
        width: 100%;
        height: 1px;
        margin: 44px 0 40px 0 !important;
    }

    .lists {
        padding-left: 30px;
        margin: auto;
    }
    .title_res {
        font-size: 14px;
        font-weight: bold;
        color: #919191;
        margin-bottom: 24px;
    }
    .single {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        cursor: pointer;
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
    }
    .pagination {
        padding-left: 30px;
        margin: 60px 0 30px 0;
    }
@import '@/style/media.scss';
</style>

