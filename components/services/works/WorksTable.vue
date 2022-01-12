<template lang="pug">
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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'WorksTable',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<style lang="scss" scoped>
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
