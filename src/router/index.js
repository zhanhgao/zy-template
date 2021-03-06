import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
// import store from '@/store'
// import { Message } from 'element-ui'


// import Project from '@/views/policy/project/project'
// import Tactics from '@/views/policy/tactics/tactics'

import Page404 from '@/views/error/404'




Vue.use(VueRouter)


export const currencyRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home'),
        meta: { title: '全国企业诚信公共服务平台', icon: 'el-icon-s-data' }
      }
    ]
  },
  {
    path: '/certificates',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Certificates',
        component: () => import('@/views/certificates'),
        meta: { title: '全国企业诚信公共服务平台', icon: 'el-icon-s-data' }
      }
    ]
  },
  {
    path: '/policy',
    name: 'Policy',
    redirect: '/policy/',
    component: Layout,
    meta: {title: '全国企业诚信公共服务平台', icon: 'el-icon-s-marketing' },
    children: [
      {
        path: 'project',
        name: 'Project',
        // component: Project,
        component: () => import('@/views/policy/project/project'),
        meta: {
          title: '全国企业诚信公共服务平台',
          icon: 'el-icon-s-data',
          permission:{
            status:1,//类型         1:读写  2:只读
          }
        },
      },
      {
        path: 'tactics',
        name: 'Tactics',
        // component: Tactics,
        component: () => import('@/views/policy/tactics/tactics'),
        meta: { title: '全国企业诚信公共服务平台', icon: 'el-icon-s-data',permission:{status:1}}
      }
    ]
  },
  {

    path: '*',
    name: '*404',
    redirect: '/error/404',
    component: Page404,
  }
]

/*动态添加routers mock*/ 
export const asyncRoutes = [
]


const creatRouter = () => {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: currencyRoutes,
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  })
}

const router = creatRouter()

export function resetRouter() {
  const reset = creatRouter()
  router.matcher = reset.matcher
}
// 导航守卫
router.beforeEach(async (to, from, next) => {
  // title修改
    window.document.title = to.meta.title == undefined?'全国企业诚信公共服务平台':to.meta.title
    next();
});

export default router
