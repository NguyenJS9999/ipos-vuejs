<template>
  <div class="menu--all">
    <!--  -->
    <div class="desktop-search">
      <input type="text" placeholder="Bạn đang cần tìm món gì ?" />
    </div>
    <!--  -->
    <div class="products-category">
      <div class="product-category-item">
        <div v-for="item in productCategory" :key="item.id">
          <CategoryItem
            v-bind:categoryName="item.categoryName"
            v-bind:productList="item.productList"
          />
        </div>

        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import dataProductCategory from './productCategoryData'
import CategoryItem from './category-item.vue'

export default {
  name: 'Clientmenu-all',
  props: {},
  components: {
    CategoryItem
  },

  data () {
    return {
      productCategory: dataProductCategory
    }
  },

  methods: {},
  computed: {}
}

console.log('Menu dataProductCategory: ', dataProductCategory)
</script>

<style>
.menu--all {
  /* border: 1px solid; */
  background-color: #fff;
  margin-right: 16px;
  border-radius: 8px;
  min-height: 100px;
  top: 16px;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
/* search */
.desktop-search {
  width: 100%;

  display: flex !important;
  padding: 9px 12px 20px;
  background-color: #fff;
  position: relative;
  border-radius: 8px 8px 0 0;
}

.desktop-search input {
  border: 1px solid #eee;
  background-color: #f9f9f9;
  width: 100%;
  height: 40px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 4px;
  padding-left: 40px;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0;
  color: #363636;
  outline: 0;
}
/*  */
.products-category {
  /* border: 1px solid; */
  width: 100%;
  flex: 1;
  padding: 10px;
}

/* category item */

/* List item */
</style>
