<template>
    <div class="login">
        <div class="bg">
            <h1>欢迎登录对外投资公司合同管理系统</h1>
            <div class="login-from-box">
                <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" class="loginForm" @submit.native.prevent>
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="ruleForm.name"  prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <div class="div_input">
                        <el-button @click="submitForm('ruleForm')" native-type="submitForm">立即登录</el-button>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import {apiLogin} from '../api/index'
export default {
    name:'Login',
    data () {
        return {
            ruleForm:{
                name:'',
                password:''
            },
            rules:{
                name:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            let login=await apiLogin(this.ruleForm)
            
            if(login.d){
                let d=eval("("+login.d+")")
                let user=d[0]
                this.$store.dispatch('setUser',user)

                localStorage.setItem('user',JSON.stringify(user))
                localStorage.setItem('expired',JSON.stringify(Date.now() + 1000*60*60*24*7))
                localStorage.removeItem('editableTabs')
                localStorage.removeItem('defaultActive')
                this.$store.dispatch('setEditableTabs', [{title: '首页',name: '/contract/home'}])
                this.$store.dispatch('setDefaultActive', '/contract/home')
                this.$message({
                    message: '恭喜你登录成功',
                    type: 'success'
                });
                this.$router.push('/contract')
            }else{
                this.$message.error('用户名或密码错误');
            }
          } else {
            this.$message.error('请准确填写表单');
            return false;
          }
        });
      },
    }
}
</script>

<style lang="less" scoped>
.login{
    height: 100%;
    background:rgba(238,242,245,1);
    .bg{
        height: 45.41125rem;
        background-image: url("../assets/img/login/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;
        h1{
            font-size:2.5rem;
            font-family:Source Han Sans CN;
            font-weight:500;
            color:rgba(13,85,147,1);
            padding-top: 5.9375rem;
            text-align: center;
        }
        .login-from-box{
            width: 39.3125rem;
            height: 25.25rem;
            background-image: url("../assets/img/login/lbf.png");
            background-repeat: no-repeat;
            background-size: 100% 100%;
            // position: fixed;
            // top: 50%;
            // left:50%; 
            // transform: translate(-50%,-50%);
            margin: 8.5625rem auto 0;

            box-sizing: border-box;
            padding: 3.5rem 3.125rem 3.3125rem;
            .loginForm{
                .el-form-item{
                    // padding: 0 2.375rem;
                    height: 5.5625rem;
                    /deep/.el-form-item__label{
                        font-size:1rem;
                        font-weight:400;
                        color:rgba(16,41,98,1);
                        padding: 0;
                        line-height:1.6875rem ;
                        padding:0 0 0 2.375rem;
                    }
                    /deep/.el-form-item__content{
                        height: 5.5625rem;
                        background-image: url("../assets/img/login/lg_input.png");
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        padding:1.125rem 2.45rem 0 2.45rem;
                        box-sizing: border-box;
                        .el-input{
                            height: 3.3125rem;
                            background-color: #F8F8F8;
                            .el-input__inner{
                                background-color: #F8F8F8;
                                border: 0;
                                padding: 0 4.2rem;
                                height: 3.3125rem;
                                line-height: 3.3125rem;
                                font-size: 1rem;
                                &::-webkit-input-placeholder{ /*WebKit browsers*/

                                    color: #102962;

                                }

                                &::-moz-input-placeholder{ /*Mozilla Firefox*/

                                    color: #102962;

                                }

                                &::-ms-input-placeholder{ /*Internet Explorer*/ 

                                    color: #102962;

                                }
                            }
                            .el-input__prefix{
                                padding: 0 0.625rem;
                                top: 0rem;
                                line-height: 3.3125rem;
                                .el-input__icon{
                                    font-size: 1.6875rem;
                                    color: #0D5593;
                                    line-height: 3.3125rem;
                                }
                            }
                        }
                    }
                }
                .div_input{
                    padding: 1.1875rem 2.375rem 0;
                    // margin-top: 1.1875rem;
                }
                .el-button{
                    display: block;
                    padding: 0;
                    height: 3.5rem;
                    line-height: 3.5rem;
                    width: 100%;
                    border: 0;
                    font-size: 1.125rem;
                    color: #0D5593;
                    background-image: url("../assets/img/login/lg_button.png");
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                }
                /deep/.el-form-item__error{
                    left: 7rem;
                }
            }
        }
    }
}
</style>