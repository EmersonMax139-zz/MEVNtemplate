import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bounties from '@/components/Bounties'
import NewBounty from '@/components/NewBounty'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bounties',
      name: 'Bounties',
      component: Bounties
    }, {
      path: '/bounties/new',
      name: 'NewBounty',
      component: NewBounty
    }
  ]
})
