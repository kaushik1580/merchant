<template>
<div class="relative">
  <h1 class="display-3 font-weight-bold">Update product</h1>
  <form action="" @submit="postData" method="post">
  <div class="container">
    <label for="productName"><b>Product Name</b></label>
    <input type="text" placeholder="Enter Product tName" required name="productName" v-model="posts.productName">
    <label for="description"><b>Description</b></label>
    <input type="text" placeholder="Entter Description" required name="description" v-model="posts.description" maxlength="255">
    <label for="age"><b>Age</b></label>
    <input type="age" step="0.01" placeholder="Enter Age" name="age" required v-model="posts.age">
    <label for="gender"><b>Gender</b></label>
    <input type="gender" placeholder="Male or Female" name="gender" required v-model="posts.gender">
    <label for="color"><b>Color</b></label>
    <input type="text" placeholder="Enter Color" name="color" required v-model="posts.color">
    <label for="quantity"><b>Quantity</b></label>
    <input type="quantity" placeholder="Enter quantity" name="quantity" required v-model="posts.quantity">
    <label for="price"><b>Price</b></label>
    <input type="price" placeholder="Enter price" name="price" required v-model="posts.price">
    <router-link to="/cat">
    <button type="submit" @click="postData">Submit</button>
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
  name: 'Update',
  data () {
    return {
      posts: {
        productId: `${this.$route.params.id}`,
        productName: null,
        description: null,
        age: null,
        gender: null,
        color: null,
        quantity: null,
        price: null
      }
    }
  },
  methods: {
    postData (e) {
      this.axios.post(`http://10.177.1.58:8086/products/${this.$route.params.id}`, this.posts) // product id
        .then((result) => {
          console.warn(this.posts)
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
  height: 90%;
  border: 3px solid #000000;
}
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=integer], input[type=gender], input[type=color], input[type=price], input[type=quantity],input[type=age] {
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
