<template>
  <div>

    <h3>Add Product</h3>

    <div class="card products__add-product">
    <div>
      <input
        v-model="addProductData.product_id"
        class="validate"
        placeholder="Id"
      >
    </div>
    <div>
      <input
        v-model="addProductData.name"
        class="validate"
        placeholder="name"
      >
    </div>
    <div>
      <input
        v-model="addProductData.price"
        class="validate"
        placeholder="price"
      >
    </div>
    <div>
      <i 
        @click="onAdd"
        class="material-icons medium">add</i>
    </div>
    </div>
  </div>
</template>

<script>
import db from "@/db";

export default {
  name: "AddProduct",
  props: [
    'addProductData',
    'onAdd'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products__add-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
