
<template>
  <div id="app" class="left-box">
    <div>
      <div class="title">Thực đơn</div>

      <div class="menu-bar__desktop">
        <div v-for="item in items" :key="item.id">
          <div
            id="btn-menubar__572722"
            v-bind:class="
              isSelected === item.id ? 'menu-item item-selected' : 'menu-item'
            "
            v-on:click="handleSelect($event, item.id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'client-left-box',
  props: {},
  components: {},

  data () {
    return {
      items: [
        { id: 581241, name: 'Quà Tết Dưới 500k' },
        { id: 572722, name: 'Quà Tết 500k-1tr' },
        { id: 572721, name: 'Quà Tết 1tr-2tr' },
        { id: 594357, name: 'Quà Tết Cao Cấp' },
        { id: 588351, name: 'Hạt Dinh Dưỡng' }
      ],

      isSelected: 581241
    }
  },

  methods: {
    handleSelect (event, id) {
      console.log('click item', event, id)
      this.isSelected = id
      return this.id
    }
  }
}
</script>

<style>
.left-box {
  display: block !important;
  width: 260px;
  user-select: none;
}
.left-box > div {
  background-color: #fff;
  margin-right: 16px;
  border-radius: 8px;
  min-height: 100px;
  position: -webkit-sticky;
  position: sticky;
  top: 16px;
  padding: 12px;
}

.title {
  color: #363636;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
}

/*  */
.menu-bar__desktop {
  margin-top: 8px;
  max-height: calc(100vh - 90px);
  overflow-y: auto;
  /*  */
  overflow: hidden;
}

.menu-item {
  color: #363636;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  padding: 8px;
  border-radius: 8px;
  overflow: hidden;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  margin-bottom: 8px;
}

.menu-item:hover {
  background-color: #f5f5f5;
}

.item-selected {
  font-weight: 500;
  color: #363636 !important;
  background-color: rgba(5, 96, 166, 0.12);
}

.item-selected:hover {
  font-weight: 500;
  color: #363636 !important;
  background-color: rgba(5, 96, 166, 0.12);
}
</style>
