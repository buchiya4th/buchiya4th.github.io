<template lang="pug">
.heroHeader.is-top
  profile-item
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import ProfileItem from '@/components/ProfileItem/ProfileItem.vue'

export default defineComponent({
  components: {
    ProfileItem,
  },
})
</script>

<style lang="scss" scoped>
$heroHeaderBg: $BLACK;

.heroHeader.is-top {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba($heroHeaderBg, 0.7);

  &::before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    display: block;
    width: 100vw;
    height: 100vh;
    background: url("/img/pages/top/heroHeaderTop.jpg") center no-repeat;
    background-size: cover;
    content: "";
  }
}
</style>
