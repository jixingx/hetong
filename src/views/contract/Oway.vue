<template>
  <div class="oway">
      <el-row class="rowa">
        <el-col :span="24" class="elcol1">
           <div class="serach-box">
              <el-form :inline="true" class="serachform" size="mini" >
               
                <el-form-item label="合同名称" >
                  <el-input placeholder="合同名称" v-model="fromSearch.htmc"></el-input>
                </el-form-item>
                <el-form-item label="合同编号" >
                  <el-input placeholder="合同编号" v-model="fromSearch.htbh"></el-input>
                </el-form-item>
                <el-form-item label="年份">
                  <el-select 
                  v-model="fromSearch.yaer" 
                  placeholder="请选择年份"
                  multiple
                  filterable
                  allow-create
                  >
                    <el-option v-for="item in optiyear"
                      :key="item"
                      :label="item+'年'" 
                      :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                  <el-form-item>
                  <el-button type="primary" class="serach-btn" @click="Serach(1)" icon="el-icon-search">查询</el-button>
                  <el-popover
                    placement="bottom"
                    width="600"
                    trigger="click"
                    v-model="visible">
                    <el-form size="mini">
                      <el-row :gutter="10">
                        <el-col :span="12">
                          <el-form-item label="资金流向" >
                            <el-input placeholder="资金流向" v-model="fromSearch.lx"></el-input>
                          </el-form-item>
                          <el-form-item label="选商方式" >
                            <el-input placeholder="选商方式" v-model="fromSearch.xsfs"></el-input>
                          </el-form-item>
                          <el-form-item label="审批时间" >
                            <!-- <el-date-picker placeholder="审批时间" v-model="fromSearch.spsj" type="date" ></el-date-picker> -->
                            <el-date-picker
                              value-format="yyyy-MM-dd"
                              @change="spsjChange"
                              v-model="spsj"
                              type="daterange"
                              class="datew"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
                            </el-date-picker>
                          </el-form-item>
                          <el-form-item label="生效时间" >
                              <!-- <el-date-picker placeholder="生效时间" v-model="fromSearch.sxsj" type="date" class="datew"></el-date-picker> -->
                              <el-date-picker
                                v-model="sxsj"
                                @change="sxsjChange"
                                value-format="yyyy-MM-dd"
                                type="daterange"
                                class="datew"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                              </el-date-picker>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item label="资金渠道" >
                            <el-input placeholder="资金渠道" v-model="fromSearch.zjqd"></el-input>
                          </el-form-item>
                          <!-- <el-form-item label="合同类别" >
                              <el-input placeholder="合同类别"></el-input>
                          </el-form-item> -->
                          <el-form-item label="申报时间" >
                              <!-- <el-date-picker placeholder="申报时间" v-model="fromSearch.sbsj" type="date" class="datew"></el-date-picker> -->
                              <el-date-picker
                                v-model="sbsj"
                                type="daterange"
                                class="datew"
                                @change="sbsjChange"
                                value-format="yyyy-MM-dd"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                              </el-date-picker>
                          </el-form-item>
                          <el-form-item label="签订时间" >
                              <!-- <el-date-picker placeholder="签订时间" v-model="fromSearch.qdsj" type="date" class="datew"></el-date-picker> -->
                              <el-date-picker
                                v-model="qdsj"
                                type="daterange"
                                class="datew"
                                @change="qdsjChange"
                                value-format="yyyy-MM-dd"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                              </el-date-picker>
                          </el-form-item>
                          <el-form-item label="相对人" >
                            <el-input placeholder="相对人" v-model="fromSearch.xdrmc"></el-input>
                          </el-form-item>
                          
                        </el-col>
                      </el-row>
                      <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible = false">关闭</el-button>
                        <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                      </div>
                    </el-form>
                    <el-button slot="reference" type="primary" size="mini" >更多</el-button>
                  </el-popover>
                  <el-button type="primary" class="serach-btn" @click="Serach" icon="el-icon-search">导出</el-button>
                </el-form-item>
              </el-form>
           </div>
           <div class="table-list">
             <el-table
                :data="tableData"
                style="width: 100%"
                size="mini"
                border
                stripe
                v-loading="loading2"
                element-loading-text="数据加载中，请稍后..."
                element-loading-background="#fff"
                height="94%"
                >
                <af-table-column
                    prop="STATUS"
                    label="状态"
                >
                </af-table-column>
                <af-table-column
                    prop="BSXH"
                    label="报审序号"
                >
                </af-table-column>
                <af-table-column
                    prop="HTBH"
                    label="合同编号"
                >
                </af-table-column>
                <af-table-column
                    prop="HTMC"
                    label="合同名称"
                >
                </af-table-column>
                <af-table-column
                    prop="LX"
                    label="资金流向"
                >
                </af-table-column>
                <af-table-column
                    prop="ZJQD"
                    label="资金渠道"
                >
                </af-table-column>
                <af-table-column
                    prop="HTLB"
                    label="合同类别"
                >
                </af-table-column>
                <af-table-column
                    prop="EJLB"
                    label="二级类别"
                >
                </af-table-column>
                <af-table-column
                    prop="SJLB"
                    label="三级类别"
                    min-width="140px"
                >
                </af-table-column>
                <af-table-column
                    prop="XSFS"
                    label="选商方式"
                >
                </af-table-column>
                <af-table-column
                    prop="SBSJ"
                    label="申报时间"
                >
                </af-table-column>
                <af-table-column
                    prop="SPSJ"
                    label="审批时间"
                >
                </af-table-column>
                <af-table-column
                    prop="SCZQ"
                    label="审查周期"
                >
                </af-table-column>
                <af-table-column
                    prop="XMMC"
                    label="项目名称"
                >
                </af-table-column>
                <af-table-column
                    prop="XMLB"
                    label="项目类别"
                >
                </af-table-column>
                <af-table-column
                    prop="CBBM"
                    label="合同承办部门"
                >
                </af-table-column>
                <af-table-column
                    prop="XDRMC"
                    label="合同相对人"
                >
                </af-table-column>
                <el-table-column label="合同审批" header-align="center">
                    <af-table-column
                        prop="CBR"
                        label="承办人"
                    >
                    </af-table-column>
                    <af-table-column
                        prop="SPR"
                        label="审批人"
                    >
                    </af-table-column>
                </el-table-column>
                <el-table-column label="合同签订" header-align="center">
                    <af-table-column
                        prop="HTBD"
                        label="标的名称"
                        width="250"
                    >
                    </af-table-column>
                    <af-table-column
                        prop="BDJE"
                        label="合同价款"
                    >
                    </af-table-column>
                    <af-table-column
                        prop="QDSJ"
                        label="签订时间"
                        width="100"
                    >
                    </af-table-column>
                    <af-table-column
                        prop="SXSJ"
                        label="生效时间"
                        width="100"
                    >
                    </af-table-column>
                    <af-table-column
                        prop="ZZSJ"
                        label="终止时间"
                        width="100"
                    >
                    </af-table-column>
                </el-table-column>
                <el-table-column label="合同履行" header-align="center">
                    <af-table-column
                        prop="YLXJE"
                        label="应履行金额"
                    >
                    </af-table-column>
                    <af-table-column
                        prop="LXJE"
                        label="实际履行金额"
                        min-width="100px"
                    >
                    </af-table-column>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[50, 100, 200, 400]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
             </div>
           </div>
        </el-col>
        
        <div class="dwtree">
          <el-tree
            :data="data"
            node-key="id"
            :default-expanded-keys="['1']"  
            :expand-on-click-node="false"
            @node-click="handleNodeClick"
            v-loading="loading"
            element-loading-text="数据加载中，请稍后..."
            element-loading-background="#fff">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <img src="../../assets/img/oway/shu1.png"  v-if="data.children" alt="" srcset="">
              &#160;
              <img src="../../assets/img/oway/shu2.png"  v-else alt="" srcset="">
               &#160;
              <span :title="node.label">{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
        
      </el-row>
     
  </div>
</template>

<script>
import {apiOwayTree,apiOwayTableList} from '../../api/index'
export default {
  name:"Oway",
  data() {
    return {
      data: [],
      loading:true,
      loading2:false,
      tableData:[],
      currentPage:1,
      pageSize:50,
      total:0,
      ztreeId:'',
      visible:false,
      fromSearch:{
        htmc:'',       
        htbh:'',
        xdrmc:'',
        lx:'',
        zjqd:'',
        xsfs:'',
        RT:'',
        spsj:'',
        qdsj:'',
        lxks:'',
        yaer:[new Date().getFullYear()]
      },
      sbsj:'',
      spsj:'',
      qdsj:'',
      sxsj:'',
      flagpage:0
    }
  },
  created () {
    this.getTree()
  },
  computed: {
    optiyear(){
      let oldyear=2013;
      let newyear=new Date().getFullYear();
      let yearLength=newyear-oldyear;
      let yaerArray=[]
      for (let index = oldyear; index <= newyear; index++) {
        yaerArray.push(index)
        
      }
      return yaerArray
    }
  },
  methods: {
    async getTree(){
      let dataTree=await apiOwayTree();
      
      if(dataTree.length>0){
        this.data=dataTree
        this.loading=false
      }else{
        this.data=[]
        this.loading=false
      }
    },
    handleNodeClick(data){
      this.currentPage=1
      this.ztreeId=data.id
      this.getTable(data.id)
    },
    async getTable(id){
      this.flagpage=0
      this.loading2=true
      let date=new Date().getFullYear()
      let con="year\(RT\)='"+date+"'"
      let tableList=await apiOwayTableList(id,this.currentPage,this.pageSize,con)
      if(tableList.total>0){
        this.total=Number(tableList.total)
        this.tableData=tableList.data[0].Rows
        this.loading2=false
      }else{
        this.loading2=false
        this.total=0
        this.tableData=[]
      }
    },
    handleSizeChange(val) {
      this.pageSize=val
      if(this.flagpage==1){
        this.Serach(1)
      }else{
        this.getTable(this.ztreeId)
      }
      //console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage=val
      if(this.flagpage==1){
        this.Serach(val)
      }else{
        this.getTable(this.ztreeId)
      }
      
      //console.log(`当前页: ${val}`);
    },
    //获取时间值
    spsjChange(val){
      
      this.spsj=val
      if(val){
        this.fromSearch.spsj="(spsj >='"+val[0]+"'"+" and spsj<='"+val[1]+"')"
      }else{
         this.fromSearch.spsj=""
      }
      
    },
    sxsjChange(val){
      this.sxsj=val
      if(val){
        this.fromSearch.lxks="(lxks >='"+val[0]+"'"+" and lxks<='"+val[1]+"')"
      }else{
        this.fromSearch.lxks=""
      }
      
    },
    sbsjChange(val){
      // (rt >='开始时间' and rt<='结束时间' )
      this.sbsj=val
      if(val){
        this.fromSearch.RT="(rt >='"+val[0]+"'"+" and rt<='"+val[1]+"')"
      }else{
        this.fromSearch.RT=""
      }
      
    },
    qdsjChange(val){
      this.qdsi=val
      if(val){
        this.fromSearch.qdsj="(qdsj >='"+val[0]+"'"+" and qdsj<='"+val[1]+"')"
      }else{
         this.fromSearch.qdsj=""
      }
      
    },
    //查询功能
    async Serach(page){
      // console.log(con);
      if(this.ztreeId){
        this.flagpage=1;
        //console.log(this.fromSearch.htmc)
        this.currentPage=page
        this.loading2=true
        let con='';
        for(let key in this.fromSearch){
          if(key!='yaer'){
            if(this.fromSearch[key]){
              // console.log(key)
              if(key=="RT"||key=="qdsj"||key=="lxks"||key=="spsj"){
                con+=this.fromSearch[key]+' and '
              }else{
                con+=key+" like"+" '%"+this.fromSearch[key]+"%'"+' and '
              }
              
            }
          }else{
            if(this.fromSearch[key].length==1){
              con+="year\(RT\)='"+this.fromSearch[key][0]+"'"+' and '
            }else if(this.fromSearch[key].length>1){
              con+='\('
              for (let index = 0; index < this.fromSearch[key].length; index++) {
                con+="year\(RT\)='"+this.fromSearch[key][index]+"'"+' or '
                
              }
              con=con.substring(0,con.lastIndexOf('or')).trim()
              con+='\) and '
            }
            // console.log(this.fromSearch[key])
          }
          
          
        }
        con=con.substring(0,con.lastIndexOf('and'))
        //con=encodeURI(con)
        let tableList=await apiOwayTableList(this.ztreeId,this.currentPage,this.pageSize,con)
        //console.log(tableList);
        if(tableList.total>0){
          this.total=Number(tableList.total)
          this.tableData=tableList.data[0].Rows
          this.loading2=false
        }else{
          this.loading2=false
          this.total=0
          this.tableData=[]
        }
      }else{
        this.$message({
          message: '请点击右侧单位再查询',
          type: 'warning'
        });
      }
      
    },
  }
}
</script>

<style lang="less" scoped>
.oway{
  width: 100%;
  height: 100%;
  .rowa{
    height: 100%;
    // box-sizing: border-box;
    padding-right: 18.25rem;
    .el-col-24{
      height: 100%;
      .serach-box{
        height: 70px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        border-radius:8px;
        margin-bottom: 20px;
        box-sizing: border-box;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 15px;
        .serachform{
          // display: flex;
          // justify-content: space-between;
          // align-items: center;
         /deep/.el-form-item{
          width: 25%;
          margin-right: 0px;
          &>.el-form-item__content{
            width: 66%;
            &:first-child{
              width: 100%;
            }
          }
          .el-button--primary{
            background:rgba(13,85,147,1);
            box-shadow:0px 3px 6px rgba(0,0,0,0.16);
            border: rgba(13,85,147,1);
          }
          
          .serach-btn{
            margin-right: 20px;
            &:last-child{
              margin-left: 20px;
              margin-right: 0px;
            }
          }
         }
        }
        
      }
      .table-list{
        height: calc(~"100% - 90px");
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        border-radius:12px;
      }
    }
      // position: relative;
      // height: 100%;
    .dwtree{
      // position: absolute;
      // right: 0;
      // top: 0;
      // bottom: 0;
      // width: 100%;
      // height: 100%;
      // background:rgba(255,255,255,1);
      // margin-top: -20px;
      // margin-bottom: -20px;
      position: fixed;
      right: 0;
      top: 5.1725rem;
      height: calc(~"100% - 5.0625rem");
      background:rgba(255,255,255,1);
      width: 16.8125rem;
      overflow-x: auto;
      overflow-y: auto;
      /deep/.el-tree-node__expand-icon{
        color: rgba(13,85,147,1);
        &.el-tree-node__expand-icon.is-leaf{
          color: transparent;
        }
      }
      /deep/.el-tree-node>.el-tree-node__children{
        overflow: visible;
      }
    }
  }
  /deep/.el-table--striped .el-table__body tr.el-table__row--striped td{
    background:rgba(241,246,252,1) !important;
  }
  
}
.datew{
  width:100% !important;
}
/deep/.el-select{
  width: 100% !important;
}
</style>