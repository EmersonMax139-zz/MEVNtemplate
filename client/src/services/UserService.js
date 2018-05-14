import Api from '@/services/Api'

export default {
  createUser(params) {
    return Api.post('users', params)
  },

  getUser(params) {
    return Api.get('user/' + params.id)
  }

}
