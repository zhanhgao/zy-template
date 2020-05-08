
export default {
  data() {
    return {
      pages:{
        pageSize:10,//每页显示多少条
        pageNum:1,//当前页数
      },
      pageSizes: [10, 20, 30, 40],
      totalRecord:0,//总条数
      errorMsg:{
          'no-search':'请输入搜索内容',
          'no-checklist':'请先勾选列表',
      },
      showCard:true,
      classObject:{
          'el-icon-arrow-down':true,
          'rotateZ180':this.showCard
      },
    }
  },
  mounted() {
    // this.guide()
  },
  created: function () {
  },
  methods: {
    changeShow(){
      this.showCard=!this.showCard
    },
    mixResetPage(){
      this.pages={
          pageSize: 10,
          pageNum: 1
      }
    },
    //FromData不为空
    mixCheckFromData(formData){
      let _type=Object.values(formData).filter(it=>{
          return it!=''&&it!=[];    
      })
      return _type.length?true:false;
  },
  }
}
