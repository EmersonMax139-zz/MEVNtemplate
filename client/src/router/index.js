import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Signup from '@/components/Signup'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path:'/posts/:id',
      name:'EditPost',
      component: EditPost
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
