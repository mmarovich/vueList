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

    <h3>Products</h3>

    <div 
      v-for="product in sortedProducts"
      v-bind:key="product.product_id"
      class="collection"
    >
    <div
      v-if="editId === product.product_id"
      class="collection-item products__list-item"
    >
      <div>{{product.product_id}}</div>
      <div>
        <input 
          class="validate"
          v-model="editProductData.name"
        />
        <input 
          class="validate"
          v-model="editProductData.price"
        />
      </div>
    </div>
    <div 
      v-else
      class="collection-item products__list-item"
    >
      <div>{{product.product_id}}</div>
      <div>{{product.name}}</div>
      <div>{{product.price}}</div>
      <div>
        <i 
        @click="onEdit(product)"
        class="material-icons">mode_edit</i>
      <i 
        @click="onDelete(product.product_id)"
        class="material-icons">delete</i>
    </div>
    </div>

    </div>
  </div>
</template>

<script>
import db from "@/db";

export default {
  data() {
    return {
      products: [],
      addProductData: {
        product_id: '',
        name: '',
        price: ''
      },
      editId: '',
      editProductData: {
        product_id: '',
        name: '',
        price: ''
      }
    };
  },
  computed: {
    sortedProducts() {
      return this.products.slice().sort((a, b) => {
        return a.product_id - b.product_id;
      });
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    getProducts() {
      db.collection('products').get().then(snapshot => {
        const products = []
        snapshot.forEach(doc => {
          products.push(doc.data())
        })

        this.products = products
      })
    },
    onAdd() {
      db.collection('products').add(this.addProductData)
        .then(this.getProducts())
    },
    onDelete(product_id) {
      db.collection('products').where('product_id', '==', product_id)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            doc.ref.delete().then(this.getProducts)
          })
        })
    },
    onEdit(product) {
      this.editId = product.product_id
      this.editProductData = product
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products__list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.products__add-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.material-icons {
  cursor: pointer;
}
</style>
