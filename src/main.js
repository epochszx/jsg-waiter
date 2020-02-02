import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'

//全局组件注册
import FullLayout from './components/FullLayout'
import OrderItem from './components/OrderItem'
import OrderTake from './components/OrderTake'
import OrderComplete from './components/OrderComplete'

Vue.component('my-fulllayout',FullLayout)
Vue.component('my-orderitem',OrderItem)
Vue.component('my-ordertake',OrderTake)
Vue.component('my-ordercomplete',OrderComplete)
//全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
      return moment(val).format('YYYY-MM-DD HH:mm:ss') 
  }else{
    return val
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
