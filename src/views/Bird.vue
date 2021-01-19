<template>
<div class="bird">
  <h1>Chirpi Chirpi... Birds </h1>
  <router-link to="/addnewbird"><button class="button button 1">Add New</button></router-link>
  <router-link to="/start"><button class="button2">Home Page</button></router-link>
  <table style="width:100%">
  <tr>
    <th>Id</th>
    <th>Image</th>
    <th>Name</th>
    <th>Price (Rs)</th>
    <th>Quantity</th>
    <th></th>
  </tr>
  <tr v-for="product in allBirds" :key="product.productId + new Date()+ product.age + product.price" class="birds">
    <td>{{product.productId}} </td>
    <td ><img :src="product.imageUrl" :alt="product.productName" width="32" height="32" class="image"></td>
    <td>{{product.productName}}</td>
    <td>{{product.price}}</td>
    <td>{{product.quantity}}</td>
    <router-link to="/updatebird"><td><button type="submit">Update</button></td></router-link>
  </tr>
  </table>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Bird',
  methods: {
    ...mapActions(['fetchBirds']),
    setproductIdAndRoute (productId) {
      this.$router.push({ path: `/updatebird/${productId}` })
    }
  },
  computed: mapGetters(['allBirds']),
  created () {
    this.fetchBirds()
  }
}
</script>

<style>
table, td {
  border: 1px solid black;
  width: 0px;
}
.button {
  background-color: #333f; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  float: right;
}
.button2 {
  background-color: #333f; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  float: left;
}
.button5 {background-color: #555555;
}
.image{
  height: 200px;
  width: 20%;
  float: left;
}

</style>
