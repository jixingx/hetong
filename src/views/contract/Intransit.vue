<template>
    <div class="intransit">
        <el-row class="rowa">
      <el-col :span="24" class="elcol1">
        <div class="serach-box">
          <el-form :inline="true" class="serachform" size="mini" >
            <el-form-item label="合同名称" >
              <el-input placeholder="合同名称" v-model="fromSearch.htmc"></el-input>
            </el-form-item>
            <el-form-item label="当前节点" >
              <el-input placeholder="当前节点" v-model="fromSearch.htmc"></el-input>
            </el-form-item>
            <el-form-item label="合同承办人" >
              <el-input placeholder="合同承办人" v-model="fromSearch.htmc"></el-input>
            </el-form-item>
            <el-form-item label="发起日期" >
              <el-date-picker placeholder="发起日期" v-model="fromSearch.qdsj" type="datetime" class="datew"></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="serach-btn" icon="el-icon-search">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <span>待办事项</span>
          <el-button type="primary"><img src="../../assets/img/gtasks/dc.png" alt=""> 导出</el-button>
      </div>
      <el-table
          :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          height="93%"
          v-loading="loading"
          :row-class-name="tableRowClassName"
          >
          <af-table-column
          label="合同名称"
          prop="Title"
          >
              
          </af-table-column>
          <af-table-column
          prop="NodeName"
          label="当前节点"
          >
          </af-table-column>
          <af-table-column
          prop="StarterName"
          label="合同承办人"
          >
          </af-table-column>
          <af-table-column
          prop="RDT"
          label="发起日期"
          
          >
          </af-table-column>
          <af-table-column
          label="总运行天数"
          :formatter="formatADD"
          >
          </af-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[15, 20, 30]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </el-card>
    </div>
</template>

<script>
import {apiIntransitList} from '../../api/index'
export default {
    name:"Intransit",
    data () {
      return {
          tableData: [],
          loading:true,
          fromSearch:{
            htmc:''
          },
          total:0,
          currentPage:1,
          pageSize:15
      }
    },
    created () {
      this.getIntransit()
    },
    methods: {
      //待办事项列表获取
      async getIntransit(){
          let getIntransitList=await apiIntransitList(this.$store.getters.getUser.No)
          //console.log(gtasksList)
          if(getIntransitList.d){
              let d=getIntransitList.d
              let data=eval("("+d+")")
              this.tableData=data
              //console.log(data)
              this.loading=false
              
              this.total=data.length
          }else{
              this.tableData=[]
              this.loading=false
          }
      },
    //   formatWFState(row, column,cellValue) {
    //         if(cellValue==2){
    //             return "送审"
    //         }else if(cellValue==5){
    //             return "退回修改"
    //         }
    //   },
      formatADD(row, column,cellValue) {
          //console.log(row)
          let date=new Date();
          let currentDay=date.getFullYear()+""+((date.getMonth()+1)+"").padStart(2,"0")+date.getDate();
          //console.log(currentDay)
          let olddate=row.RDT.split(" ")[0]
          olddate=olddate.split("-")
          let oldday=olddate.join("");
          //console.log(oldday)
          let day=currentDay-oldday
          //console.log(day)
          return day+"天"
       },
      //表格隔行变色
      tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 == 0) {
          return 'success-row';
        }
        return '';
      },
      //分页
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
        this.pageSize=val
      },
      handleCurrentChange(val) {
        // console.log(`当前页: ${val}`);
        this.currentPage=val
      }
    }
}
</script>

<style lang="less" scoped>
.intransit{
  height: 100%;
  width: 100%;
  box-sizing: border-box;
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
        width: 20%;
        box-sizing: border-box;
        padding-left:20px;
        margin-right: 0px;
        &>.el-form-item__content{
          width: 63%;
        }
        .el-button--primary{
          background:rgba(13,85,147,1);
          box-shadow:0px 3px 6px rgba(0,0,0,0.16);
          border: rgba(13,85,147,1);
        }
        .serach-btn{
          // margin-left: 20px;
        }
      }
    }
  }
  .box-card{
    height: calc(~"100% - 90px");
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    border-radius:10px;
    /deep/.el-card__header{
      height: 4.0625rem;
      // box-sizing: border-box;
      padding: 0 3.0625rem 0 2.8125rem;
      // border: 0;
      .clearfix{
      height: 99%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // border-bottom: 1px solid #F0F0F0;
      &>span{
        font-weight:500;
        color:rgba(51,51,51,1);
        font-size: 1.125rem;
      }
      .el-button{
        padding: 0;
        height: 2.25rem;
        width: 7.375rem;
        box-shadow:0px 3px 6px rgba(0,0,0,0.16);
        background:rgba(13,85,147,1);
        span{
          font-size: 1rem;
          color: #FFFFFF;
          img{
            height: 1rem;
            width: 1rem;
            vertical-align: middle;
            margin-right: 0.5rem;
         }
        }
      }
    }
    }
  }
  /deep/ .el-card__body{
    height: calc(~"100% - 4.0625rem");
    // height: 99%;
    padding: 0;
  }
}

.datew{
  width:100% !important;
}
/deep/.el-table .success-row {
  background: #F1F6FC !important;
}
</style>