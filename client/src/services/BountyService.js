import Api from '@/services/Api'

// Api().get('route') -- with no slash

export default {
  fetchBounties () {
    return Api().get('bounties')
  },

  addBounty (params) {
    return Api().post('bounties', params)
  }
}
