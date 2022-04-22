<template>
  <div>
    <Header />
    Main page
    <BodyBlock />
    <div>
      <router-link to="/about" exact>About ass!!!</router-link>
    </div>
    <div><el-button type="primary" plain>Primary</el-button></div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/subComponents/Header.vue'
import Footer from '@/components/subComponents/Footer.vue'
import BodyBlock from './body/BodyBlock'


export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    BodyBlock,
  }
}
</script>
<style>
body {
  min-height:100%;
}
.footer {
  margin-top: auto;
}
</style>
