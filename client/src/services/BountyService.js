import Api from '@/services/Api'

// Api().get('route') -- with no slash

export default {
  fetchBounties () {
    return Api().get('bounties')
  },

  addBounty (params) {
    return Api().post('bounties', params)
  },

  updateBounty (params) {
    return Api().put('bounties/' + params.id, params)
  },

  getBounty (params) {
    return Api().get('bounty/' + params.id)
  },

  deleteBounty (id) {
    return Api().delete('bounties/' + id)
  }
}
