<template lang="pug">
.wrap
  the-header
  nuxt
  the-footer
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'

export default {
  data() {
    return {}
  },
  components: {
    TheHeader,
    TheFooter
  }
}
</script>>
