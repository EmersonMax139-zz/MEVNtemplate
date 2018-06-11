<template>
  <div class="landingPage">
    <h1 class="logo">TUDR</h1>
    <p class="landingIntro"><span class="logosmall">TUDR</span> is an app that allows users to post or complete tasks (bounties) in self-contained agreements between the users.</p>
    <p class="landingInfo"><span class="logosmall">TUDR</span> focuses on <span class="logosmall">Bounties</span>, which are the fuel of the <span class="logosmall">TUDR</span> ecosystem. Each <span class="logosmall">Bounty</span> is a task that you, the <span class="logosmall">"Bounty Hunter"</span>, can choose to complete. Users can also post their own <span class="logosmall">Bounties</span>, with predetermined specifications, that others will be able to complete.</p>
    <p class="landingInfo">Each individual <span class="logosmall">Bounty</span> must be agreed upon by both users before agreement. Once the creator of the <span class="logosmall">Bounty</span> agrees that the <span class="logosmall">Bounty</span> is complete, the <span class="logosmall">"Bounty-Hunter"</span> will be paid the agreed upon amount.</p>
  </div>
</template>

<script>
  export default {
    name: "Landing",
    // data () {
    //   return {
    //
    //   }
    // }
  }

</script>

<style>

 .landingPage {
    background-color: #383838;
  }

  .landingPage {
    background-color: #383838;
    text-align: center;
    padding-left: 200px;
    padding-right: 200px;
  }

  .logo {
    font-family: 'Work Sans', sans-serif;
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: #177E89;
  }

  .logosmall {
    font-family: 'Work Sans', sans-serif;
    font-size: 20px;
    color: #177E89;
  }

  .landingInfo {
    font-family: 'Arimo', sans-serif;
    margin: 50px;
    font-size: 20px;
    font-weight: lighter;
    line-height: 2.0em;
    color: white;
  }

  .landingIntro {
    font-family: 'Work Sans', sans-serif;
    margin: 50px;
    padding-bottom: 50px;
    font-size: 25px;
    line-height: 1.7em;
    color: white;
    border-bottom: 2px solid white;
  }

</style>
