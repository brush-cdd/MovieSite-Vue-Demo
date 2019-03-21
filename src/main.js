// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用工具文件
import utils from './utils/index.js'

import './style/scripts/ionicons/css/ionicons.min.css'
import './style/scripts/toast/jquery.toast.min.css'
import './style/scripts/owlcarousel/dist/assets/owl.carousel.min.css'
import './style/scripts/owlcarousel/dist/assets/owl.theme.default.min.css'
import './style/scripts/magnific-popup/dist/magnific-popup.css'
import './style/scripts/sweetalert/dist/sweetalert.css'
import './style/css/style.css'
import './style/css/skins/all.css'
import './style/css/demo.css'

import './style/js/demo.js'
import './style/js/e-magz'

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api
// 将工具方法绑定到全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
