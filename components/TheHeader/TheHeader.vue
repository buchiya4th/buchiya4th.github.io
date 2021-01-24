<template lang="pug">
header.header
  nav.headerNav
    ul.headerList
      li: nuxt-link(to="/") Top
      li: nuxt-link(to="/about/") About
      li: nuxt-link.noLink(to="") Works
      li: nuxt-link(to="/contact/") Contact
</template>

<style lang="scss" scoped>
$colorTextHeaderLinkHover: $BLUE_6CF;

.header {
  display: flex;
  justify-content: flex-end;
  padding: 8px 16px;
  background-color: rgba($colorBgMain, 0.9);
}

.headerList {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: $fontKeyword;

  li {
    display: inline-block;

    & + li {
      margin-left: 1em;
    }
  }

  a {
    color: $colorBase;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: $colorTextHeaderLinkHover;
      opacity: 0.8;
    }

    &.noLink {
      pointer-events: none;
    }
  }
}
</style>
