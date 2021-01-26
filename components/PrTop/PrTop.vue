<template lang="pug">
.prTop
  .prPoint
    ul.prPointList
      li(v-for="item in prPoints")
        h2.prPointHead {{ item.head }}
        .prPointBody(v-html="item.body")
    .skillIcon
      ul.skillIconList
        li(v-for="item in skillIconList")
          img(
            :src="item.img"
            :alt="item.name"
            )
    .nextPageArrow
      nuxt-link(to="/about/") About
</template>

<script>
export default {
  data() {
    return {
      prPoints: [
        {
          head: '技術に貪欲',
          body:
            '学ぶことを楽しみ技術・知識を深めることを生きがいとしています。<br>取り掛かっているモノを深めることは勿論、周辺の事柄にも関心を持ち広い領域を理解していく姿勢を持っています。',
        },
        {
          head: '対話にポジティブ',
          body:
            'コミュニケーションが与えるアウトプットの影響を理解しています。<br>ディレクションやマネジメントを通じて人や組織の改革を起こすことの難しさややりがいを実感しています。<br>「まずは自ら発信」を心がけています。',
        },
        {
          head: 'ユーザー思考',
          body:
            'アウトプットはユーザーとコミュニケーションを取る媒体です。ユーザーの良いパートナーとして、さらにはユーザー自身の手足となるような体験を与えることが理想と捉えています。<br>常に「ユーザーはどうしたいのか？」を考える姿勢を持つよう心がけています。',
        },
      ],
      skillIconList: [
        {
          name: 'HTML5',
          img: '/img/icon/icon-html.svg',
        },
        {
          name: 'CSS3',
          img: '/img/icon/icon-css.svg',
        },
        {
          name: 'JavaScript',
          img: '/img/icon/icon-js.svg',
        },
        {
          name: 'Vue.js',
          img: '/img/icon/icon-vuejs.svg',
        },
        {
          name: 'Sass',
          img: '/img/icon/icon-sass.svg',
        },
        {
          name: 'WordPress',
          img: '/img/icon/icon-wordpress.svg',
        },
        {
          name: 'VSCode',
          img: '/img/icon/icon-vscode.svg',
        },
        {
          name: 'Git',
          img: '/img/icon/icon-git.svg',
        },
        {
          name: 'Photoshop',
          img: '/img/icon/icon-photoshop.svg',
        },
        {
          name: 'Illustrator',
          img: '/img/icon/icon-illustrator.svg',
        },
        {
          name: 'Adobe XD',
          img: '/img/icon/icon-xd.svg',
        },
        {
          name: 'Slack',
          img: '/img/icon/icon-slack.svg',
        },
        {
          name: 'chatwork',
          img: '/img/icon/icon-chatwork.svg',
          // },
          // {
          //   name: 'Confluence',
          //   img: '/img/icon/icon-confluence.svg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
$prPointListWidth: 700;

.prPointList {
  margin: size(4, px) 0;
  padding: 0;
  list-style: none;

  @media #{mediaUp($prPointListWidth)} {
    display: flex;
    justify-content: space-between;
  }

  li {
    @media #{mediaLess($prPointListWidth)} {
      &:not(:first-child) {
        margin-top: size(4, px);
      }
    }

    @media #{mediaUp($prPointListWidth)} {
      width: 30%;
    }
  }
}

.prPointHead {
  margin: 0 0 0.5em;
  text-align: center;
}

.prPointBody {
  margin: 0.5em 0;
}

.skillIconList {
  margin: size(2, px) -#{size(2, px)} size(2, px) 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin: size(1, px) size(2, px) size(1, px) 0;
    line-height: 1;
    vertical-align: bottom;

    &:last-child {
      &::after {
        margin-left: size(1, px);
        vertical-align: bottom;
        content: "etc.";
      }
    }
  }

  img {
    width: auto;
    height: 48px;

    @media #{mediaLess(phone)} {
      height: size(4, vw);
    }
  }
}

.nextPageArrow {
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
