<template>
    <div class="className">
        <div class="content">
            <!-- 评价结果信息 -->
            <div class="estimate bortop">
                <p class="g_title_style">评价结果信息</p>
                <ul>
                    <li>信用类型：诚信企业家证书</li>
                    <li>评价机构： 北京普华正信国际信用评价有限公司</li>
                    <li>指导机构： 全国企业诚信公共服务平台</li>
                    <li>信用评级： AAA</li>
                    <li>证书编号：PHZX2020040904-7</li>
                    <li>颁发日期： 2020-04-09</li>
                    <li>有效期至： 2023-04-08</li>
                </ul>
            </div>

            <!-- 企业基本信息 -->
            <div class="company bortop">
                <p class="g_title_style">企业基本信息</p>
                <ul>
                    <li>公司名称：天津市欣雨森建筑机械租赁有限公司</li>
                    <li>社会信用统一代码：91120110MA05N2NM9E</li>
                    <li>注册资本：500万元人民币</li>
                    <li>法定代表人：王峰</li>
                    <li>营业期限：2017-02-17 至 无固定期限</li>
                    <li>注册地址：天津市东丽区万新街程林庄路二村208号</li>
                    <li>登记机关：天津市东丽区市场监督管理局</li>
                    <li>
                        经营范围：
                        建筑机械租赁;建筑安装工程;五金交电、润滑油脂、建筑材料、装饰装修材料批发兼零售;劳务服务(不含派遣)。(依法须经批准的项目,经相关部门批准后方可开展经营活动)
                    </li>
                </ul>
            </div>
            <!-- 说明 -->
            <div class="note">
                <p>*声明：</p>
                <p>1.本证书网址皆以”http://www.credit315gov.com”开头</p>
                <p>2.本证书通过政府档案、关联或现场核实，并通过用户信息保护评估，欢迎投诉举报。</p>
                <p>3.本证书一年例行核实一次。</p>
                <p>4.本证书仅供参考，不得作为商业合作的法律依据。</p>
            </div>
        </div>
    </div>
</template>

<script>
import // getStrategyList,
// deleteStrategy,
// exportStrategy,
// startStrategy,
// getCascadeMeun,
// getAcceptName
'@/api/api'
import mixins from '@/mixins'
// import { mapGetters } from 'vuex'
export default {
    mixins: [mixins],
    data() {
        return {
            permission: true, //类型         1:读写  2:只读
            rules: {},
            projectId: '', //项目id
            projectName: '', //项目名称
            multipleSelection: [], //多选-选中的array
        }
    },
    computed: {},
    components: {},
    created() {
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>
.className{
    margin: 0 50px;
}
.g_title_style {
    font-size: 20px;
    margin-bottom: 5px;
}
.el-icon-arrow-down {
    transition: transform 0.3s, -webkit-transform 0.3s;
}
.className {
    font-size: 13px;
    padding: 50px 0;
}
.content {
    width: auto;
    border-width: 2px;
    border-color: #e80202;
    border-style: solid;
    padding: 50px;
    margin: auto;
    border-radius: 10px;
    background: url(http://www.credit315gov.com/wp-content/uploads/2019/06/2019061908404811.png)
        no-repeat;
    background-size: cover;
}
.estimate,
.company {
    margin-bottom: 30px;
}
.bortop {
    border-top: 1px solid #ddd;
    padding-top: 30px;
}
ul {
    padding-left: 20px !important;
    li {
        color: #444444;
        color: #444444;
        line-height: 1.8;
        padding: 3px 0;
    }
}
.note {
    color: #ff0000;
    line-height: 1.6;
}
@import "@/style/media.scss";
</style>
