import ProfileItem from '@/components/ProfileItem/ProfileItem.vue'

export default {
  data() {
    return {
      title: 'About',
      metaDescription: 'aboutページの説明文',
      bodyClass: `page-about`,
      userName: this.$store.state.userName,
      outlineDescription: 'とある企業のフロントエンドエンジニア。',
      outlineHashList: ['Frontend-engineer', '育児', '音楽', 'ギター', 'DTM']
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
