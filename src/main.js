import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//重置css样式
import "./assets/css/reset.css"


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

//需要按需引入，先引入vue并引入element-ui
import AFTableColumn from 'af-table-column'
Vue.use(AFTableColumn)


// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
