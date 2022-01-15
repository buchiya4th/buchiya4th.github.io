<template lang="pug">
.aboutOutline
  ProfileItem
  .profileOutline
    h2.outlineTitle {{ userName }}
    .outlineBody
      p.outlineDescription {{ outlineDescription }}
      ul.outlineHashList
        li(v-for="item in outlineHashs") {{ item }}
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import USER from '/const/user'
import ProfileItem from '@/components/molecules/ProfileItem.vue'

export default defineComponent({
  components: {
    ProfileItem,
  },
  setup() {
    const userName = computed(() => USER.name)
    const outlineDescription = computed(() => 'とある企業のフロントエンドエンジニア。')
    const outlineHashs = computed(() => ['Frontend-engineer', '育児', '音楽', 'ギター', 'DTM'])

    return {
      userName,
      outlineDescription,
      outlineHashs,
    }
  }
})
</script>

<style lang="scss" scoped>
.aboutOutline {
  @media #{mediaUp(phone-large)} {
    display: flex;
    justify-content: center;
  }
}

.outlineTitle {
  margin: size(3, vw) 0 0;
  font-size: size(4.5, vw);

  @media #{mediaLess(phone-large)} {
    text-align: center;
  }

  @media #{mediaUp(phone-large)} {
    margin: 0;
    font-size: size(4.5, px);
  }
}

.outlineHashList {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin-right: 0.5em;

    &::before {
      content: "#";
    }
  }
}
</style>
