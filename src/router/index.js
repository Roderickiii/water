import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import securityManagement from '@/components/securityManagement'
import safetyAccident from '@/components/safetyAccident'
import customerManagement from '@/components/customerManagement'
import monitor from '@/components/monitor'
import operationManagement from '@/components/operationManagement'
import incomeSub from '@/components/incomeSub'
import costSub from '@/components/costSub'
import equipmentManagement from '@/components/equipmentManagement'
import monitorSystem from '@/components/monitorSystem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index
    },
    {
      path: '/securityManagement',
      name: '安全管理',
      component: securityManagement
    },
    {
      path: '/safetyAccident',
      name: '安全事故',
      component: safetyAccident
    },
    {
      path: '/customerManagement',
      name: '客户服务',
      component: customerManagement
    },
    {
      path: '/monitor',
      name: '水质监测',
      component: monitor
    },
    {
      path: '/operationManagement',
      name: '运营管理',
      component: operationManagement
    },
    {
      path: '/incomeSub',
      name: '收入',
      component: incomeSub
    },
    {
      path: '/costSub',
      name: '成本',
      component: costSub
    },
    {
      path: '/equipmentManagement',
      name: '设备管理',
      component: equipmentManagement
    },
    {
      path: '/monitorSystem',
      name: '监控系统',
      component: monitorSystem
    }
  ]
})
