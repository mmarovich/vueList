<template>
  <div>
    <h1>Products</h1>

    <div 
      v-for="product in sortedProducts"
      v-bind:key="product.product_id"
      class="collection"
    >
    <div class="collection-item products_list-item">
      <div>{{product.product_id}}</div>
      <div>{{product.name}}</div>
      <div>{{product.price}}</div>
    </div>

    </div>
  </div>
</template>

<script>
import db from '@/db'

export default {
  name: 'HelloWorld',
  data () {
    return {
      products: []
    }
  },
  computed: {
    sortedProducts () {
      return this.products.slice().sort((a, b) => {
        return a.product_id - b.product_id
      })
    }
  },
  created () {
    db.collection('products').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.products.push(doc.data())
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .products_list-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
