<template>
  <div class="right-box">
    <div>
      <div class="right-box__content">
        <div class="desktop-cart__empty">
          <img
            src="https://order.ipos.vn/static/images/icon_cart_blank.svg"
            alt="empty"
          />
          <div class="right-box-text">Không có món ăn trong giỏ hàng</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'client-right-box',
  props: {},
  components: {}
}
</script>

<style>
.right-box {
  display: block !important;
  max-width: 434px;
  min-width: 200px;
}

.right-box.div {
  position: -webkit-sticky;
  position: sticky;
}

.right-box__content {
  /* margin-left: 16px; */
  border-radius: 8px;
  min-height: 100px;
  background-color: #fff;
}

.desktop-cart__empty {
  padding: 2rem 0;
}

.desktop-cart__empty img {
  width: 100%;
}

.right-box-text {
  padding: 0 1rem;
  margin-top: 14px;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0;
  color: #8190a3;
}
</style>
