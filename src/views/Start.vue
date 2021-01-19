<template>
  <div>
    <div class="topnav">
    <a class="active" href="#home">Profile</a>
    <a href="/order">Order History</a>
  </div>
    <h1>Categories</h1>
    <div class="row">
      <div class="column">
        <a href="./dog"><img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg" alt="Dogs" style="width:100%" class="image"></a>
        <h4>Dog</h4>
      </div>
      <div class="column">
        <a href="./cat"><img src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/151AB/production/_111434468_gettyimages-1143489763.jpg" alt="Cats" style="width:100%" class="image"></a>
        <h4>Cat</h4>
      </div>
    <div class="column">
      <a href="./bird"><img src="https://cdn.britannica.com/s:800x450,c:crop/87/196687-138-2D734164/facts-parrots.jpg" alt="Bird" style="width:100%" class="image"></a>
      <h4>Bird</h4>
    </div>
    <div class="column">
      <a href="./fish"><img src="https://cdn.shopify.com/s/files/1/1529/9657/articles/Blog_Post_Header_81.jpg?v=1579105473" alt="Fish and Reptiles" style="width:100%" class="image"></a>
      <h4>Fish & Reptiles</h4>
    </div>
    <!-- <div class="column">
      <a href="./petacc"><img src="https://api.time.com/wp-content/uploads/2019/03/us-movie-rabbits-meaning.jpg?quality=85&w=1200&h=628&crop=1" alt="Small Animal" style="width:100%" class="image"></a>
      <h4>Pet Accessories</h4>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start'

}
</script>

<style>
* {
  box-sizing: border-box;
}
.row {
  display: flex;
}
/* Create three equal columns that sits next to each other */
.column {
  flex: 33.33%;
  padding: 5px;
}
.column:hover .image {
  opacity: 0.3;
}
.column:hover .middle {
  opacity: 1;
}
text {
  background-color: #333f;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}
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
