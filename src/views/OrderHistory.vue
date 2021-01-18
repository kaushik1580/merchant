<template>
<div class="dog">
  <h1>Order History</h1>
  <!-- <router-link to="/addnew"><button class="button button 1">Add New</button></router-link> -->
  <table style="width:100%">
  <tr>
    <th>Order Id</th>
    <th>Time Stamp</th>
    <th>Total price (Rs)</th>
    <th></th>
  </tr>
  <tr v-for="product in allOrders" :key="product.orderId + new Date()+ product.timeStamp + product.totalPrice" class="dog">
    <td>{{product.orderId}} </td>
    <!-- <td ><img :src="product.imageUrl" :alt="product.productName" width="32" height="32" class="image"></td> -->
    <td>{{product.timeStamp}}</td>
    <td>{{product.totalPrice}}</td>
    <td><button @click="setproductIdAndRoute(product.productId)" type="submit">Update</button></td>
  </tr>
  </table>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import Vue from 'vue'
export default {
  name: 'OrderHistory',
  methods: {
    ...mapActions(['fetchOrders']),
    setproductIdAndRoute (orderId) {
      this.$router.push({ path: `/update/${orderId}` })
    }
  },
  computed: {
    ...mapGetters(['allOrders'])
  },
  created () {
    this.fetchOrders()
    console.log(this.allOrders)
    debugger
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
