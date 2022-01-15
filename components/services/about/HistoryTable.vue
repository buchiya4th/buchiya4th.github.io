<template lang="pug">
table.historyTable
  tbody
    tr(
      v-for="(item, index) in history"
      :key="index"
    )
      th {{ item.year }}
      td {{ item.content }}
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    history: {
      type: Array,
      default: () => [],
    }
  }
})
</script>

<style lang="scss" scoped>
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
