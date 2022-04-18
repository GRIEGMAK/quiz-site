<template>
  <div>
    <Header />
    Main page
    <BodyBlock />
    <div>
      <router-link to="/about" exact>About ass!!!</router-link>
    </div>
    <Footer />
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
    BodyBlock
  }
}
</script>
