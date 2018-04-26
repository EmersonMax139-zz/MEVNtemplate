<template>
  <div class="bounties">
    <h1>Bounties</h1>
    <div v-if="bounties.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewBounty' }" class="">Add Bounty</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="bounty in bounties">
          <td>{{ bounty.title }}</td>
          <td>{{ bounty.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditBounty', params: { id: bounty._id } }">Edit</router-link> |
            <a href="#" @click="deleteBounty(bounty._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no Bounties.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewBounty' }" class="add_bounty_link">Add Bounty</router-link>
    </div>
  </div>
</template>

<script>

import BountyService from '@/services/BountyService'

export default {
  name: 'bounties',
  data () {
    return {
      bounties: []
    }
  },
  mounted () {
    this.getBounties()
  },
  methods: {
    async getBounties () {
      const response = await BountyService.fetchBounties()
      this.bounties = response.data.bounties
    },
    async deleteBounty (id) {
      await BountyService.deleteBounty(id)
      this.getBounties()
      this.$router.push({ name: 'Bounties' })
    }
  }
}

</script>

<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_bounty_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
