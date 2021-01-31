<template lang="pug">
main.main
  h1.ttl-a {{ title }}
  .container.aboutOutline
    profile-item
    .profileOutline
      h2.outlineTitle {{ userName }}
      .outlineBody
        p.outlineDescription {{ outlineDescription }}
        ul.outlineHashList
          li(v-for="item in outlineHashs") {{ item }}
  section(v-if="skills")
    h2.ttl-a {{ skills.title }}
    .container.aboutSkillsTable
      table.skillsTable
        tbody
          tr(
            v-for="(category, index) in skills.body"
            :key="index"
          )
            th {{ category.title }}
            td
              ul.skillsIconList
                li(v-for="item in category.items") {{ item }}
  h2.ttl-a History
  .container.aboutHistoryTable
    table.historyTable(v-if="history")
      tbody
        tr(
          v-for="(item, index) in history"
          :key="index"
        )
          th {{ item.year }}
          td {{ item.content }}
  footer-content-contact
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import ProfileItem from '@/components/ProfileItem/ProfileItem.vue'
import FooterContentContact from '@/components/FooterContentContact/FooterContentContact.vue'
import USER from '/const/user'

export default defineComponent({
  components: {
    ProfileItem,
    FooterContentContact,
  },
  setup() {
    const title = computed(() => 'About')
    const metaDescription = computed(() => 'buchiya4thのスキルや経歴などのご紹介です。')
    const bodyClass = computed(() => 'page-about')
    const userName = computed(() => USER.name)
    const outlineDescription = computed(() => 'とある企業のフロントエンドエンジニア。')
    const outlineHashs = computed(() => ['Frontend-engineer', '育児', '音楽', 'ギター', 'DTM'])
    const skills = computed(() => {
      return {
        title: 'Skills',
        body: [
          {
            title: '言語',
            items: ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'TypeScript'],
          },
          {
            title: 'フレームワーク・ライブラリ',
            items: ['Vue.js', 'Nuxt.js', 'React', 'WordPress'],
          },
          {
            title: 'パッケージ',
            items: [
              'Yarn',
              'pug',
              'PostCSS',
              'BABEL',
              'ESLint',
              'stylelint',
              'webpack',
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
        ],
      }
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
          year: '2020 -',
          content: '楽天株式会社',
        },
      ]
    })
    return {
      title,
      metaDescription,
      bodyClass,
      userName,
      outlineDescription,
      outlineHashs,
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

<style lang="scss" scoped>
.aboutOutline {
  @media #{mediaUp(phone-large)} {
    display: flex;
    justify-content: center;
  }
}

.outlineTitle {
  margin: size(3, vw) 0 0;
  font-size: size(4.5, vw);

  @media #{mediaLess(phone-large)} {
    text-align: center;
  }

  @media #{mediaUp(phone-large)} {
    margin: 0;
    font-size: size(4.5, px);
  }
}

.outlineHashList {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin-right: 0.5em;

    &::before {
      content: "#";
    }
  }
}

.skillsTable {
  margin: 0 auto;

  th,
  td {
    padding: size(1, px);

    @media #{mediaLess(phone-large)} {
      display: block;
    }
  }

  th {
    text-align: left;

    @media #{mediaLess(phone-large)} {
      font-size: size(3, vw);
    }

    @media #{mediaUp(phone-large)} {
      width: calc(9em + #{size(1, px)});
    }
  }
}

.skillsIconList {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;

    &:not(:last-child)::after {
      margin-right: size(1, px);
      margin-left: 1px;
      content: ",";
    }
  }
}

.historyTable {
  margin: 0 auto;

  th,
  td {
    padding: size(0.5, px);
    vertical-align: top;
  }

  th {
    min-width: 6.5em;

    @media #{mediaLess(phone-large)} {
      padding-right: size(1, vw);
    }

    @media #{mediaUp(phone-large)} {
      padding-right: size(2, px);
    }
  }
}
</style>
