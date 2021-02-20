<template lang="pug">
.readMoreLink
  nuxt-link(:to="to") {{ text }}
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  }
})
</script>

<style lang="scss" scoped>
.readMoreLink {
  margin: size(3, px) 0;
  font-family: $fontKeyword;
  font-size: 24px;
  font-weight: bold;
  text-align: right;

  a {
    transition: all 0.2s ease-in-out;

    &:hover {
      text-decoration: none;
      opacity: 0.8;
    }

    &::after {
      margin-left: 0.5em;
      content: ">";
    }
  }
}

</style>
