import axios from 'axios';
import {BASEURL} from '../config/index'
import {Message} from 'element-ui'
 
axios.defaults.baseURL=BASEURL

//添加请求拦截器
axios.interceptors.request.use(function(config){
    //在发送请求之前做些什么
    //console.log(config)
    // let url = config.url
    // // get参数编码
    // if (config.method === 'get' && config.params) {
        
    //     // url += '?'
    //     // let keys = Object.keys(config.params)
    //     // for (let key of keys) {
    //     //     url += `${key}=${encodeURIComponent(config.params[key])}&`
    //     // }
    //     // url = url.substring(0, url.length - 1)
    //     // config.params = {}
    // }
    // config.url = url
      
    return config
},function(error){
    // 对请求错误做些什么
    return Promise.reject(error);
})

//添加响应拦截器
axios.interceptors.response.use(function(response){
    // 对响应数据做点什么
    return response.data;
},function(error){
    //console.log(error)
    Message.error(error)
    return new Promise(()=>{});
})

export default axios