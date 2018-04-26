import Vue from 'vue'
import Router from 'vue-router'
import Bounties from '@/components/Bounties'
import NewBounty from '@/components/NewBounty'
import EditBounty from '@/components/EditBounty'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
    },
    {
      path: '/bounties',
      name: 'Bounties',
      component: Bounties
    },
    {
      path: '/bounties/new',
      name: 'NewBounty',
      component: NewBounty
    },
    {
      path:'/bounties/:id',
      name:'EditBounty',
      component: EditBounty
    }
  ]
})
