<template lang="pug">
.imageSlider
  swiper(
    ref="mySwiper"
    :options="swiperOptions"
  )
    swiper-slide(
      v-for="(item, index) in images"
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
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default defineComponent({
  name: 'WorksImageSlider',
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup() {
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
      mySwiper,
      swiperOptions,
    }
  }
})
</script>

<style lang="scss" scoped>
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
</style>
