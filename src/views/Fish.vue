<template>
<div class="fish">
  <h1>Fish & Reptiles</h1>
  <router-link to="/addnewfish"><button class="button button 1">Add New</button></router-link>
  <table style="width:100%">
  <tr>
    <th>Index</th>
    <th>Image</th>
    <th>Name</th>
    <th>Price (Rs)</th>
    <th>Quantity</th>
    <th></th>
  </tr>
  <tr v-for="product in allFishs" :key="product.productId + new Date()+ product.age + product.price" class="fish">
    <td>{{product.productId}} </td>
    <td ><img :src="product.imageUrl" :alt="product.productName" width="32" height="32" class="image"></td>
    <td>{{product.productName}}</td>
    <td>{{product.price}}</td>
    <td>{{product.quantity}}</td>
    <router-link to="/updatefish"><td><button type="submit">Update</button></td></router-link>
  </tr>
  </table>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Fish',
  methods: {
    ...mapActions(['fetchFishs']),
    setproductIdAndRoute (productId) {
      this.$router.push({ path: `/updatefish/${productId}` })
    }
  },
  computed: mapGetters(['allFishs']),
  created () {
    this.fetchFishs()
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
.button5 {background-color: #555555;
}
.image{
  height: 200px;
  width: 20%;
  float: left;
}

</style>
