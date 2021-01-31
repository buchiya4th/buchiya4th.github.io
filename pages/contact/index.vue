<template lang="pug">
main.main
  h1.ttl-a {{ title }}
  .container.phase-input(v-if="phase === 'input'")
    form.contactForm(
      method="post"
      action="https://docs.google.com/forms/d/e/1FAIpQLSf0Cg8lceZgg-j6oSCF9sibJ87Pv5DGAF-rq-YoUP4THVJTCA/formResponse"
      )
      table.contactTable
        tbody
          tr
            th メールアドレス
            td
              input#email(
                type="email"
                name="entry.1467862625"
                placeholder="example@mail.co.jp"
                v-model="form.email"
                @blur="checkForm"
                )
              .form-error
                p.form-errorText(v-if="errors.email.required.error") {{ errors.email.required.text }}
                p.form-errorText(v-if="errors.email.errorType.error && !errors.email.required.error") {{ errors.email.errorType.text }}
          tr
            th お名前
            td
              input#name(
                type="text"
                name="entry.287255957"
                v-model="form.name"
                @blur="checkForm"
                )
              .form-error
                p.form-errorText(v-if="errors.name.required.error") {{ errors.name.required.text }}
          tr
            th お問い合わせ内容
            td
              textarea#content(
                name="entry.964008100"
                v-model="form.content"
                @blur="checkForm"
                )
              .form-error
                p.form-errorText(v-if="errors.content.required.error") {{ errors.content.required.text }}
    .actionArea.btnGroup
      button.btn(
        :class="{'is-disable': !inputValidate}"
        type="button"
        name="confirm"
        @click="goConfirm"
        ) 確認
  .container.phase-confirm(v-if="phase === 'confirm'")
    table.contactTable
      tr
        th メールアドレス
        td {{ form.email }}
      tr
        th お名前
        td {{ form.name }}
      tr
        th お問い合わせ内容
        td {{ form.content }}
    .actionArea.btnGroup
      button.btn.btn-secondary(
        type="button"
        name="back"
        @click="goInput"
        ) 戻る
      button.btn(
        type="submit"
        name="submit"
        @click="sendContact"
        ) 送信
  .container.phase-complete(v-if="phase === 'complete'")
    .conpleteBody
      p
        | お問い合わせありがとうございました。
        br
        | 内容を確認後、返信いたします。
        br
        | しばらくお待ちください。
      p.note ※ 内容によっては返信しかねる場合があります。ご了承ください。
</template>

<script>
import { defineComponent, useMeta, ref } from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  setup() {
    const { title, meta, bodyAttrs } = useMeta({
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'お問い合わせはこのページからお願いします。',
        },
      ],
      bodyAttrs: {
        class: 'page-contact',
      },
    })

    const phase = ref('input')
    const goConfirm = () => {
      phase.value = 'confirm'
      if (process.browser) {
        window.scrollTo(0, 0)
      }
    }
    const goInput = () => {
      phase.value = 'input'
    }

    const form = ref({
      email: '',
      name: '',
      content: '',
    })
    const
    errors = ref({
      email: {
        success: false,
        required: {
          error: false,
          text: 'メールアドレスを入力してください。',
        },
        errorType: {
          error: false,
          text: '正しいメールアドレスを入力してください。',
        },
      },
      name: {
        success: false,
        required: {
          error: false,
          text: 'お名前を入力してください。',
        },
      },
      content: {
        success: false,
        required: {
          error: false,
          text: 'お問い合わせ内容を入力してください。',
        },
      },
    })

    const inputValidate = ref(false)
    const checkForm = (e) => {
      const id = e.target.id
      const value = e.target._value
      if (!value) {
        errors.value[id].required.error = true
        errors.value[id].success = false
      } else {
        errors.value[id].required.error = false
        if (id === 'email') {
          checkEmailType(id)
        } else {
          errors.value[id].success = true
        }
      }
      const checkItems = [
        errors.value.email.success,
        errors.value.name.success,
        errors.value.content.success,
      ]
      inputValidate.value = checkItems.every((value) => value === true)
      e.preventDefault()
    }
    const checkEmailType = (id) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      const emailType = re.test(form.value.email)
      if (!emailType) {
        errors.value[id].errorType.error = true
        errors.value[id].success = false
      } else {
        errors.value[id].errorType.error = false
        errors.value[id].success = true
      }
    }

    const sendContact = () => {
      const url =
        'https://docs.google.com/forms/d/e/1FAIpQLSf0Cg8lceZgg-j6oSCF9sibJ87Pv5DGAF-rq-YoUP4THVJTCA/formResponse'
      let data = new URLSearchParams()
      data.append('entry.1467862625', form.value.email)
      data.append('entry.287255957', form.value.name)
      data.append('entry.964008100', form.value.content)

      axios({
        method: 'post',
        url: url,
        data: data,
        responseType: 'document',
      })
        .then((res) => {
          console.log('OK', res)
        })
        .catch((error) => {
          console.log('error', error)
        })

      phase.value = 'complete'
      if (process.browser) {
        window.scrollTo(0, 0)
      }
    }

    return {
      title,
      meta,
      bodyAttrs,
      phase,
      goConfirm,
      goInput,
      inputValidate,
      form,
      errors,
      checkForm,
      checkEmailType,
      sendContact,
    }
  },
  head: {},
})
</script>

<style lang="scss" scoped>
$formConfirmTdColor: $GRAY_FA;
$formErrorColor: $RED_c11;
$formDisableColor: $GRAY_80;

.contactTable {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  th,
  td {
    padding: size(1, px);
    vertical-align: top;

    @media #{mediaLess(phone-large)} {
      display: block;
      padding: size(0.5, vw);
    }
  }

  tr:not(:first-child) {
    @media #{mediaLess(phone-large)} {
      th {
        padding-top: size(3, vw);
      }
    }
  }

  th {
    line-height: 2;

    @media #{mediaUp(phone-large)} {
      width: 10em;
      text-align: right;
    }
  }

  td {
    .phase-confirm & {
      background-color: $formConfirmTdColor;
    }
  }

  input,
  textarea {
    width: 100%;
  }

  textarea {
    resize: none;
  }
}

.form-errorText {
  margin: 0.25em 0 0;
  color: $formErrorColor;
}

.actionArea {
  margin: size(5, px) 0;
  text-align: center;

  .btn {
    @media #{mediaLess(phone-large)} {
      width: 100%;
    }

    & + .btn {
      @media #{mediaLess(phone-large)} {
        margin-top: 1em;
      }

      @media #{mediaUp(phone-large)} {
        margin-left: 1em;
      }
    }

    &.is-disable {
      border-color: $formDisableColor;
      color: $formDisableColor;
      pointer-events: none;
    }
  }
}
</style>
