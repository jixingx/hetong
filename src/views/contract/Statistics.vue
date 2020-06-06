<template>
  <div class="statistics">
    <el-row class="elbox" :gutter="16">
        <el-col :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>统计-合同总览</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
              <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
            </div>
            <div class="echarts-box">
              <div id="myChart1"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>统计-超期/事后合同</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
              <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
            </div>
            <div class="btns">
              <el-button type="info">超期合同</el-button><el-button type="info">事后合同</el-button>
            </div>
            <div class="echarts-box2">
              <div id="myChart2"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>统计-合同收支对比</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
              <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
            </div>
            <div class="echarts-box">
              <div id="myChart3"></div>
            </div>
          </el-card>
        </el-col>
    </el-row>
    <el-row class="elbox" :gutter="16">
        <el-col :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>统计-</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
              <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
            </div>
            <div class="echarts-box">
              <div id="myChart4"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>统计-</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
              <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
            </div>
            <div class="total-box">
                <div class="total-box-left">
                  <p>昨日合同：1000份</p>
                  <p>合同所占百分比：78%</p>
                </div>
                <div class="total-box-right">
                  <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期"
                    >
                  </el-date-picker>
                </div>
            </div>
            <div class="echarts-box">
              <div id="myChart5"></div>
            </div>
          </el-card>
        </el-col>
        <el-col :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>统计-</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
              <img src="../../assets/img/home/right.png" class="xqright" alt="" srcset="">
            </div>
            <div class="spepof">
              <div class="spepof-left">
                <div id="myChart6"></div>
              </div>
              <div class="spepof-right">
                <div class="speof-item">
                  <p>0</p>
                  <p>完成目标</p>
                </div>
                <div class="speof-item">
                  <p>0</p>
                  <p>新建合同</p>
                </div>
                <div class="speof-item">
                  <p>0</p>
                  <p>进行中</p>
                </div>
                <div class="speof-item">
                  <p>0</p>
                  <p>未完成</p>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:"statistics",
    data () {
      return {
        value1:''  
      }
    },
    created () {
      // this.drawLine1()
      // const that=this
      // //console.log(that.$refs.bodyHeight.offsetHeight)
      // window.onresize = () => {
      //     that.$echarts.init(document.getElementById('myChart1')).resize();
      // }
      
      
    },
    mounted () {
      this.drawLine1()
      this.drawLine2()
      this.drawLine3()
      this.drawLine4()
      this.drawLine5()
      this.drawLine6()
      const that=this
      // //console.log(that.$refs.bodyHeight.offsetHeight)
      window.onresize = () => {
          that.$echarts.init(document.getElementById('myChart1')).resize();
          that.$echarts.init(document.getElementById('myChart2')).resize();
          that.$echarts.init(document.getElementById('myChart3')).resize();
          that.$echarts.init(document.getElementById('myChart4')).resize();
          that.$echarts.init(document.getElementById('myChart5')).resize();
          that.$echarts.init(document.getElementById('myChart6')).resize();
      }
    },
    methods: {
      //第一个图表
      drawLine1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        
        // 绘制图表
        myChart1.setOption({
          
          // tooltip: {
          //     trigger: 'axis',
          //     axisPointer: {
          //         type: 'shadow'
          //     }
          // },
          grid: {
              left: '0%',
              right: '5%',
              // bottom: '8%',
              containLabel: true
          },
          xAxis: {
              show:false,
          },
          yAxis:[
             {
                type: 'category',
                data: ['申报合同', '签订合同', '履行合同'],
                axisTick:{       
                    "show":false
                },
                splitLine: {
                    show: false
                },
                axisLine:{
                  show:false
                }
            },
            {
                show:true,
                data: [701, 350, 610],
                axisTick:{       
                    "show":false
                },
                splitLine: {
                    show: false
                },
                axisLine:{
                  show:false
                }
            }
          ],
          series: [
              {
                name: '条',
                type: 'bar',
                data: [70, 20, 50],
                //柱子之间的间距
                barCategoryGap:50,
                //柱子的宽度
                barwidth:18,
                //修改第一组柱子的圆角
                itemStyle:{
                  // barBorderRadius:20,
                  //此时的color 修改柱子的颜色
                  color:'#0D5593'
                },
                //图形上的文本标签
                label:{
                  normal:{
                    show:false,
                    //图形内显示
                    position:'inside',
                    //文字的显示格式
                    //{c}会自动解析为数据 data里面的数据
                    formatter:"{c}%"
                  }
                },
                yAxisIndex:0,
                z:2
              },
              {
                  name: '框',
                  type: 'bar',
                  data: [100, 100, 100],
                  barCategoryGap:50,
                  barwidth:18,
                  itemStyle:{
                    color:'#F0F0F0',
                    
                  },
                  yAxisIndex:1,
                  // backgroundStyle:{
                  //   color:"#F0F0F0"
                  // }
                  z:1
              }
          ]
        });
      },
      //第二个图表
      drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        let data=[
            {value: 10, name: '超期',itemStyle:{color:"#0D5593"}},
            {value: 20, name: '未超期',itemStyle:{color:"#E3E3ED"}},
        ]
        // 绘制图表
        myChart2.setOption({
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
              right: 0,
              top:70,
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
                    radius: ['35%', '50%'],
                    center: ['30%', '40%'],//设置饼图位置
                    //avoidLabelOverlap: false,
                    label: {
                        show: true,
                        // position: 'center'
                        formatter: "{d}%"
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            // fontWeight: 'bold',
                            formatter: "{d}%"
                        }
                    },
                    //roseType: 'area',
                    data: data,
                }
            ]
        });
      },
      //第三个图表
      drawLine3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        // 绘制图表
        myChart3.setOption({
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
      //第四个图表
      drawLine4(){
        // 基于准备好的dom，初始化echarts实例
        let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
        // 绘制图表
        myChart4.setOption({
          color:['#0D5593'],
          tooltip: {
            trigger: 'axis',
            axisPointer:{
                type:'cross',
                axis:"x",
                snap:true,
                lineStyle:{
                    color:"#0D5593",
                    type:'dashed'
                }
            }
          },
          legend: {
              data: ['收入'],
              right:"0",
              top:'0%',
              temWidth:8,
              itemHeight:8,
              textStyle:{
                  color:'#666666',
                  fontSize :14
              },
              icon:'rect'
          },
          
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  data: ['01', '02', '03', '04', '05', '06', '07'],
                  axisTick:{       
                        show:false
                  },
                  splitLine: {
                        show: false
                  },
                  
              }
          ],
          yAxis: 
              {
                  name:"元",
                  type: 'value',
                  axisTick:{       
                    show:false
                  },
                  splitLine: {
                    show: false
                  }
                  
              },
          
          series:[
            {
              name: '收入',
              type: 'line',
              stack: '总量',
              symbol:'roundRect',
              symbolSize:10,
              smooth:true,
              label:false,
              areaStyle: {
                color: {
                    type: 'linear',
                    y: 0,
                    y2:1,
                    colorStops: [{
                          offset: 0, color: '#fff' // 0% 处的颜色
                      }, {
                          offset: 1, color: '#F7F7FE' // 100% 处的颜色
                      }],
                      global: false // 缺省为 false
                  }
              },
              itemStyle:{
                  borderColor:"#fff",
                  borderWidth:2
              },
              lineStyle:{
                  shadowBlur:7,
                  shadowColor:'#E4EAF6',
                  shadowOffsetY:13,
              },
              data: [
                  {value:1100,symbol:'none'}, 
                  {
                      value:1320,
                      label:
                      {show:true,
                      position:'top',
                      color:'#0D5593',
                      fontSize:16,
                      backgroundColor:'#FFFFFF',
                      padding:[8,7],
                      shadowColor:'0px 3px 6px rgba(0,0,0,0.16)'}
                  }, 
                  {value:2000,symbol:'none'}, 
                  {value:2056,symbol:'none'}, 
                  {value:2088,symbol:'none'}, 
                  {value:2099,symbol:'none'},
                  {value:3100,symbol:'none'}
              ]
            }
          ]
        })
      },
      //第五个图表
      drawLine5(){
        // 基于准备好的dom，初始化echarts实例
        let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
        let data=[
            {value: 180, name: '昨日填报合同',itemStyle:{color:"#0D5593"}},
            {value: 320, name: '昨日处理合同',itemStyle:{color:"#BEDBF0"}},
            {value: 50, name: '昨日审批合同',itemStyle:{color:"#FF8910"}},
            {value: 405, name: '昨日完成合同',itemStyle:{color:"#909DF2"}},
        ]
        // 绘制图表
        myChart5.setOption({
            title:{
              text:'各部分合同所占百分比',
              bottom:30,
              right:"12%"
            },
            tooltip: {
                trigger: 'item',
                formatter: '{c} ({d}%)'
            },
            // color:['#0D5593','#0D5593'],
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
              left: 0,
              top:98,
              itemWidth:12,
              itemHeight:12,
              orient: 'vertical',  //垂直显示
              textStyle:{
                rich:{
                    // a:{
                    //     fontSize:14,
                    //     verticalAlign:'top',
                    //     // align:'center',
                    //     padding:[0,0,22,0],
                    //     color:'#333333',
                    //     // lineHeight:10
                    // },
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
              data: [ '昨日填报合同','昨日处理合同','昨日审批合同','昨日完成合同'],
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
                    '{b|'+name+'：'+target+'份}'
                ]
                return arr.join('\n')
              },
            },
            series: [
                {
                    type: 'pie',
                    radius: '60%',
                    center: ['70%', '50%'],//设置饼图位置
                    //avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: "{d}%",
                    },
                    
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            // fontWeight: 'inner',
                            formatter: "{d}%"
                        }
                    },
                    //roseType: 'area',
                    data: data,
                }
            ]
        });
      },
      drawLine6(){
        // 基于准备好的dom，初始化echarts实例
        let myChart6 = this.$echarts.init(document.getElementById('myChart6'))
        myChart6.setOption({
          color:["#CDDCE9","#0D5593"],
          //  提示框组件
          tooltip: {
              //是否显示提示框组件，包括提示框浮层和 axisPointe
              show:true,
              // 触发类型: item:数据项触发，axis：坐标轴触发
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          // // 图例
          // legend: {
          //     orient: 'vertical',
          //     x: 'left',
          //     data:['完成率']
          // },
          
          // 系列列表。每个系列通过 type 决定自己的图表类型
          series: [
              {
                  // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                  name:'任务进度',
                  type:'pie',
                  // 饼图的半径，数组的第一项是内半径，第二项是外半径
                  radius: ['90%', '100%'],
                  center: ['47%', '50%'],//设置饼图位置
                  // 是否启用防止标签重叠策略，默认开启
                  avoidLabelOverlap: false,          
                  hoverAnimation: false,
                  // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data:[
                      {   // 数据值
                          value:20, 
                          // 数据项名称
                          name:'完成率',
                          //该数据项是否被选中
                          selected:false,
                          // 单个扇区的标签配置
                          label: {
                            normal: {
                                // 是显示标签
                                show: true,
                                position: 'center',
                                fontSize: 18,
                                color:"#333333",
                                padding:[20,20,20,20],
                                // width:150,
                                // height:150,
                                //borderWidth:20,
                                borderRadius:[50,50,50,50],
                                backgroundColor:"#fff",
                                shadowColor:"#EDEDED",
                                shadowBlur:30,
                                
                                // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                                formatter:'{d}%\n{b}',
                            },
                          
                      },
                      
                      },
                      {
                          value:100, 
                          label:{
                              normal:{
                                  show:false,
                                  
                              }
                          }
                          
                      },
                    
                  ]
              }
          ]
        })
      }
    }
  } 
</script>

<style lang="less" scoped>
.statistics{
  height: 100%;
  .elbox{
    height: calc(~"(100% - 1.125rem) / 2");
    .el-col{
      height: 100%;
      .box-card{
        height: 100%;
        padding: 0 0.8125rem 0 1.25rem;
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        /deep/.el-card__header{
          padding: 0;
          box-sizing: border-box;
          height: 3.4375rem;
          border-bottom: 1px solid #F0F0F0;
          .clearfix{
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
              font-size: 1.125rem;
              color: #333333;
              font-weight: bold;
            }
            img{
              width: 1.25rem;
              height: 1.25rem;
            }
          }
          
        }
        /deep/.el-card__body{
          padding: 0;
          height: calc(~"100% - 3.4375rem");
          position: relative;
          .echarts-box{
            height: 100%;
            width: 100%;
          }
        }
      }

    }
    &:nth-child(1){
      margin-bottom: 1.125rem;
    }
  }
  #myChart1{
    height: 100%;
    width: 100%;
  }
  #myChart3{
    height: 100%;
    width: 100%;
  }
  #myChart4{
    height: 100%;
    width: 100%;
  }
  #myChart5{
    height: 100%;
    width: 100%;
  }
  .btns{
    border:1px solid rgba(204,204,204,1);
    width: 18.1875rem;
    margin: 1.75rem auto 0;
    box-sizing: border-box;
    /deep/.el-button{
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
          background:#0D5593;
          color: #FFFFFF;
      }
    }
  }
  .echarts-box2{
    height: calc(~"100% - 4.875rem");
    #myChart2{
      height: 100%;
    }  
  }
  .total-box{
    position: absolute;
    top: 2.25rem;
    left: 0;
    width: 100%;
    .total-box-left{
      float: left;
      p{
        color: #333333;
        font-size: 1rem;
        font-weight: 500;
        &:nth-child(2){
          font-size: 1.125rem;
          margin-top: 1rem;
        }
      }
    }
    .total-box-right{
      float: right;
      position: relative;
      z-index: 9999999999999999;
      /deep/.el-date-editor.el-input{
        width: auto;
        .el-input__inner{
          padding: 0;
          border: 0;
          height: auto;
          line-height: 1;
          color: #999999;
          font-size: 1rem;
          text-align: left;
          // padding-right: 0px;
          padding-left: 40px;
        }
        .el-input__prefix{
          // display: none;
          left: 18px;
          .el-input__icon{
            line-height: 1;
          }
        }
        .el-input__suffix{
          display: none;
          top: 0;
          .el-input__icon{
            line-height: 1;
          }
        }
      }
    }
    
  }
  .spepof{
    height: 100%;
    box-sizing: border-box;
    padding: 4.6875rem 0 7rem;
    
    .spepof-left{
      float: left;
      width: 49%;
      height: 100%;
      #myChart6{
        width: 100%;
        height: 100%;
      }
    }
    .spepof-right{
      float: left;
      width: 51%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      // align-items: center;
      .speof-item{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        p{
          color: #333333;
          font-weight: bold;
          font-size: 1.75rem;
          &:nth-child(2){
            color: #999999;
            font-weight: 400;
            font-size: 0.875rem;
          }
        }
      }
    }
  }
}
</style>