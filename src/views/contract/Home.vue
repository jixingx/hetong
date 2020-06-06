<template>
  <div class="home">
      <el-row type="flex" class="row-bg" justify="space-between" :gutter="20">
        <el-col :lg="18" :xl="18" class="box-left">
          <el-row type="flex" justify="space-between" :gutter="24">
            <el-col :lg="12" :xl="12">
              <el-card class="box-card card-box1 card-top">
                <div slot="header" class="clearfix">
                  <span>总览</span>
                  <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                  <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
                </div>
                <div class="item">
                  <p>
                    <img src="../../assets/img/home/tongji1.png" alt="">
                    <span>申报</span>
                  </p>
                  <p>12345678</p>
                </div>
                <div class="item">
                  <p>
                    <img src="../../assets/img/home/tongji2.png" alt="">
                    <span>签订</span>
                  </p>
                  <p>12345678</p>
                </div>
                <div class="item">
                  <p>
                    <img src="../../assets/img/home/tongji3.png" alt="">
                    <span>履行</span>
                  </p>
                  <p>12345678</p>
                </div>
            </el-card>
            </el-col>
            <el-col :lg="12" :xl="12">
              <el-card class="box-card card-box2 card-top">
                <div slot="header" class="clearfix">
                  <span>公告栏</span>
                  <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                  <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
                </div>
                <div class="notice-item">
                  <div class="notice-item-left">
                    <p>这事一条公告栏信息标题展示asdadas.</p>
                    <img src="../../assets/img/home/new.png" alt="">
                  </div>
                  <span>2018-02-10 12:35</span>
                </div>
                <div class="notice-item">
                  <div class="notice-item-left">
                    <p>这事一条公告栏信息标题展示asdadas.</p>
                    <img src="../../assets/img/home/new.png" alt="">
                  </div>
                  <span>2018-02-10 12:35</span>
                </div>
              </el-card>
            </el-col>
            
          </el-row>
          <el-row class="tablelist">
            <el-col type="flex" :lg="24" :xl="24" class="table-card-box1" justify="space-between">
                <el-card class="box-card card-need card-table">
                  <div slot="header" class="clearfix">
                    <span>待办事项</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
                  </div>
                  <el-table
                    v-loading="loading"
                    :data="tableData"
                    height="92%"
                    style="width: 100%;">
                        <af-table-column
                            label="合同名称"
                            prop="Title"
                        >
                        </af-table-column>
                        <af-table-column
                            prop="FlowName"
                            label="当前工作"
                        >
                        </af-table-column>
                        <af-table-column
                            prop="NodeName"
                            label="当前任务"
                        >
                        </af-table-column>
                        <af-table-column
                            prop="StarterName"
                            label="合同承办人"
                        >
                        </af-table-column>
                    </el-table>
                </el-card>
            </el-col>
            <el-col type="flex" :lg="24" :xl="24" class="table-card-box2" justify="space-between">
                <el-card class="box-card card-table">
                  <div slot="header" class="clearfix">
                    <span>已办事项</span>
                    <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                    <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
                  </div>
                  <el-table
                  v-loading="loading"
                  :data="tableData"
                  height="92%"
                  style="width: 100%;">
                      <af-table-column
                          label="合同名称"
                          prop="Title"
                      >
                      </af-table-column>
                      <af-table-column
                          prop="FlowName"
                          label="当前工作"
                      >
                      </af-table-column>
                      <af-table-column
                          prop="NodeName"
                          label="当前任务"
                      >
                      </af-table-column>
                      <af-table-column
                          prop="StarterName"
                          label="合同承办人"
                      >
                      </af-table-column>
                  </el-table>
                </el-card>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="6" :xl="6" class="right-col">
          <el-card class="box-card right-topcard">
            <div slot="header" class="clearfix">
              <span>统计-合同收支对比</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
              <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
            </div>
            <div id="myChart2"></div>
          </el-card>
          <el-card class="box-card right-bootomcard">
            <div slot="header" class="clearfix">
                <span>统计-超期/事后合同</span>
                <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
            </div>
            <div class="btns">
                <el-button type="info">超期合同</el-button><el-button type="info">事后合同</el-button>
            </div>
            <div class="echarts-box">
                <div id="myChart3"></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import {apiHomeGtasksList} from '../../api/index'
export default {
    name:'Home',
    data () {
      return {
        tableData: [],
        currentPage4: 1 ,  
        loading:true  
      }
    },
    created () {
        this.getGtasks()
    },
    mounted () {
        this.drawLine2()
        this.drawLine3()
        const that=this
        //console.log(that.$refs.bodyHeight.offsetHeight)
        window.onresize = () => {
            that.$echarts.init(document.getElementById('myChart2')).resize();
            that.$echarts.init(document.getElementById('myChart3')).resize();
        }

    },
    methods: {
      //待办事项列表获取
      async getGtasks(){
          let gtasksList=await apiHomeGtasksList(this.$store.getters.getUser.No)
          //console.log(gtasksList)
          if(gtasksList.d){
              let d=gtasksList.d
              let data=eval("("+d+")")
              this.tableData=data
              //console.log(data)
              this.loading=false
          }else{
              this.tableData=[]
              this.loading=false
          }
      },
      //第一个图表
      drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart2.setOption({
          color:['#0D5593','#CCCCCC'],
          tooltip: {
              formatter: function (params) {
                  // console.log(params)
                  // var tar = params[1];
                  return "￥" + params.value +".00"+'<br/>' + ' 2100件 ' ;
              }
          },
          legend: {
              data: ['收入', '支出'],
              right:"0",
              top:'5%',
              itemWidth:12,
              itemHeight:12,
              textStyle:{
                color:'#666666',
                fontSize :14
              }
          },
          grid: {
              left: '16%',
              // right: '1%',
              // bottom: '10%',
              //containLabel: true,
              // height:'100%',
              width:'80%'
          },
          xAxis: {
              type: 'category',
              axisTick:{       
                  "show":false
              },
              axisLine:{       
                  "show":true,
                  "lineStyle":{
                    "color":'##707070',
                    "width":1
                  }
              },
              
              data : ['01','02','03','04','05','06','07'],
          },
          yAxis: {
              //show:false,
              name:"元",
              axisTick:{       
                  "show":false
              },
              axisLine:{       
                  "show":true,
                  "lineStyle":{
                    "color":'##707070',
                    "width":1,
                  }
              },
              splitLine: {
                  show: false
              }
          },
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
              {
                  name:'收入',
                  type: 'bar',
                  data:["2300",'4300','1100','2200','3400','3400','2300'],
          //         itemStyle: {
          //             normal: {
          // 　　　　　　　　//这里是重点
          //                 color: function(params) {
          //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
          //                     var colorList = ['#0D5593','#0D5593', '#0D5593', '#0D5593', '#0D5593','#0D5593', '#0D5593'];
          //                     return colorList[params.dataIndex]
          //                 }
          //             }
          //         }
              },
              {
                  name:'支出',
                  type: 'bar',
                  data:["1200",'3400','2300','4500','2300','4600','2600'],
          //         itemStyle: {
          //             normal: {
          // 　　　　　　　　//这里是重点
          //                 color: function(params) {
          //                     //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
          //                     var colorList = ['#CCCCCC','#CCCCCC', '#CCCCCC', '#CCCCCC', '#CCCCCC','#CCCCCC', '#CCCCCC'];
          //                     return colorList[params.dataIndex]
          //                 }
          //             }
          //         }
              },
          ]
        });
      },
      drawLine3(){
            // 基于准备好的dom，初始化echarts实例
            let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
            let data=[
                {value: 10, name: '超期',itemStyle:{color:"#0D5593"}},
                {value: 20, name: '未超期',itemStyle:{color:"#E3E3ED"}},
            ]
            // 绘制图表
            myChart3.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: '{c} ({d}%)'
                },
                // color:['#E3E3ED','#0D5593'],
                grid: {
                    // left: '3%',
                    // right: '4%',
                    //bottom: '30%',
                    // top:'1%',
                    
                    //containLabel: true,
                    height:'10%',
                    width:"50%"
                },
                legend:{
                  //itemWidth: 20,  // 设置宽度
                  //itemHeight: 6, // 设置高度
                  // // align:'left',
                  // itemGap: 12,
                  left: 'center',
                  bottom:0,
                  itemWidth:12,
                  itemHeight:12,
                  orient: 'vertical',  //垂直显示
                  textStyle:{
                    rich:{
                        a:{
                            fontSize:14,
                            verticalAlign:'top',
                            // align:'center',
                            padding:[0,0,22,0],
                            color:'#333333',
                            // lineHeight:10
                        },
                        b:{
                            fontSize:12,
                            // align:'center',
                            //padding:[0,10,2,0],
                            color:'#333333',
                            padding:[0,0,0,0],
                            lineHeight:20
                            
                        }
                    }
                  },
                  // textStyle:{
                  //   fontSize:14,
                  //   color:'#333333',
                  // },
                  data: [ '超期','未超期'],
                  formatter:function(name){
                    var total = 0;
                    var target;
                    for (var i = 0, l = data.length; i < l; i++) {
                      total += data[i].value;
                      if (data[i].name == name) {
                          target = data[i].value;
                        }
                    }
                    var arr = [
                        '{a|'+name+'}',
                        '{b|'+name+'  '+target+'     占比     '+((target/total)*100).toFixed(2)+'%}'
                    ]
                    return arr.join('\n')
                  },
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['40%', '55%'],
                        center: ['50%', '37%'],//设置饼图位置
                        //avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        // emphasis: {
                        //     label: {
                        //         show: true,
                        //         fontSize: '30',
                        //         fontWeight: 'bold'
                        //     }
                        // },
                        //roseType: 'area',
                        data: data,
                    }
                ]
            });
        },
    }
}
</script>

<style lang="less" scoped>
.home{
  height: 100%;
}
.row-bg{
  height: 100%;
}
.box-left{
  height: 100%;
}
.box-card{
  box-shadow:0px 3px 6px rgba(0,0,0,0.16);
  border-radius:16px;
}
.xqright{
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}
.card-top{
  height: 9.1875rem;
  margin-bottom: 1.25rem;
}
.card-box1{
  padding: 0 2rem 0 1.5625rem;
  /deep/.el-card__header{
    border-bottom:0px !important;
    padding: 1.0625rem 0 0.5625rem 0;
   
    .clearfix{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      span{
        font-family:Source Han Sans CN;
        font-weight:500;
        color:rgba(51,51,51,1);
        font-size: 1.125rem;
      }
    }
  }
  /deep/.el-card__body{
    padding: 0;
    padding-bottom: 0.625rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item{
      height: 5.8125rem;
      background:rgba(247,247,247,1);
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p:nth-child(1){
        margin-bottom: 0.875rem;
        display: flex;
        align-items: center;
        img{
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 1.875rem;
        }
        span{
          font-weight:400;
          color:rgba(51,51,51,1);
          font-size: 0.875rem;
        }
        
      }
      p:nth-child(2){
        font-weight:400;
        color:rgba(51,51,51,1);
        font-size: 1.25rem;
      }
    }
  }
}
.card-box2{
  padding: 0 1.875rem 0 2rem;
  /deep/.el-card__header{
    padding: 1.0625rem 0 0.875rem 0;
    border-bottom-color: #f0f0f0;
    .clearfix{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      span{
        font-weight:500;
        color:rgba(51,51,51,1);
        font-size: 1.125rem;
      }
    }
  }
  /deep/.el-card__body{
    padding: 0;
    height: 56%;
    overflow-y: auto;
    overflow-x: hidden;
    .notice-item{
      height: 2.4505rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom:1px solid rgba(240,240,240,1);
      .notice-item-left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
          width: 12.125rem;
          font-size: 0.875rem;
          color: #666666;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        img{
          margin-left: 1.5625rem;
          border-radius:8px;
          width: 2.25rem;
          height: 1rem;
        }
      }
      span{
        color: #999999;
        font-size: 0.75rem;
      }
      &:last-child{
        border-bottom:0px;
      }
    }
  }
}
.tablelist{
  height: calc(~"100% - 10.4375rem");
  // margin: 1.25rem 0;
  .table-card-box1{
    height: calc(~"(100% - 1.25rem) / 2");
    margin-bottom: 1.25rem;
  }
  .table-card-box2{
    height: calc(~"(100% - 1.25rem) / 2");
  }
  // .table-card-box{
  //   height: calc(~"100% - 10.4375rem");
  //   margin-top: 1%;
  // }
}
.card-table{
  height: 100%;
  padding: 0 1.75rem 0 2rem;
  /deep/.el-card__header{
    // padding: 1.125rem 0 1.25rem 0;
    padding: 0;
    padding-top:1.125rem ;
    height: 3.5rem;
    border-bottom-color: #f0f0f0;
    .clearfix{
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      span{
        font-weight:500;
        color:rgba(51,51,51,1);
        font-size: 1.125rem;
      }
    }
  }
  /deep/.el-card__body{
    padding: 0;
    height: calc(~"100% - 3.5rem");
  }
}
.right-col{
  height: 100%;
  .right-topcard{
    height: 20.25rem;
    margin-bottom: 1.25rem;
    box-sizing: border-box;
    padding: 0 1.25rem;
    /deep/.el-card__header{
      padding: 1rem 0 1.25rem 0;
      border-bottom-color: #f0f0f0;
      .clearfix{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        span{
          font-weight:500;
          color:rgba(51,51,51,1);
          font-size: 1.125rem;
        }
      }
    }
    /deep/.el-card__body{
      padding: 0;
      height: 82%;
      #myChart2{
        height: 100%;
      }
    }
  }
  .right-bootomcard{
    height: calc(~"100% - 21.5rem");
    box-sizing: border-box;
    padding: 0 0.5625rem 0 1.25rem;
    /deep/.el-card__header{
      padding: 1.0625rem 0 1.1875rem 0;
      border-bottom-color: #f0f0f0;
      .clearfix{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        span{
          font-weight:500;
          color:rgba(51,51,51,1);
          font-size: 1.1875rem;
        }
      }
    }
    /deep/.el-card__body{
      padding: 2.375rem 0 0 0;
      height: 87%;
      .btns{
        border:1px solid rgba(204,204,204,1);
        width: 18.1875rem;
        margin: 0 auto;
        box-sizing: border-box;
        .el-button{
          border-radius: 0;
          border: 0;
          height: 2.5rem;
          padding: 0;
          width: 50%;
          font-size: 1rem !important;
          background:rgba(240,240,240,1);
          color: #CCCCCC;
          span{
              font-size: 1rem !important;
          }
          &+.el-button{
              margin-left: 0px;
          }
          &:nth-child(1){
              background:rgba(255,255,255,1);
              color: #333333;
          }
        }
      }
      .echarts-box{
        height: calc(~"100% - 4.875rem");
        #myChart3{
          height: 100%;
        }  
      }
    }
  }
}
</style>