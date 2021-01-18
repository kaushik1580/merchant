<template>
  <div class="topnav">
  <a class="active" href="#home">Profile</a>
  <a href="#news">Order History</a>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
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
</style>
