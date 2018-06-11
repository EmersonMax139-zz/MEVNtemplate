import Vue from 'vue'
import Router from 'vue-router'
import Bounties from '@/components/Bounties'
import NewBounty from '@/components/NewBounty'
import EditBounty from '@/components/EditBounty'
import Landing from '@/components/Landing'
import Signup from '@/components/Signup'
import Users from '@/components/Users'
import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
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
    },
    {
      path:'/users',
      name:'Users',
      component: Users
    },
    {
      path:'/users/new',
      name:'Signup',
      component: Signup
    }
  ]  
})
