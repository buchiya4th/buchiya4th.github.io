<template lang="pug">
.profileItem
  .profileImage: img(:src="profileImage" :alt="userName")
  .profileName {{ userName }}
  ul.profileSiteList
    li(v-for="item in profileSites")
      a(
        :href="item.url"
        target="_blank"
        )
        img(
          :src="item.icon"
          :alt="item.name"
          :class="{'is-round': item.round}"
          )
</template>

<script>
import USER from '/const/user'

export default {
  computed: {
    userName() {
      return USER.name
    },
    profileImage: () => '/img/icon/icon-profile.svg',
    profileSites() {
      return [
        {
          name: 'Qiita',
          url: 'https://qiita.com/buchiya4th',
          icon: '/img/icon/icon-qiita.svg',
          round: false,
        },
        {
          name: 'GitHub',
          url: 'https://github.com/buchiya4th',
          icon: '/img/icon/icon-github.svg',
          round: true,
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/buchiya4th',
          icon: '/img/icon/icon-twitter.svg',
          round: true,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
$profileImageSizePx: 200px;
$profileImageSizeVw: size(20, vw);

.profileImage {
  position: relative;
  width: calc(#{$profileImageSizePx} * 1.5);
  margin-right: auto;
  margin-left: auto;
  padding: 25px;
  text-align: center;

  @media #{mediaLess(phone-large)} {
    width: calc(#{$profileImageSizeVw} * 1.5);
  }

  &::before {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    width: calc(#{$profileImageSizePx} * 1.5);
    height: calc(#{$profileImageSizePx} * 1.5);
    border-radius: 50%;
    background-color: #fff;
    content: "";

    @media #{mediaLess(phone-large)} {
      width: calc(#{$profileImageSizeVw} * 1.5);
      height: calc(#{$profileImageSizeVw} * 1.5);
    }

    .page-about & {
      display: none;
    }
  }

  img {
    position: relative;
    z-index: 2000;
    width: $profileImageSizePx;

    @media #{mediaLess(phone-large)} {
      width: $profileImageSizeVw;
    }
  }
}

.profileName {
  font-family: $fontKeyword;
  font-weight: bold;
  color: #fff;
  text-align: center;

  @media #{mediaUp(phone-large)} {
    font-size: 64px;
  }

  .page-about & {
    display: none;
  }
}

.profileSiteList {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;

  li {
    display: inline-block;
    margin-right: 0.5em;
    margin-left: 0.5em;
  }

  img {
    width: 36px;
    padding: 1px;
    background-color: #fff;

    &.is-round {
      border-radius: 50%;
    }
  }
}
</style>
