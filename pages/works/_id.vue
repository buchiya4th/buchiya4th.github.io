<template lang="pug">
main.main
  .ttl-a {{ title }}
  .container(
    v-for="(item, index) in content"
    v-if="index == $route.params.id"
  )
    h1.siteTitle {{ item.title }}
    p.siteUrl
      a(
        :href="item.siteUrl"
        target="_blank"
      ) {{ item.siteUrl }}
    WorksImageSlider(:images="item.images")
    WorksTable(:item="item")

  FooterContentContact
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import WorksImageSlider from '@/components/services/works/WorksImageSlider.vue'
import WorksTable from '@/components/services/works/WorksTable.vue'
import FooterContentContact from '@/components/organisms/FooterContentContact.vue'

export default defineComponent({
  name: 'WorksDetail',
  components: {
    WorksImageSlider,
    WorksTable,
    FooterContentContact,
  },
  setup() {
    const title = computed(() => 'Works')
    const metaDescription = computed(() => '作品ページです。')
    const bodyClass = computed(() => 'page-works')
    const content = computed(() => {
      return [
        {
          title: 'ルーツ音楽診断',
          siteUrl: 'https://buchiya4th.github.io/roots-music-diagnosis/app/',
          images: [
            { src: '/img/pages/works/roots-music-diagnosis01.png', },
            { src: '/img/pages/works/roots-music-diagnosis02.png', },
            { src: '/img/pages/works/roots-music-diagnosis03.png', },
          ],
          useTechnology: ['Vue.js', 'webpack', 'babel', 'browser-sync', 'pug', 'Sass'],
          useTools: ['Visual', 'Stadio Code', 'Yarn'],
          outline: '簡単な診断ゲームを作りました。ルーツ音楽に興味を持ってもらえるように診断形式にしました。Vue.jsを使ってスクラッチで作りました。',
        },
        {
          title: 'ぶちろぐ',
          siteUrl: 'https://buchilog.com',
          images: [
            { src: '/img/pages/works/buchilog01.png', },
            { src: '/img/pages/works/buchilog02.png', },
            { src: '/img/pages/works/buchilog03.png', },
          ],
          useTechnology: ['React', 'Next.js', 'TypeScript', 'JSX', 'emotion', 'ESLint', 'stylelint', 'Sass'],
          useTools: ['Figma', 'Visual Stadio Code', 'Yarn'],
          outline: '自分用のブログとしてNext.jsで開発しました。JSXとCSS in JSのemotionを使いJavaScriptでコントロールするように構築しました。デザインは和風を基調に先進的なイメージを意識して作りました。個性的でインパクトがあるデザインよりもシンプルで読みやすいデザインを目指しました。',
        },
      ]
    })

    return {
      title,
      metaDescription,
      bodyClass,
      content,
    }
  }
})
</script>

<style lang="scss" scoped>
.ttl-a {
  margin: size(3, vw) 0;

  @media #{mediaUp(phone-large)} {
    margin: size(6, px) 0 size(4, px);
  }
}

.siteTitle {
  margin: 0;
  text-align: center;
  font-size: size(3, px);
}

.siteUrl {
  margin-top: 0;
  text-align: center;
}
</style>
