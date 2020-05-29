<template>
    <div class="className">
        <div class="content">
            <!-- 评价结果信息 -->
            <div class="estimate bortop" v-for="(item,index) in page" :key="index">
                <p class="g_title_style">评价结果信息</p>
                <ul>
                    <li>信用类型：{{item.certificateTypeName}}</li>
                    <li>评价机构：{{item.evaluateOrganization}}</li>
                    <li>指导机构：{{item.guidanceOrganization}}</li>
                    <li>信用评级：</li>
                    <li>证书编号：{{item.certificateNo}}</li>
                    <li>颁发日期：{{item.issUeDate}}</li>
                    <li>有效期至：{{item.periodOfValidity}}</li>
                </ul>
            </div>

            <!-- 企业基本信息 -->
            <div class="company bortop">
                <p class="g_title_style">企业基本信息</p>
                <ul>
                    <li>公司名称：{{cust.custName}}</li>
                    <li>社会信用统一代码：{{cust.socialCreditUnifiedCode}}</li>
                    <li>注册资本：{{cust.registeredCapital}}</li>
                    <li>法定代表人：{{cust.legalRepresentative}}</li>
                    <li>营业期限：{{cust.businessTermStartTime}} 至 {{cust.businessTermEndTime}}</li>
                    <li>注册地址：{{cust.registrationAuthority}}</li>
                    <li>登记机关：{{cust.registeredCapitalName}}</li>
                    <li>
                        经营范围：{{cust.businessScope}}
                    </li>
                </ul>
            </div>
            <!-- 说明 -->
            <div class="note">
                <p>*声明：</p>
                <p>1.本证书网址皆以”http://credit.zgbiaoxun.com”开头</p>
                <p>2.本证书通过政府档案、关联或现场核实，并通过用户信息保护评估，欢迎投诉举报。</p>
                <p>3.本证书一年例行核实一次。</p>
                <p>4.本证书仅供参考，不得作为商业合作的法律依据。</p>
            </div>
        </div>
    </div>
</template>

<script>
import mixins from '@/mixins'
import { searchDetail } from '@/api/api'
import data from '@/mock'
// import { mapGetters } from 'vuex'

export default {
    mixins: [mixins],
    data() {
        return {
            id:'',
            custId:'',
            page:[],//证书列表
            cust:'',//企业信息
        }
    },
    computed: {},
    components: {},
    created() {
        if (this.$route.params.custId && this.$route.params.id) {
            this.custId = this.$route.params.custId
            this.id = this.$route.params.id
        }
    },
    mounted(){
        this.getDetail();
    },
    methods: {
        getDetail(){
            let __data={
                certId:this.id,
                customerId:this.custId,
            }
            searchDetail(__data).then(res=>{
                res=data.detailData;
                this.page=res.page;
                this.cust=res.cust;
            }).catch(err=>{
                console.log(err);
            })
            let res=data.detailData;
            this.page=res.page;
            this.cust=res.cust;
        }
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
