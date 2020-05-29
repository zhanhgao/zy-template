<template>
    <div class="className">
        <!-- 搜索框 -->
        <div class="title">
            <p class="g_title_style">新搜索</p>
            <p class="satisfied">如果您对结果不满意，请进行其他搜索</p>
            <el-input placeholder="请输入内容" v-model="val">
                <el-button slot="append" @click="search">搜索</el-button>
            </el-input>
        </div>

        <!-- 间隔线 -->
        <p class="line"></p>

        <!-- 搜索结果列表 -->
        <div class="lists">
            <p class="title_res">{{totalpage}} 搜索结果： </p>

            <section class="single" v-for="(item,index) in list" :key="index">
                <div class="index">{{index+1}}</div>
                <div class="info" @click="goList(item.id)">
                    <p class="g_title_style">{{item.custName}}-{{item.registeredCapitalName}}</p>
                    <p>{{item.createTime}}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { searchCompany } from '@/api/api'
import mixins from '@/mixins'
import data from '@/mock'
import router from '@/router'

export default {
    mixins: [mixins],
    data() {
        return {
            totalpage:'',//总条数
            list:[],//数据列表
            val: '测试',//输入框值
        }
    },
    computed: {},
    components: {},
    created() {
        if(this.$route.params.data){
            this.val=this.$route.params.data.key;
        }
    },
    mounted(){
        this.search();
    },
    filters: {},
    methods: {
        // 搜索企业
        search(){
            let __data={
                key:this.val
            }
            searchCompany(__data).then(res=>{
                res=data.searchList;
                this.totalpage=res.page.totalCount;
                if(res.page.list.length){
                    this.list=res.page.list;
                }else{
                    this.$message('没有搜索内容');
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        // 去证书列表页
        goList(id){
            router.push({
                name: 'Certificates',
                params: {id}
            })
        }
    },
}
</script>
<style lang="scss" scoped>
.className{
    width: 80%;
}
.title {
    max-width: 300px;
    margin: 50px 0 0 0;
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


.lists{
    margin: auto;
}
.title_res{
    font-size: 14px;
    font-weight: bold;
    color: #919191;
    margin-bottom: 24px;
}
.single{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
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
}
@import "@/style/media.scss";
</style>