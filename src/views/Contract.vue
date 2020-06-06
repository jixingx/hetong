<template>
    <el-container>
        <el-aside width="6.625rem">
            <h1 class="logo">
                <!-- <img src="../assets/img/home/logo.png" alt="" srcset=""> -->
            </h1>
            <el-menu
              :default-active="defaultActive"
              class="el-menu-left"
              select="handleSelect"
              background-color="#0D5593"
              text-color="#FFF"
              active-text-color="#FFF"
              @select="handleSelect"
            >
              <el-menu-item :index="item.path" v-for="item in MenuList" :key="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header height="5.0625rem">
              <el-row type="flex" class="row-bg" justify="space-around">
                <el-col :lg="5" :xl="5">
                  <h3 class="title">对外投资公司合同管理系统</h3>
                </el-col>
                <el-col :lg="15" :xl="16">
                  <div class="userinfo">
                    <h3 class="name">{{user.Name}}</h3>
                    <ul>
                      <li>
                        <img src="../assets/img/home/usergs.png" alt="" srcset="">
                        <span>公司：{{user.Unit_Name}}</span>
                      </li>
                      <li>
                        <img src="../assets/img/home/userbm.png" alt="" srcset="">
                        <span>部门：{{user.dept_name}}</span>
                      </li>
                      <li>
                        <img src="../assets/img/home/userzw.png" alt="" srcset="">
                        <span>职位：{{user.Title}}</span>
                      </li>
                    </ul>
                  </div>
                </el-col>
                <el-col :lg="4" :xl="3">
                  <div class="user">
                    <el-badge is-dot class="tidings"><i class="el-icon-message-solid"></i></el-badge>
                    <el-divider direction="vertical"></el-divider>
                    <el-avatar icon="el-icon-user-solid"></el-avatar>
                    <el-dropdown @command="handleCommand">
                      <span class="el-dropdown-link">
                        {{user.No}}<i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>
                </el-col>
            </el-row>
            </el-header>
            <el-main>
              <el-tabs v-model="defaultActive" closable @tab-click="handleClick" @tab-remove="removeTab">
                <el-tab-pane 
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title" 
                :name="item.name"
                lazy
                >
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
                </el-tab-pane>
            </el-tabs>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name:"Contract",
  data () {
    return {
      MenuList:[
        {path:'/contract/home',icon:"iconfont icon-home",title:"首页"},
        {path:'/contract/launch',icon:"iconfont icon-faqiqianyue",title:"发起"},
        {path:'/contract/gtasks',icon:"iconfont icon-daiban",title:"待办"},
        {path:'/contract/intransit',icon:"iconfont icon-shijianbiao",title:"在途"},
        {path:'/contract/oway',icon:"iconfont icon-feiyongtaizhang",title:"台账"},
        {path:'/contract/statistics',icon:"iconfont icon-tongji",title:"统计"},
        {path:'/contract/setup',icon:"iconfont icon-shezhi",title:"设置"},
      ],
      // defaultActive:"/contract/home",
      // editableTabs:[
      //   {
      //     title: '首页',
      //     name: '/contract/home'
      //   },
      //   {
      //     title: '发起',
      //     name: '/contract/launch'
      //   }
      // ]
    }
  },
  mounted() {
    //监听页面刷新
    window.addEventListener('beforeunload', e => this.loadPage(e))
  },
  methods: {
    //点击左边菜单项事件
    handleSelect(index,indexPath){

      let itemObj=this.MenuList.find((item,i)=>{
        return item.path==index
      })
      // console.log(this.editableTabs)
      
      let isFlag=this.editableTabs.some((item,i)=>{
        
        return item.name==itemObj.path
      })
      if(!isFlag){
        //this.editableTabs.push({title:itemObj.title,name:index})
        this.editableTabs.push({title:itemObj.title,name:index})
        let editableTabs=this.editableTabs
        this.$store.dispatch('setEditableTabs',editableTabs)
      }

      // this.defaultActive=index
      this.$store.dispatch("setDefaultActive",index)
      this.$router.push(index)
    },
    //下拉菜单回调
    handleCommand(command) {
      if(command=="logout"){
        localStorage.removeItem('user')
        localStorage.removeItem('expired')
        localStorage.removeItem('editableTabs')
        localStorage.removeItem('defaultActive')
        this.$store.dispatch('setUser', {})
        this.$store.dispatch('setEditableTabs', [{title: '首页',name: '/contract/home'}])
        this.$store.dispatch('setDefaultActive', '/contract/home')
        this.$router.push('/login')
      }
      
    },
    //点击tabs
    handleClick(tab, event) {
      //console.log(tab.name, event);
      //this.$router.push(tab.name)
      let itemObj=this.MenuList.find((item,i)=>{
        return item.path==tab.name
      })
      if(itemObj){
        this.$store.dispatch("setDefaultActive",itemObj.path)
      }else{
        this.$store.dispatch("setDefaultActive",'')
      }
      this.$router.push(tab.name)
    },
    //点击tabs删除按钮
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.defaultActive;
      if (activeName === targetName) {
        this.editableTabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = this.editableTabs[index + 1] || this.editableTabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      //this.defaultActive = activeName;
      this.$store.dispatch("setDefaultActive",activeName)
      this.$router.push(activeName)
      let editableTabs = this.editableTabs.filter(tab => tab.name !== targetName);
      this.$store.dispatch('setEditableTabs',editableTabs)
    },
    //页面刷新
    loadPage(e) {
      console.log('刷新或关闭')
      // alert("确定要刷新吗？")
      // return "";
      localStorage.setItem('editableTabs',JSON.stringify(this.editableTabs))
      localStorage.setItem('defaultActive',this.defaultActive)
      // console.log(this.editableTabs)
      // console.log(this.defaultActive)
    },
  },
  computed: {
    user(){
        return this.$store.getters.getUser
    },
    editableTabs(){
        return this.$store.getters.getEditableTabs
    },
    defaultActive(){
        return this.$store.getters.getDefaultActive
    }
  },
  destroyed() {
    window.removeEventListener('beforeunload', e => this.test(e))
  }
}
</script>

<style lang="less" scoped>
  .el-container {
    height: 100%;
  }
  .el-header {
    padding: 0;
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    line-height: 5.0625rem;
    .row-bg{
      .el-col{
        .title{
          font-size: 1.5rem;
          font-family:Source Han Sans CN;
          font-weight:500;
          color:rgba(51,51,51,1);
          padding-left:1.25rem ;
        }
        .userinfo{
          display: flex;
          justify-content: center;
          // align-items: flex-end;
          .name{
            font-size: 1.5rem;
            font-family:Source Han Sans CN;
            font-weight:500;
            color:rgba(13,85,147,1);
            margin-right: 2.5rem;
          }
          ul{
            display: flex;
            // justify-content: space-between;
            // align-items: flex-end;
            li{
              // line-height: 1rem;
              margin-right: 3.1875rem;
              margin-top: 0.3rem;
              img{
                width: 1rem;
                height: 1rem;
                vertical-align: middle;
                margin-right: 0.25rem;
              }
              span{
                font-size: 0.875rem;
                font-family:Source Han Sans CN;
                color:rgba(102,102,102,1);
                font-weight:400;
              }
              &:last-child{
                margin-right: 0;
              }
            }
          }
        }
        .user{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 1.3125rem;
          .tidings{
            // height: 1.5625rem;
            i{
              font-size: 1.5625rem;
              color: #CCCCCC;
            }
            /deep/.el-badge__content.is-dot{
              top: 1.875rem;
            }
            
          }
          .el-divider--vertical{
            height: 2.4375rem !important;
          }
        }
      }
    }
  }
  
  .el-aside {
    background-color: #0D5593;
    color: #ffffff;
    h1{
      height: 10.375rem;
      padding: 2.4375rem 0 2.0625rem 0;
      box-sizing: border-box;
      background-image: url("../assets/img/home/logo.png");
      background-repeat: no-repeat;
      background-size: 5.875rem  5.875rem;
      background-position: center;
      // img{
      //   width: 100%;
      //   height: 100%;
      // }
    }
    .el-menu-left{
      border-right: 0px;
      height: calc(~"100% - 10.375rem");
      overflow-x: hidden;
      overflow-y:auto ;
      .el-menu-item{
        padding: 0 !important;
        text-align: center;
        height:5.875rem ;
        line-height: 5.875rem;
        font-size: 1.125rem;
        &.el-menu-item.is-active{
          background-color: #2378C1 !important;
          // position: relative;
          &::before{
            content: '';
            height: 100%;
            width: 0.5625rem;
            background:#77A6CE;
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
  
  .el-main {
    background:#F1F2F7;
    padding: 0.875rem 1.5625rem 1.5rem 1.125rem ;
    /deep/.el-tabs{
      height: 100%;
      .el-tabs__header{
         margin: 0 0 0.9375rem;
        .el-tabs__nav-wrap::after{
          height: 0 !important;
        }
        .el-tabs__nav{
          .el-tabs__active-bar{
            height: 0;
          }
          .el-tabs__item{
            font-size: 1rem;
            box-sizing: border-box;
            padding: 0 6.25rem 0 1.6875rem;
            background:#fff;
            border-radius:4px;
            height: 2.5rem;
            line-height: 2.5rem;
            font-weight: 400;
            color: #999999;
            position: relative;
            &+.el-tabs__item{
              margin-left: 1.25rem;
            }
            .el-icon-close{
              //margin-left: 4.25rem;
              margin-left: 0;
              position: absolute;
              right: 1.125rem;
              font-size: 0.875rem;
              top: 0.8125rem;
              // padding-left: 4.25rem;
            }
          }
          .is-active{
            background-color: #0D5695;
            color: #FFFFFF;
          }
        }
      }
      .el-tabs__content{
         height: calc(~"100% - 3.4375rem");
         .el-tab-pane{
           height: 100%;
         }
      }
    }
  }
  
  
  
  
  
  
  
</style>