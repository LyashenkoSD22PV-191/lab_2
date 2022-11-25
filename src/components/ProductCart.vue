<template>
  <div class="card col-sm-3">
    <img src="https://static.planetminecraft.com/files/resource_media/screenshot/1330/2013-07-27_130249_6039392.jpg" class="card-img-top">
      <div class="card-body">
        <h5 class = "card-title">AMD FX 9590</h5>
        <div>
          <span class="price">14880 ₽</span>
          <span class="discount">7440 ₽</span>
        </div>
        <div class="triangle"></div>
        <div class="discount-percent">50%</div>
        <div class="p-3 d-grid gap-2 col-12 mx-auto">
          <button class="btn btn-outline-danger" type="button">Купить</button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
}
</script>

<style>
.price {
  font-size: 18px;
  text-decoration: line-through;
}
.discount {
  background-color: #f8dc07;
  color: #333;
  padding: 5px;
  font-size: 18px;
  margin-left: 15px;
}

.triangle {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 70px 70px 0 0;
  border-color: red transparent transparent transparent;
}
.discount-percent {
  position: absolute;
  top: 10px;
  left: 5px;
  color: #fff;
  font-size: 16px;
}
</style>