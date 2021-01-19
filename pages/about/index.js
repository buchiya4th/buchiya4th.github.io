import ProfileItem from '@/components/ProfileItem/ProfileItem.vue'
import FooterContentContact from '@/components/FooterContentContact/FooterContentContact.vue'

export default {
  data() {
    return {
      title: 'About',
      metaDescription: 'aboutページの説明文',
      bodyClass: `page-about`,
      userName: this.$store.state.userName,
      outlineDescription: 'とある企業のフロントエンドエンジニア。',
      outlineHashList: ['Frontend-engineer', '育児', '音楽', 'ギター', 'DTM'],
    }
  },
  components: {
    ProfileItem,
    FooterContentContact
  },
  computed: {
    skills() {
      return {
        title: 'Skills',
        body: [
          {
            title: '言語',
            items: [ 'HTML5', 'CSS3', 'JavaScript', 'Sass', 'TypeScript' ]
          },
          {
            title: 'フレームワーク・ライブラリ',
            items: [ 'Vue.js', 'Nuxt.js', 'React', 'WordPress' ]
          },
          {
            title: 'パッケージ',
            items: [ 'Yarn', 'pug', 'PostCSS', 'BABEL', 'ESLint', 'stylelint', 'webpack', 'IMA SDK' ]
          },
          {
            title: 'ツール',
            items: [ 'Visual Studio Code', 'Git', 'Figma', 'Photoshop', 'Illustrator', 'Adobe XD', 'Slack', 'chatwork' ]
          }
        ]
      }
    },
    history() {
      return [
        {
          year: '2005 - 2006',
          content: '専門学校 岡山情報ビジネス学院'
        },
        {
          year: '2007 - 2008',
          content: 'エクシードシステム株式会社'
        },
        {
          year: '2008 - 2011',
          content: '株式会社ディグロップ'
        },
        {
          year: '2011 - 2012',
          content: '株式会社エヌジーエル'
        },
        {
          year: '2012 - 2013',
          content: '株式会社スレッドアンドハーフ'
        },
        {
          year: '2013 - 2015',
          content: '株式会社インスパイア'
        },
        {
          year: '2015 - 2019',
          content: '株式会社アドウェイズ'
        },
        {
          year: '2020 -',
          content: '楽天株式会社'
        },
      ]
    },
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
