<template lang="pug">
main.main
  h1.ttl-a {{ title }}
  .container
    WorkList
  FooterContentContact
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import WorkList from '@/components/services/works/list'
import FooterContentContact from '@/components/organisms/FooterContentContact.vue'

export default defineComponent({
  components: {
    FooterContentContact,
    WorkList,
  },
  setup() {
    const title = computed(() => 'Works')
    const metaDescription = computed(() => '作品ページです。')
    const bodyClass = computed(() => 'page-works')

    return {
      title,
      metaDescription,
      bodyClass,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription,
        },
      ],
      bodyAttrs: {
        class: this.bodyClass,
      },
    }
  },
})
</script>
