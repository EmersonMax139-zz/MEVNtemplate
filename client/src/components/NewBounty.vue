<template>
  <div class="bounties">
    <h1>Add Bounty</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <input type="text" name="difficulty" placeholder="DIFFICULTY" v-model="difficulty">
        </div>
        <div>
          <input type="text" name="subject" placeholder="SUBJECT" v-model="subject">
        </div>
        <div>
          <input type="number" name="length" placeholder="LENGTH" v-model="length">
        </div>
        <div>
          <input type="number" name="pay" placeholder="PAY" v-model="pay">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_bounty_btn" @click="addBounty">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import BountyService from '@/services/BountyService'
export default {
  name: 'addbounty',
  data () {
    return {
      title: '',
      description: '',
      difficulty: '',
      subject: '',
      length: 0,
      pay: 0,
    }
  },
  methods: {
    async addBounty () {
      await BountyService.addBounty({
        title: this.title,
        description: this.description,
        difficulty: this.difficulty,
        subject: this.subject,
        length: this.length,
        pay: this.pay,
      })
      this.$router.push({ name: 'Bounties' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_bounty_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>21
