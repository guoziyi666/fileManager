import Vue from 'vue'
import Router from 'vue-router'
import end from '@/components/End'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      component:end
    }
  ]
})
