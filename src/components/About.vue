<template>
  <div>
    <Header />
    About us
    <div>
      <router-link to="/" exact>Home page</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './subComponents/Header.vue'
import Footer from './subComponents/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
  }
}
</script>
