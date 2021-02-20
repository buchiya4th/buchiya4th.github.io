<template lang="pug">
main.main
  the-hero-header-top
  .prTopArea
    .container
      PrTop
      ReadMoreLink(
        :to="'/about/'"
        :text="'About'"
      )
  .worksArea
    .container
      h2.ttl-a Works
      .worksTop
        WorkList
        ReadMoreLink(
          :to="'/works/'"
          :text="'Works'"
        )
  footer-content-contact
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TheHeroHeaderTop from '@/components/services/index/TheHeroHeaderTop.vue'
import PrTop from '@/components/services/index/PrTop.vue'
import WorkList from '@/components/services/works/list'
import ReadMoreLink from '@/components/molecules/ReadMoreLink'
import FooterContentContact from '@/components/organisms/FooterContentContact.vue'

export default defineComponent({
  components: {
    TheHeroHeaderTop,
    PrTop,
    WorkList,
    ReadMoreLink,
    FooterContentContact,
  },
})
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
