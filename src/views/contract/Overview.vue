<template>
  <div class="overview">
      <div class="launch">
        <div class="box">
            <div class="pad-box">
                <h3>合同总览</h3>
                <div class="certificate">
                    <p>合同编号：SCHY-CL-2014-0001</p>
                    <p>报审序号：2014024522</p>
                </div>
                <el-button type="primary" round size="medium" @click="tableFlag1=!tableFlag1" class="btnblock">{{ tableFlag1?'隐藏':'展开'}}合同申报</el-button>
                <table v-show="tableFlag1">
                    <caption>合同申报信息</caption>
                    <tr>
                        <td>合同名称</td>
                        <td colspan="5"></td>
                    </tr>
                    <tr>
                        <td>合同类别</td>
                        <td></td>
                        <td>二级分类</td>
                        <td></td>
                        <td>三级分类</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>资金流向</td>
                        <td></td>
                        <td>资金渠道</td>
                        <td></td>
                        <td>选商方式</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>资金流向</td>
                        <td></td>
                        <td>标的金额(万元)</td>
                        <td></td>
                        <td>币种</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>是否应急合同</td>
                        <td></td>
                        <td>是否托管单位合同</td>
                        <td></td>
                        <td>是否西油司合同</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>签约依据</td>
                        <td colspan="5">
                            
                        </td>
                    </tr>
                    <tr>
                        <td>所属项目</td>
                        <td colspan="5"></td>
                    </tr>
                    <tr>
                        <td>合同正文</td>
                        <td colspan="5"></td>
                    </tr>
                    <tr>
                        <td>选商资料</td>
                        <td colspan="5"></td>
                    </tr>
                    <tr>
                        <td>承办部门(单位）</td>
                        <td colspan="3"></td>
                        <td>承办人</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>承办情况说明</td>
                        <td colspan="5"></td>
                    </tr>
                    <tr>
                        <td>我方签约单位</td>
                        <td colspan="3"></td>
                        <td>我方签约人</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="3">合同相对人名称</td>
                        <td colspan="3">法定代表人（委托代理人）</td>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td colspan="2">审查审批部门/人</td>
                        <td colspan="2">审查审批意见</td>
                        <td colspan="2">审查审批时间</td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                        <td colspan="2"></td>
                    </tr>
                </table>
                <div class="bts" v-show="tableFlag1">
                    <el-button type="primary">下载审查审批单</el-button>
                </div>
                <el-button type="primary" round size="medium" @click="tableFlag2=!tableFlag2" class="btnblock">{{ tableFlag2?'隐藏':'展开'}}合同签订</el-button>
                <table v-show="tableFlag2">
                    <caption>合同签订信息</caption>
                    <tr>
                        <td>签订时间</td>
                        <td></td>
                        <td>签订地点</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>盖章人</td>
                        <td></td>
                        <td>盖章时间</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>履行开始时间</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>履行到期时间</td>
                        <td></td>
                        <td>质保到期时间</td>
                        <td></td>
                    </tr>
                    
                    
                </table>
                <el-button type="primary" round size="medium" @click="tableFlag3=!tableFlag3" class="btnblock">{{ tableFlag3?'隐藏':'展开'}}合同履行</el-button>
                <table v-show="tableFlag3">
                    <caption>合同履行信息</caption>
                    <tr>
                        <td>标的金额（万元）</td>
                        <td></td>
                        <td>已履行金额（万元）</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td rowspan="8">履行记录</td>
                        <td colspan="3"></td>
                    </tr>
                    <tr>
                        <td>付款记录</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td>收款记录</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td>变更记录</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td>违约记录</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td>解除记录</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td>变更记录</td>
                        <td colspan="2"></td>
                    </tr>
                    <tr>
                        <td>补充记录</td>
                        <td colspan="2"></td>
                    </tr>
                </table>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Overview",
    data () {
        return {
            tableFlag1:true,
            tableFlag2:false,
            tableFlag3:false,
        }
    }
}
</script>

<style lang="less" scoped>
.overview{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-left: 14.625rem;
    padding-right: 17.3125rem;
    position: relative;
    overflow-y: auto;
    .box{
        width: 100%;
        min-height: 100%;
        background-color: #fff;
        box-shadow:0px 0px 6px rgba(0,0,0,0.16);
        border-radius:12px;
        .pad-box{
            height: 100%;
            box-sizing: border-box;
            padding: 2.375rem 4.0625rem 1rem;
            .item{
                width: 100%;
            }
            h3{
                font-size: 1.75rem;
                font-weight:500;
                font-family:Source Han Sans CN;
                color: #333333;
                text-align: center;
            }
            .certificate{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 2.125rem;
                margin: 1.1875rem 0;
                p{
                    font-size: 1.25rem;
                    width: 19.6875rem;
                    font-family:Source Han Sans CN;
                    font-weight:500;
                }
            }
            table{
                border-collapse: collapse;
                width: 100%;
                &:last-child{
                    margin-top: 1.25rem;
                }
                caption{
                    border: 1px solid #ccc;
                    border-bottom: 0;
                    height: 4rem;
                    font-size: 1.2rem;
                    line-height: 4rem;
                }
                td{
                    border: 1px solid #ccc;
                    height: 3rem;
                    vertical-align: middle;
                    text-align: center;
                    font-size: 1rem;
                    color: #666;
                    width: 16.66666%;
                    table{
                        td{
                            border: 0;
                            &.rg_bd{
                                border-right: 1px solid #ccc;
                            }
                        }
                        
                    }
                }
            }
            .bts{
                margin: 1.25rem 0;
                text-align: center;
            }
        }
    }
}
.btnblock{
    display: block;
    width: 100%;
    margin: 1rem 0;
}
</style>