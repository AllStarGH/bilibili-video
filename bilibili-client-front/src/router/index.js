import Vue from 'vue'
import Router from 'vue-router'

// .vue
import Home from '@/components/Home'
import Register from '@/components/views/Register'
import Test from '@/components/views/Test'
import AccountList from '@/components/views/AccountList'
import ChooseFolder from '@/components/views/ChooseFolder'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/bilibiliVideo'
    },
    {
      path: '/Test',
      name: "Test",
      component: Test,
      alias: '/bilibiliVideo/test'
    },
    {
      path: '/Register',
      name: "Register",
      component: Register,
      alias: '/bilibiliVideo/register'
    },
    {
      path: '/AccountList',
      name: "AccountList",
      component: AccountList,
      alias: '/bilibiliVideo/accountList'
    },
    {
      path: '/ChooseFolder',
      name: "ChooseFolder",
      component: ChooseFolder,
      alias: '/bilibiliVideo/chooseFolder'
    },
  ]
})
