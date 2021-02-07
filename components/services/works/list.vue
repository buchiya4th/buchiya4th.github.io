<template lang="pug">
ul.workList
  li.workList-item(
    v-for="(item, index) in list"
    :key="index"
  )
    img.workList-image(
      :src="item.image.src"
      :alt="item.title"
      width="320"
      height="180"
      loading="lazy"
    )
    p.workList-title {{ item.title }}
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'WorkList',
  setup() {
    const list = computed(() => {
      return [
        {
          title: 'ルーツ音楽診断',
          image: {
            src: '/img/pages/works/roots-music-diagnosis_thumb.jpg',
          }
        },
        {
          title: 'ぶちろぐ',
          image: {
            src: '/img/pages/works/buchilog_thumb.jpg',
          }
        },
      ]
    })

    return { list }
  }
})
</script>

<style lang="scss" scoped>
.workList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(auto, 298px));
  grid-gap: 36px;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.workList-item {
  text-align: center;
}

.workList-image {
  border: solid 1px #ccc;
}

.workList-title {
  margin: 8px 0 0;
}
</style>
