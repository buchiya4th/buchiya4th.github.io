<template lang="pug">
.wrap
  the-header
  nuxt
  the-footer
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import TheFooter from '@/components/TheFooter/TheFooter.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
  },
})
</script>
