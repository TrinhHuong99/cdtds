import Vue from 'vue'
import Router from 'vue-router'
import Config from '../config'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: Config.baseURL,
    routes: [
        {
            path: '',
            component: () =>import('./layouts/Main.vue'),
            // children: [
            //     {
            //         path: '/bai-thi',
            //         name: 'baithi',
            //         component: () =>import('./layouts/BaiThi.vue')
            //     }
            // ]
        },
        {
            path: '*',
            redirect: '/pages/error-404'
          }
    ],

})
export default router