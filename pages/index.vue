<template lang="pug">
main.main
  the-hero-header-top
  .prTopArea
    .container
      pr-top
  .worksArea
    .container
      h2.ttl-a Works
      .worksTop
        p.commingsoon Coming soon
  footer-content-contact
</template>

<script>
import TheHeroHeaderTop from '@/components/TheHeroHeaderTop/TheHeroHeaderTop.vue'
import PrTop from '@/components/PrTop/PrTop.vue'
import FooterContentContact from '@/components/FooterContentContact/FooterContentContact.vue'

export default {
  components: {
    TheHeroHeaderTop,
    PrTop,
    FooterContentContact
  }
}
</script>

<style lang="scss" scoped>
.worksArea {
  margin-bottom: size(10, vw);
  @media #{mediaUp(phone)} {
    margin-bottom: size(10, px);
  }
}

.worksTop {
  text-align: center;
}

.commingsoon {
  font-size: size(3, vw);

  @media #{mediaUp(phone)} {
    font-size: size(3, px);
  }
}
</style>
