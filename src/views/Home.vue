<template>
<div class="relative">
  <h1 class="display-3 font-weight-bold">Login</h1>
  <form action="" >
  <div class="container">
    <label for="uname"><b>Email</b></label>
    <input type="email" placeholder="Enter Username" name="email" v-model="gets.email" required pattern="[^]+@[^]+[.][a-z]{2,63}$">
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" v-model="gets.password" required>
    <button type="button" @click="getData">Login</button>
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
      axios.get(`${this.url}/${this.gets.email}/${this.gets.password}`)
        .then((result) => {
          console.log('result result', JSON.parse(JSON.stringify(result)))
          console.log('data', result.data)
          if (result.data) {
            this.$router.push({ path: '/start' })
            alert('Login Successful')
          } else {
            alert('Wrong Id or Password')
          }
        }).catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
div.relative {
  position: absolute;
  left: 30%;
  width: 40%;
  height: 50%;
  border: 3px solid #000000;
  margin: 0 auto;
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
