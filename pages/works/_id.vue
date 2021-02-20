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
    .imageSlider
      swiper(
        ref="mySwiper"
        :options="swiperOptions"
      )
        swiper-slide(
          v-for="(item, index) in item.images"
          :key="index"
        )
          img.slideImage(
            :src="item.src"
            width="800"
            height="450"
            alt=""
            loading="lazy"
          )
      .swiper-pagination(slot="pagination")
      .swiper-button-prev(slot="button-prev")
      .swiper-button-next(slot="button-next")
    table.workTable
      tbody
        tr
          th サイト名
          td {{ item.title }}
        tr
          th URL
          td
            a(
              :href="item.siteUrl"
              target="_blank"
            ) {{ item.siteUrl }}
        tr
          th 使用技術
          td
            ul.inline-list
              li(
                v-for="(item, index) in item.useTechnology"
                :key="index"
              ) {{ item }}
        tr
          th 使用ツール
          td
            ul.inline-list
              li(
                v-for="(item, index) in item.useTools"
                :key="index"
              ) {{ item }}
        tr
          th 概要
          td {{ item.outline }}
</template>

<script>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default defineComponent({
  name: 'WorksDetail',components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
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
    const mySwiper = ref(null)
    const swiperOptions = ref({
      speed: 600,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
    }).value

    return {
      title,
      metaDescription,
      bodyClass,
      content,
      mySwiper,
      swiperOptions,
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

.imageSlider {
  --swiper-navigation-size: 24px;
  --swiper-navigation-color: #666;
  --swiper-pagination-color: #666;

  position: relative;
  margin: size(4, px) 0 size(5.5, px);

  @media (min-width: "500px") {
    --swiper-navigation-size: 40px;
  }
}

.swiper-container {
  width: calc(100% - 80px);

  @media (min-width: "500px") {
    width: calc(100% - 160px);
    max-width: 800px;
  }
}

.swiper-pagination {
  right: 0;
  left: 0;
  margin: auto;

  /deep/ .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    margin-right: 4px;
    margin-left: 4px;
  }
}

.swiper-button-prev:focus,
.swiper-button-next:focus,
.swiper-pagination /deep/ .swiper-pagination-bullet:focus {
  outline: none;
}

.slideImage {
  border: 1px solid #ccc;
}

.workTable {
  max-width: 100%;
  word-break: break-word;

  @media (min-width: "700px") {
    width: calc(100% - 160px);
    max-width: 800px;
    margin: 0 auto;
  }

  th,
  td {
    @media (max-width: "699px") {
      display: block;
    }
  }

  th {
    min-width: 6em;
    padding: size(1, px) size(1, px) size(1, px) 0;

    @media (max-width: "699px") {
      padding: size(1, px) size(1, px) 0;
    }
  }

  td {
    padding: size(1, px) 0 size(1, px) size(1, px);

    @media (max-width: "699px") {
      padding: 0 size(1, px) size(1, px);
    }
  }
}

.inline-list {
  margin: 0;
  padding: 0;

  li {
    display: inline-block;

    &:not(:last-child)::after {
      margin-right: 0.5em;
      content: ",";
    }
  }
}
</style>
