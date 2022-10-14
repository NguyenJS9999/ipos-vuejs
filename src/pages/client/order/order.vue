<template>
  <div class="order">
    <div class="container">
      <!--  -->
      <div class="order-header">
        <div class="order-header__action">
        <!-- <router-link to="/order">Đơn hàng</router-link> -->

          <router-link to="/pos_parent" class="transition-css-hover06-active-visited">
            <img
              src="https://order.ipos.vn/static/images/icon_arrow_left.svg"
              alt="back"
          /></router-link>
        </div>

        <div class="order-header__title">Đơn hàng của bạn</div>
      </div>
      <!--  -->
      <div class="order-table-list-product">
        <table class="order-table">
          <tr class="order-table__col-title">
            <th>#</th>
            <th>Mã đơn</th>
            <th>Thời gian</th>
            <th>Địa điểm đặt</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>

          <tr>
            <td>1</td>
            <td>1800</td>
            <td>20/11/2022</td>
            <td>279 Đội Cấn</td>
            <td>500000000</td>
            <td>Chưa thanh toán</td>
          </tr>

          <tr>
            <td>2</td>
            <td>1800</td>
            <td>20/11/2022</td>
            <td>279 Đội Cấn</td>
            <td>500000000</td>
            <td>Chưa thanh toán</td>
          </tr>
        </table>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',
  props: {},
  data () {
    return {

    }
  },
  methods: {},
  computed: {}
}
</script>

<style>
.order {
  background-color: #fff;
  flex: 1;
  height: 100%;
}

.order > div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.order-header {
  width: 100%;
  background-color: #fff;
  z-index: 2;
  height: 83px !important;
  border: 0 !important;
  padding: 0 !important;

  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.order-header__action {
  padding: 0;
  max-width: 44px;
  text-align: center;
  justify-content: center;
  -webkit-box-flex: 1;
  flex: 1;
  display: flex;
  align-items: center;
}

.order-header__action a {
  background-color: #f8f8f8;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order-header__title {
  padding-left: 16px;
  -webkit-box-pack: left !important;
  -ms-flex-pack: left !important;
  justify-content: left !important;
  color: #363636 !important;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 0;
}

/* table */
.order-table-list-product {
  width: 100%;
}

/* .order-table-list-product > table, th, td {
  border: 1px solid red;
} */

.order-table {
  width: 100%;
}
/* .order-table__col-title {
  border-radius: 12px;

} */
.order-table__col-title th {
  border: 1px 0 solid #eee;
  background-color: #f5f5f5;
  padding: 8px 16px;

  color: #636363;
  text-align: left;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
}
/* */
.order-table__col-title > th:first-child {
  border-radius: 12px 0 0px 0;
}
.order-table__col-title > th:last-child {
  border-radius: 0 12px 0 0;
}

.order-table tr td {
  padding: 8px 16px;

  color: #000000f0;
  text-align: left;
  font-size: 12px !important;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
}
.order-table tr:not(:first-child) {
  border-bottom: 0.5px solid #eee;
}
</style>
