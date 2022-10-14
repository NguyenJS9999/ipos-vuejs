<template>
  <div class="component-product-item">
    <div class="product-item__image">
      <img v-bind:src="image_url" v-bind:alt="alt" />
    </div>

    <div class="product-item__content">
      <div class="product-item__name">{{ productName }}</div>
      <div class="product-item__description">{{ description }}</div>
      <div class="product-item__price">{{ price }}</div>

      <div class="product-item__adjust-quantity">
        <div class="product-item__adjust"><span id="minus">-</span></div>
        <input type="number" max="{1}" min="{100}" v-bind:value="quantity" />
        <div class="product-item__adjust"><span>+</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image_url: String,
    alt: String,
    productName: String,
    description: String,
    price: Number,
    note: String,
    quantity: Number
  },

  data () {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style>
.component-product-item {
  border-radius: 10px;
  width: 100%;
  margin-bottom: 10px;

  align-items: center;
  position: relative;
  padding: 6px;
  text-align: left;

  display: flex;
  justify-content: center;
  gap: 0.75rem;
  user-select: none;
  cursor: pointer;
  animation-duration: 0.3s;
  transition: all 0.2s ease;
}

.component-product-item:hover {
  background: rgba(238, 238, 238, 0.8);
}

.product-item__image {
  width: 63px;
  width: 63px;
  height: 63px;
  border-radius: 8px;
  background-position: 50%;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
}

.product-item__image img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
}

.product-item__content {
  flex: 1;
  text-align: left;
}

.product-item__name {
  color: #363636;
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.product-item__description {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 100%;
  min-height: 28px;
  color: grey;
}
.product-item__price {
  margin-top: 1px;
  font-size: 12px;
  font-weight: 600;
  color: orange;
  min-height: 15px;
}

.product-item__adjust-quantity {
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
}
.product-item__adjust-quantity input {
  background: transparent;
  outline: 0;
  border: none;
  width: 44px;
  height: 28px;
  text-align: center;
  line-height: 25px;
  font-size: 16px;
}

.product-item__adjust-quantity input::-webkit-outer-spin-button,
.product-item__adjust-quantity input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* btn adjust */
.product-item__adjust {
  border: 1px solid transparent;
  /* border: 1px solid rgba(223,223,223, 1); */
  background-color: rgba(223, 223, 223, 1);
  width: 25px !important;
  height: 25px !important;
  border-radius: 50vh;
  color: rgba(128, 128, 128, 1);
  line-height: 25px;
  font-size: 24px !important;

  outline: 0;
  text-align: center;
  margin: 0 !important;
  padding: 0 !important;
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease;
}

.product-item__adjust--empty {
  background-color: rgb(248, 149, 35) !important;
  color: rgba(255, 255, 255, 1);
}

.product-item__adjust:hover {
  opacity: 0.6;
}

.product-item__adjust:active {
  opacity: 1;
}

.product-item__adjust span {
  font-size: 24px !important;
  font-weight: normal;
  font-style: normal;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

#minus {
  transform: translateY(-2px);
}
</style>
