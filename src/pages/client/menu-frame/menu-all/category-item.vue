<template>
  <div class="product-category-item">
    <div class="product-category-item__title">{{ categoryName }}</div>

    <div v-for="item in productList" v-bind:key="item.id">
      <CompProductItem
        v-bind:image_url="item.image_url"
        v-bind:alt="item.alt"
        v-bind:productName="item.productName"
        v-bind:description="item.description"
        v-bind:price="item.price"
        v-bind:note="item.note"
        v-bind:quantity="item.quantity"
      />
    </div>
    <!--  -->
  </div>
</template>

<script>
import CompProductItem from './product-item.vue'

export default {
  name: 'product-category-item',
  props: {
    categoryName: {
      type: String,
      default: () => {
        return ''
      }
    },
    productList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CompProductItem
  },
  data () {
    return {}
  },

  methods: {
    handleConsole (event) {
      console.log('productList', event)
    }
  }
}
</script>

<style>
.product-category-item {
  /* border: 1px solid pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-category-item__title {
  text-align: left;
  padding-left: 6px;
  font-size: 16px;
  color: #363636;
  font-weight: 700;
  position: relative;
  margin-bottom: 12px;
  padding-top: 12px;
}
</style>
