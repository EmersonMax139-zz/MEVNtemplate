import Api from '@/services/Api'

// Api().get('route') -- with no slash

export default {
  fetchBounties () {
    return Api().get('posts')
  },

  addPost (params) {
    return Api().post('posts', params)
  },

  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },

  getPost (params) {
    return Api().get('posts/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
