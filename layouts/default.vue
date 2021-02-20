<template lang="pug">
.wrap
  the-header
  nuxt
  the-footer
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TheHeader from '@/components/global/TheHeader.vue'
import TheFooter from '@/components/global/TheFooter.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
  },
})
</script>
