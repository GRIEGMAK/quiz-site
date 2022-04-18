<template>
  <div class="header custom_container">
    <div class="header_logo">Psycologies</div>
    <div class="header_menu">
      <div class="header_menu_first mp-4">{{msg}}</div>
      <div class="header_menu_second mp-4">{{msg}}</div>
      <div class="header_menu_third mp-4">{{msg}}</div>
      <div class="header_menu_for mp-4">{{msg}}</div>
      <div class="header_menu_five mp-4">{{msg}}</div>
    </div>
    <div class="header_left">Left</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Contacts'
    }
  }
}
</script>

<style scoped>
.mp-4 {
  margin-right: 10px;
}
.header {
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
};
.custom_container {
  max-width: 1100px;
}
.header_menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.header_logo {
  color: palevioletred;
  font-weight: 600;
}
</style>
