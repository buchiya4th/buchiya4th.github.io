import ProfileItem from '@/components/ProfileItem/ProfileItem.vue'

export default {
  data() {
    return {
      title: 'about',
      metaDescription: 'aboutページの説明文',
      bodyClass: `page-about`
    }
  },
  components: {
    ProfileItem
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        }
      ],
      bodyAttrs: {
        class: this.bodyClass
      }
    }
  }
}
