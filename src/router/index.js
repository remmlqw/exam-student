import Vue from 'vue'
import Router from 'vue-router'
import login from '@/containers/login/login'
import main from '@/containers/main/main'
import changePass from '@/containers/main/personalCenter/changePass'
import homepage from '@/containers/main/homepage/index'
import examCard from '@/containers/main/examCard/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: 'exam/:paperId/:questionId',
          component: examCard,
        },
        {
          path: 'homepage',
          component: homepage,
        },
        {
          path: 'personalCenter/changePass',
          name: 'changePass',
          component: changePass,
        }
      ]
    }
  ]
})
