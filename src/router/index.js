import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
// import store from '@/store'
// import { Message } from 'element-ui'


// 策略管理
import Project from '@/views/policy/project/project'
import Tactics from '@/views/policy/tactics/tactics'

// Error
import Page404 from '@/views/error/404'




Vue.use(VueRouter)



/**
 * 路由相关属性说明
 * hidden: 当设置hidden为true时，意思不在sideBars侧边栏中显示
 * mete{
 * title: xxx,  设置sideBars侧边栏名称
 * icon: xxx,  设置ideBars侧边栏图标
 * noCache: true  当设置为true时不缓存该路由页面        //暂时去除  都无缓存
 * permission:{
 *  status:1,//类型         1:读写  2:只读
 *  list:['view','update','add','delete','export','copy'] //暂时不用 后期可能扩展
 * }
 * hidden: true
 * }
 */



/*通用routers*/
// export const currencyRoutes = [
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('@/views/login'),
//     meta: { title: '登录页' },
//     hidden: true
//   },

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
        meta: { title: '首页', icon: 'el-icon-s-data' }
      }
    ]
  },
  {
    path: '/policy',
    name: 'Policy',
    redirect: '/policy/',
    component: Layout,
    meta: {title: '策略管理', icon: 'el-icon-s-marketing' },
    children: [
      {
        path: 'project',
        name: 'Project',
        component: Project,
        meta: { 
          title: '项目',
          icon: 'el-icon-s-data',
          permission:{
            status:1,//类型         1:读写  2:只读
          }
        },
      },
      {
        path: 'tactics',
        name: 'Tactics',
        component: Tactics,
        meta: { title: '策略', icon: 'el-icon-s-data',permission:{status:1}}
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
  // {
  //   path: '/policy',
  //   name: 'Policy',
  //   redirect: '/policy/',
  //   component: Layout,
  //   meta: {title: '策略管理', icon: 'el-icon-s-marketing' },
  //   children: [
  //     {
  //       path: 'project',
  //       name: 'Project',
  //       component: Project,
  //       meta: { 
  //         title: '项目',
  //         icon: 'el-icon-s-data',
  //         permission:{
  //           status:1,//类型         1:读写  2:只读
  //         }
  //       },
  //     },
  //     {
  //       path: 'tactics',
  //       name: 'Tactics',
  //       component: Tactics,
  //       meta: { title: '策略', icon: 'el-icon-s-data',permission:{status:1}}
  //     }
  //   ]
  // },
  // {
  //   path: '*',
  //   name: '*404',
  //   redirect: '/error/404',
  //   component: Page404,
  // }
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

// 解决addRoute不能删除动态路由问题
export function resetRouter() {
  const reset = creatRouter()
  router.matcher = reset.matcher
}
// let asyncRouter;

// function go(to, next) {
//   asyncRouter = filterAsyncRouter(asyncRouter);
//   router.addRoutes(asyncRouter);
//   next({...to, replace: true});
// }

// 导航守卫
// router.beforeEach(async (to, from, next) => {
    // if (store.getters.token) {
    //   const hasRoles = store.getters.permissionObj.length > 0;
    //   if (hasRoles) {
    //     next()
    //   } else {
    //     try {
    //       const addRoutes = await store.dispatch('permission/getAsyncRoutes');
    //       asyncRouter = addRoutes;
    //       go(to, next);
    //     } catch (error) {
    //       Message.error(error)
    //     }
    //   }
    // }
// });

// const routeComponent = {
//   Layout, Page404,
//   // 策略管理
//   Project, Tactics
// };

// function filterAsyncRouter(routes) {
//   return routes.filter((route) => {
//     let component = route.component;
//     if (component) {
//       let current;
//       if (routeComponent[component]) {
//         current = routeComponent[component];
//       }
//       if (current) {
//         route.component = current;
//       } else {
//         route.component = { render: c => c("router-view")  };
//       }
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children)
//       }
//       return true;
//     }
//   })
// }

export default router
