<template>
  <div class="header-info">
    <div class="logo-n-cover">
      <div class="logo-n-cover-img"></div>
    </div>

    <div class="info-name">
      <div class="restaurant__navigation">Danh sách cửa hàng >></div>

      <div class="restaurant__name">Trang Handmade - Sét Quà Tết 2022</div>

      <div class="restaurant_info">
        <div>
          <div>
            <img src="/static/images/icon_restaurant_info_1.svg" alt="" />
          </div>
          <div class="address-n-distance">
            <div>19 P. Trần Kim Xuyến, Yên Hoà, Cầu Giấy, Hà Nội</div>
            <div class="km">4.16 km</div>
          </div>
        </div>
        <!--  -->
        <div>
          <div>
            <img src="/static/images/icon_restaurant_info_2.svg" alt="" />
          </div>
          <div class="open-status opened">Đang mở cửa: 00:00 - 23:30</div>
        </div>
        <!--  -->
        <div>
          <div>
            <img src="/static/images/icon_restaurant_info_3.svg" alt="" />
          </div>
          <div>
            Số điện thoại cửa hàng:
            <span> 0961164098 </span>
          </div>
        </div>
        <!--  -->
      </div>
      <!--  -->
      <div class="component__order-floating__button">
        <router-link to="/order">Đơn hàng</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-info {
  border-radius: 12px;
  background-color: #fff;
  padding: 20px 16px 20px 20px;
  min-height: 269px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 15px;
  position: relative;
}

.logo-n-cover {
  width: 526px;
}

.logo-n-cover-img {
  width: 100%;
  height: 100%;
  background-image: url("https://image.foodbook.vn/upload/20211106/1636170420924_018c730d251ed3e32f8e6ad5e605352a.png");
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in;
  border-radius: 12px;
  overflow: hidden;
  -webkit-box-flex: 2;
  -ms-flex: 2;
  flex: 2;
}

.info-name {
  flex: 1;
}

.restaurant__navigation {
  border: 1px solid;
}

.restaurant__name {
  margin-top: 8px;
  padding-right: 12px;
}

.restaurant_info {
}

.component__order-floating__button {
  /* border: 1px solid; */
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 1rem;
  right: 1rem;

  border-radius: 8px;
  box-shadow: 0 0 8px rgb(63 63 70 / 10%);
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}
.component__order-floating__button:hover {
  box-shadow: 0 0 8px rgb(63 63 70 / 60%);
}

.component__order-floating__button > a {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #363636;
  font-weight: 500;
  font-size: 12px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-decoration: none;
}

@media only screen and (max-width: 768px) {
  .header-info {
    flex-direction: column;
  }
  .logo-n-cover {
    width: 100%;
  }
}
</style>

<!-- <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->
