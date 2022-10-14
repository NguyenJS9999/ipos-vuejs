
<template>
  <div class="menu-frame"><LeftBox /><MenuAll /><RightBox /></div>
</template>

<script>
import LeftBox from './left-box/left-box.vue'
import MenuAll from './menu-all/menu-all.vue'
import RightBox from './right-box/right-box.vue'

export default {
  name: 'ClientMenuFrame',
  props: {},
  components: {
    LeftBox,
    MenuAll,
    RightBox
  }
}
</script>

<style>
.menu-frame {
  background-color: #f5f5f5;
  flex: 1;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
}
</style>
