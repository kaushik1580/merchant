<template>
<div class="relative">
  <h1 class="display-3 font-weight-bold">Login</h1>
  <form action="" @submit="getData" method="get">
  <div class="container">
    <label for="uname"><b>Email</b></label>
    <input type="email" placeholder="Enter Username" name="email" required v-model="gets.email">
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required v-model="gets.password">
    <router-link to="/start"><button type="submit" @click="getData">Login</button></router-link>
  </div>
  <div class="container" style="background-color:#f1f1f1">
    <router-link class="nav-item" to="/merregistration"><span class="psw">New User <a href="#">Click Here</a></span></router-link>
  </div>
</form>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
  name: 'Home',
  data () {
    return {
      gets: {
        email: '',
        password: ''
      },
      url: 'http://10.177.1.51:8083/users/merchant/find'
    }
  },
  methods: {
    getData (e) {
      console.warn(this.gets)
      this.axios.get(`${this.url}/${this.gets.email}/${this.gets.password}`, this.gets)
        .then((result) => {
          console.warn(this.gets)
        }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
div.relative {
  position: absolute;
  left: 20%;
  width: 60%;
  height: 50%;
  border: 3px solid #000000;
}
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=email], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #000000;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>
