<template>
  <div>
    <Header />
    About us
    <BodyBlock />
    <div>
      <router-link to="/" exact>Home page</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './subComponents/Header.vue'
import Footer from './subComponents/Footer.vue'
import BodyBlock from './body/BodyBlock'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
    BodyBlock
  }
}
</script>
