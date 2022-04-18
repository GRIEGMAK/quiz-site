<template>
   <div>
      <BodyTop />
      <BodyMidle />
      <BodyBottom />
   </div>
</template>


<script>
import BodyTop from './BodyTop'
import BodyMidle from './BodyMidle'
import BodyBottom from './BodyBottom'

export default {
  name: 'BodyBlock',
  components: {
     BodyTop,
     BodyMidle,
     BodyBottom
  },
  data () {
    return {
    }
  }
}

</script>