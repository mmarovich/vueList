<template>
  <div>
    <div v-if="loaded">
      <h1>{{name}}</h1>
      <h2>${{price}}</h2>
      <div class="btn">Buy</div>
    </div>
    <div v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import db from "@/db"
export default {
  name: 'ProductPage',
  data() {
    return {
      name: '',
      price: '',
      loaded: false
    }
  },
  beforeCreate() {
    db.collection('products').where('product_id', '==', this.$route.params.product_id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            const { name, price } = doc.data()
            this.name = name
            this.price = price
          })

          this.loaded = true
        })
  }
}
</script>

<style scoped>
  body {
    background: #E3F2FD;
    margin: 0;
  }
</style>