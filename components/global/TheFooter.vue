<template lang="pug">
footer.footer
  p.copyright &copy; 2018 {{ userName }}.
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import USER from '/const/user'

export default defineComponent({
  setup() {
    const userName = computed(() => USER.name)
    return { userName }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  padding-top: size(5, vw);

  @media #{mediaUp(phone)} {
    padding-top: size(8, px);
  }

  .copyright {
    margin: size(2, vw) 0 size(4, vw);
    font-size: size(1.8, vw);
    text-align: center;

    @media #{mediaUp(phone)} {
      margin: size(2, px) 0 size(4, px);
      font-size: size(1.8, px);
    }
  }
}
</style>
