<template lang="pug">
main.main
  h1.ttl-a {{ title }}
  AboutOutline.container
  section(v-if="skills")
    h2.ttl-a Skills
    .container.aboutSkillsTable
      SkillsTable(:skills="skills")
  section(v-if="history")
    h2.ttl-a History
    .container.aboutHistoryTable
      HistoryTable(:history="history")
  footer-content-contact
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import FooterContentContact from '@/components/organisms/FooterContentContact.vue'
import AboutOutline from '@/components/services/about/AboutOutline.vue'
import SkillsTable from '@/components/services/about/SkillsTable.vue'
import HistoryTable from '@/components/services/about/HistoryTable.vue'

export default defineComponent({
  components: {
    FooterContentContact,
    AboutOutline,
    SkillsTable,
    HistoryTable,
  },
  setup() {
    const title = computed(() => 'About')
    const metaDescription = computed(() => 'buchiya4thのスキルや経歴などのご紹介です。')
    const bodyClass = computed(() => 'page-about')
    const skills = computed(() => {
      return [
        {
          title: '言語',
          items: ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'TypeScript'],
        },
        {
          title: 'フレームワーク・ライブラリ',
          items: ['React', 'Next.js', 'Vue.js', 'Nuxt', 'WordPress'],
        },
        {
          title: 'パッケージ',
          items: [
            'Storybook',
            'ESLint',
            'stylelint',
            'webpack',
            'BABEL',
            'Yarn',
            'pug',
            'PostCSS',
            'IMA SDK',
          ],
        },
        {
          title: 'ツール',
          items: [
            'Visual Studio Code',
            'Git',
            'Figma',
            'Photoshop',
            'Illustrator',
            'Adobe XD',
            'Slack',
            'chatwork',
          ],
        },
      ]
    })
    const history = computed(() => {
      return [
        {
          year: '2005 - 2006',
          content: '専門学校 岡山情報ビジネス学院',
        },
        {
          year: '2007 - 2008',
          content: 'エクシードシステム株式会社',
        },
        {
          year: '2008 - 2011',
          content: '株式会社ディグロップ',
        },
        {
          year: '2011 - 2012',
          content: '株式会社エヌジーエル',
        },
        {
          year: '2012 - 2013',
          content: '株式会社スレッドアンドハーフ',
        },
        {
          year: '2013 - 2015',
          content: '株式会社インスパイア',
        },
        {
          year: '2015 - 2019',
          content: '株式会社アドウェイズ',
        },
        {
          year: '2020 - 2022',
          content: '楽天株式会社',
        },
        {
          year: '2022 -',
          content: 'ウェルスナビ株式会社',
        },
      ]
    })
    return {
      title,
      metaDescription,
      bodyClass,
      skills,
      history,
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
