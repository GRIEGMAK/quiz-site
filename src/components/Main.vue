<template>
  <div>
    <Header />
    Main page 
    <div>
      <router-link to="/about" exact>About us!!!</router-link>
    </div>
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/subComponents/Header.vue'
import Footer from '@/components/subComponents/Footer.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
  }
}
</script>
