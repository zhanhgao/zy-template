<template>
    <div class="className">
        <!-- 搜索框 -->
        <div class="title">
            <p class="g_title_style">新搜索</p>
            <p class="satisfied">如果您对结果不满意，请进行其他搜索</p>
            <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="65px"
                class="demo-ruleForm"
            >
                <el-form-item label="请输入" prop="name">
                    <el-input placeholder="请输入" v-model="ruleForm.name">
                        <el-button slot="append" @click="search('ruleForm')">搜索</el-button>
                    </el-input>
                </el-form-item>
            </el-form>
        </div>

        <!-- 间隔线 -->
        <p class="line"></p>

        <!-- 搜索结果列表 -->
        <div class="lists" v-if="list.length">
            <p class="title_res">{{totalCount}} 搜索结果：</p>
            <template v-if="list.length">
                <section class="single" v-for="(item,index) in list" :key="index">
                    <div class="index">{{index+1}}</div>
                    <div class="info" @click="goList(item.id)">
                        <!-- <p class="g_title_style">{{item.custName}}-{{item.registeredCapitalName}}</p> -->
                        <p class="g_title_style">{{item.custName}}</p>
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
import { searchCompany } from '@/api/api'
import mixins from '@/mixins'
import router from '@/router'

export default {
    mixins: [mixins],
    data() {
        return {
            ruleForm: {
                name: '',//输入框值
            },
            totalCount: '', //总条数
            list: [], //数据列表
            page: 1, //页数
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入公司名称',
                        trigger: 'blur',
                    },
                ],
            },
        }
    },
    computed: {},
    components: {},
    created() {
    },
    mounted() {
        let _name = sessionStorage.getItem("name");
        if (_name) {
            this.ruleForm.name = _name;
            this.search('ruleForm');
        }
    },
    filters: {},
    methods: {
        // 搜索企业
        search(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let __data = {
                        key: this.ruleForm.name,
                        page: this.page,
                    }
                    sessionStorage.setItem("name", this.ruleForm.name);
                    searchCompany(__data)
                        .then(res => {
                            this.totalCount = res.page.totalCount
                            if (res.page.list.length) {
                                this.list = res.page.list
                            } else {
                                this.list = []
                                this.$message('没有搜索内容')
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                } else {
                    this.$message('请输入公司名称')
                    return false
                }
            })
        },
        // 去证书列表页
        goList(id) {
            router.push({
                name: 'Certificates'
            })
            sessionStorage.setItem("id", id);
        },
        // 切换页面处理
        handleCurrentChange(value) {
            this.page = value
            this.search()
        },
    },
}
</script>
<style lang="scss" scoped>
.el-input {
    width: 400px;
}
.className {
    margin: auto;
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