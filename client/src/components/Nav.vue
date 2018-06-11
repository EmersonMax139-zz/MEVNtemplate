<template>
  <div class="topnav">
    <router-link v-bind:to="{ name: 'Landing' }" class="">Home</router-link>
    <router-link v-bind:to="{ name: 'Bounties' }" class="">Bounties</router-link>
    <router-link v-bind:to="{ name: 'NewBounty' }" class="">New Bounty</router-link>
    <router-link v-bind:to="{ name: 'Signup' }" class="">Signup</router-link>
  </div>
</template>

<script>
export default {
  name: 'nav-component'
}
</script>

<style>
/* Add a black background color to the top navigation */
.topnav {
    background-color: #333;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
    background-color: #4CAF50;
    color: white;
}
</style>
