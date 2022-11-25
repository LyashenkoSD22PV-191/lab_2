<template>
  <div class ='catalog'>
    <h3>Реккомендуемые процессоры</h3>
    <div class="row">
      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
    </div>
    <h3>Реккомендуемые видеокарты</h3>
    <div class="row p-3">
      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
    </div>
  </div>
</template>

<script>
import ProductCart from "@/components/ProductCart";
export default {
  name: "CatalogVue",
  components: {
    ProductCart
  }
}
</script>

<style scoped>
  .catalog{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    align-items:center;
  }
</style>