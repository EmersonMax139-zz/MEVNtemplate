<template>

  <div class="bounties">
    <p>You gonna the bounties here fam</p>
    <div v-for="bounty in bounties">
      <p>
        <span><b>{{bounty.title }}</b></span><br />
        <span>{{ bounty.description }}</span>
      </p>
    </div>
  </div>

</template>

<script>

import BountyService from '@/services/BountyService'

export default {
  name: 'Bounties',
  data () {
      return {
        bounties: []
      }
  },
  mounted () {
    this.getBounties()
  },
  methods: {
    async getBounties() {
      const response = await BountyService.fetchBounties()
      this.bounties = response.data
    }
  }
}

</script>

<style>

body {
  color: blue;
}

</style>
