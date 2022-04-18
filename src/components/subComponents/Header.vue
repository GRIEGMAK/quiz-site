<template>
  <div class="header custom_container">
    <div class="header_logo">
      <img class="logo" src="@/assets/Psychologies.png">
    </div>
    <div class="header_menu">
      <div class="header_menu_first mp-4 hover">Тесты</div>
      <div class="header_menu_second mp-4 hover">Отношения</div>
      <div class="header_menu_third mp-4 hover">Эмоциональное благополучие</div>
      <div class="header_menu_for mp-4 hover">Физическое благополучие</div>
      <div class="header_menu_five mp-4 hover">Карьера</div>
      <div class="header_menu_six mp-4 hover">Форум</div>
    </div>
    <div class="header_left">
      <img class="logo-left" src="@/assets/logo-left.png">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.logo {
  height: 50px;
  margin-top: 8px;
}

.mp-4 {
  margin-right: 10px;
  color: black;
  cursor: pointer;
  font-weight: 800;
}

.hover:hover{
  transition: all 0.7s;
  color: #ec6584;
  border-bottom: 1px solid #ec6584;
}

.header {
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
  padding: 20px;
  width: 900px;
  font-size: 18px;
}

.logo-left {
  height: 81px;
}

.header_logo {
  color: palevioletred;
  font-weight: 600;
}
</style>
