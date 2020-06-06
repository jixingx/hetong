<template>
    <div class="launch">
        <div class="box">
            <div class="pad-box">
                <h3>合同签约审查审批表</h3>
                <div class="certificate">
                    <p>合同编号：</p>
                    <p>报审序号：</p>
                </div>
                <table>
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
                        <td>合同标的及数量</td>
                        <td colspan="5"></td>
                    </tr>
                    <tr>
                        <td>标的金额(万元）</td>
                        <td colspan="3"></td>
                        <td>资金渠道</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td rowspan="2">签约依据</td>
                        <td colspan="5">
                            <table>
                                <tr>
                                    <td class="rg_bd">名称</td>
                                    <td>文号</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="5">
                            <table>
                                <tr>
                                    <td class="rg_bd"></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>所属项目</td>
                        <td colspan="5"></td>
                    </tr>
                    <tr>
                        <td rowspan="2">选商资料</td>
                        <td colspan="5">文件名称</td>
                    </tr>
                    <tr>
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
                        <td colspan="6">
                            <table>
                                <tr>
                                    <td class="rg_bd">审查审批环节</td>
                                    <td class="rg_bd">审查审批部门/人</td>
                                    <td class="rg_bd">审查审批意见</td>
                                    <td>审查审批时间</td>
                                </tr>
                                
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6">
                            <table>
                                <tr>
                                    <td class="rg_bd"></td>
                                    <td class="rg_bd"></td>
                                    <td class="rg_bd"></td>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <img src="../../assets/img/launch/xiazai.png" alt="" srcset="">
    </div>
</template>

<script>
export default {
    name:"Launch"
}
</script>

<style lang="less" scoped>
.launch{
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
        }
    }
    img{
        position: fixed;
        right: 7.6875rem;
        top: 9.5rem;
        width: 8.625rem;
        height: 8.625rem;
        cursor: pointer;
    }
}
</style>