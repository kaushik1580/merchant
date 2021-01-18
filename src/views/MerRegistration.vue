<template>
<div class="relative">
  <h1 class="display-3 font-weight-bold">New User Registration</h1>
  <form action="" @submit="postData" method="post">
  <div class="container">
    <label for="userName"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" required name="userName" v-model="posts.userName">
    <label for="email"><b>Email</b></label>
    <input type="email" placeholder="Enter Email" required name="email" v-model="posts.email">
    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required v-model="posts.password">
    <label for="gender"><b>Gender</b></label>
    <input type="gender" placeholder="Male or Female" name="gender" required v-model="posts.gender">
    <label for="mobileNumber"><b>Mobile Number</b></label>
    <input type="integer" placeholder="Enter Mobile Number" name="mobileNumber" required v-model="posts.mobileNumber">
    <router-link to="/">
    <button type="submit" @click="postData">Register</button>
    </router-link>
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
  name: 'MerRegistration',
  data () {
    return {
      posts: {
        userName: null,
        email: null,
        password: null,
        mobileNumber: null,
        gender: null
      }
    }
  },
  methods: {
    postData (e) {
      this.axios.post('http://10.177.1.51:8083/users/merchant/save', this.posts)
        .then((result) => {
          console.warn(this.posts)
        }).catch(error => console.log(error))
      alert('Registration Sucessfull')
    }
  }
}
</script>

<style scoped>
div.relative {
  position: absolute;
  left: 20%;
  width: 60%;
  height: 75%;
  border: 3px solid #000000;
}
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password], input[type=email], input[type=integer], input[type=gender] {
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
