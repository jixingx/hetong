import Myaxios from './Myaxios'

export const apiLogin=(login)=>Myaxios.post("/checkLogin",{user:login.name,pass:login.password})//登录接口
export const apiHomeGtasksList=(FK_Emp)=>Myaxios.post("/getEmpWorks",{FK_Emp})//待办事项列表接口
export const apiOwayTree=()=>Myaxios.get("/getTree")//台账获取树状接口
export const apiOwayTableList=(fk_unit,pageIndex,pagesize,con)=>Myaxios.get("/getBook",{params:{fk_unit,pageIndex,pagesize,con}})//台账获取表格列表接口
export const apiIntransitList=(FK_Emp)=>Myaxios.post("/getRunning",{FK_Emp})//在途列表接口
