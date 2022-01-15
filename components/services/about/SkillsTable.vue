<template lang="pug">
table.skillsTable
  tbody
    tr(
      v-for="(category, index) in skills"
      :key="index"
    )
      th {{ category.title }}
      td
        ul.skillsIconList
          li(v-for="item in category.items") {{ item }}
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    skills:{
      type: Array,
      default: () => [],
    }
  },
})
</script>

<style lang="scss" scoped>
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
</style>
