<template>
    <div class="buttom">
        <!-- 友情链接 -->
        <div class="list">
            <div class="box">
                <p v-for="(item,index) in list" :key="index">
                    <span>{{item}}</span>
                </p>
                <!-- <p v-for="(item,index) in list " :key="index">
            <span>{{item}}</span>
                </p>-->
            </div>
        </div>
        <!-- 信息 -->
        <div class="info">
            <p>主办单位：北京易讯企业管理咨询有限公司</p>
            <p>全国企业诚信公共服务平台</p>
            <p>中国招投标企业信用公示指定网站</p>
        </div>
        <!-- 备案号 -->
        <p class="copyright">版权所有 备案号:京ICP备17052652号</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                '中央文明办',
                '中央编办',
                '最高法',
                '民政部',
                '商务部',
                '中央政法委',
                '海关总署',
                '最高检',
                '司法部',
                '住建部',
                '中央网信办',
                '税务总局',
                '教育部',
                '财政部',
                '法制办',
                '环境保护部',
                '工商总局',
                '公安部',
                '农业部',
                '银监会',
                '交通运输部',
                '质检总局',
                '民航局',
                '商务部',
                '证监会'
            ],
        }
    },
    components: {},
    methods: {},
}
</script>
<style lang="scss" scoped>
.buttom {
    width: 100%;
    overflow: hidden;
    // max-width: 1310px;
    background-color: #222222;
}
.info {
    margin: 20px 0;
    p {
        font-size: 15px;
        color: #aaaaaa;
        text-align: center;
    }
}
.copyright {
    height: 61px;
    line-height: 61px;
    color: #aaaaaa;
    font-size: 13px;
    background-color: #000000;
    text-align: center;
}
.list {
    background-color: #333333;
    background-image: linear-gradient(to right, #333333, #555555);
    .box {
        padding: 20px 0;
    }
    div {
        display: flex;
        flex-wrap: wrap;
    }
    p {
        width: 20%;
        color: #ffffff;
        font-size: 13px;
        line-height: 2;
        text-align: center;
    }
    span {
        position: relative;
    }
    span::before {
        position: absolute;
        top: 40%;
        left: -10px;
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background-color: #a6a6aa;
    }
}
@import "@/style/media.scss";
</style>

