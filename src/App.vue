<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-color: #f5f5f5;
  min-height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* order.ipos.vn */
  font-family: BlinkMacSystemFont, -apple-system, "Opens Sans", Helvetica Neue,
    Helvetica, Fira Sans, Noto, Droid Sans, Cantarell, Oxygen, Ubuntu,
    Franklin Gothic Medium, Century Gothic, Liberation Sans, sans-serif;
  font-size: 13px;
  /* scroll-behavior: smooth; */
  -webkit-overflow-scrolling: touch;
  touch-action: manipulation;
  display: flex;
  align-items: stretch;
}

.order__home-page-index {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
  /* background-color: white; */
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

.scroll-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
/* Global CSS */
.transition-css-hover06-active-visited {
  transition: all 0.2s ease;
  cursor: pointer !important;
  user-select: none;
}
.transition-css-hover06-active-visited:hover {
  opacity: 0.6 !important;
}
.transition-css-hover06-active-visited:active {
  opacity: 1 !important;
}
.transition-css-hover06-active-visited:visited {
  opacity: 1 !important;
}
</style>
