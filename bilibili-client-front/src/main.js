// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'

import 'font-awesome/scss/font-awesome.scss'
import 'element-ui/lib/theme-chalk/index.css'

/*设置全局axios*/
Vue.prototype.$axios = Axios
/*设置基本的默认路径*/
Axios.defaults.baseURL = '/'
/*设置post请求的内容类型*/
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
