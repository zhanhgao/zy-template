<template>
    <div class="className">
        <!-- 搜索框 -->
        <div class="title">
            <p class="g_title_style">新搜索</p>
            <p class="satisfied">如果您对结果不满意，请进行其他搜索</p>
            <el-input placeholder="请输入内容" v-model="input2">
                <el-button slot="append">搜索</el-button>
            </el-input>
        </div>

        <!-- 间隔线 -->
        <p class="line"></p>

        <!-- 搜索结果列表 -->
        <div class="list">
            <p class="title_res">7 搜索结果： 天津市欣雨森建筑机械租赁有限公司</p>

            <section class="single" v-for="(item,index) in list" :key="index">
                <div class="index">{{item}}</div>
                <div class="info">
                    <p class="g_title_style">天津市欣雨森建筑机械租赁有限公司-诚信企业家证书</p>
                    <p>2020年4月11日 /0 评论/在： 证书公示</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
// import { getProjectList, deleteProject } from '@/api/api'
import mixins from '@/mixins'
// import { mapGetters } from 'vuex'
export default {
    mixins: [mixins],
    data() {
        return {
            list:[1,2,3,4,5,6,7],
            input2: '',
        }
    },
    computed: {},
    components: {},
    created() {
        this.getNavPermission()
    },
    filters: {},
    methods: {
        // 获取用户nav权限
        getNavPermission() {
            let _permissionList = this.$store.getters.permissionObj,
                _name = this.$route.name,
                _res = _permissionList.filter(item => {
                    if (item.name === _name) {
                        return item
                    }
                })
            this.permission = _res[0].permission === 1 ? true : false //类型         1:读写  2:只读
        },
    },
}
</script>
<style lang="scss" scoped>

.className{
    margin-top: 50px;
}
.title {
    width: 300px;
    margin: 0 50px;
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


.list{
    margin: 0 50px;
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
</style>