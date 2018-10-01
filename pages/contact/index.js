import axios from 'axios'

export default {
  data() {
    return {
      title: 'Contact',
      metaDescription: 'Contactページの説明文',
      bodyClass: `page-contact`,
      phase: 'input',
      inputValidate: false,
      form: {
        email: '',
        name: '',
        content: ''
      },
      errors: {
        email: {
          success: false,
          required: {
            error: false,
            text: 'メールアドレスを入力してください。'
          },
          errorType: {
            error: false,
            text: '正しいメールアドレスを入力してください。'
          }
        },
        name: {
          success: false,
          required: {
            error: false,
            text: 'お名前を入力してください。'
          }
        },
        content: {
          success: false,
          required: {
            error: false,
            text: 'お問い合わせ内容を入力してください。'
          }
        }
      }
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.metaDescription
        }
      ],
      bodyAttrs: {
        class: this.bodyClass
      }
    }
  },
  methods: {
    goConfirm: function() {
      this.phase = 'confirm'
      this.$SmoothScroll(0, 1)
    },
    goInput: function() {
      this.phase = 'input'
    },
    checkForm: function(e) {
      console.log(e)
      let id = e.target.id
      let value = e.target._value
      if (value === null || value === '') {
        this.errors[id].required.error = true
        this.errors[id].success = false
      } else {
        this.errors[id].required.error = false
        if (id === 'email') {
          this.checkEmailType(id)
        } else {
          this.errors[id].success = true
        }
      }

      let checkArray = [
        this.errors.email.success,
        this.errors.name.success,
        this.errors.content.success
      ]
      this.inputValidate = checkArray.every(this.isSuccessInput)

      e.preventDefault()
    },
    checkEmailType: function(id) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let emailType = re.test(this.form.email)
      if (emailType === false) {
        this.errors[id].errorType.error = true
        this.errors[id].success = false
      } else {
        this.errors[id].errorType.error = false
        this.errors[id].success = true
      }
    },
    isSuccessInput: function(currentValue) {
      return currentValue === true
    },
    sendContact: function() {
      const url =
        'https://docs.google.com/forms/d/e/1FAIpQLSf0Cg8lceZgg-j6oSCF9sibJ87Pv5DGAF-rq-YoUP4THVJTCA/formResponse'
      let data = new URLSearchParams()
      data.append('entry.1467862625', this.form.email)
      data.append('entry.287255957', this.form.name)
      data.append('entry.964008100', this.form.content)

      axios({
        method: 'post',
        url: url,
        data: data,
        responseType: 'document'
      })
        .then(res => {
          console.log('OK', res)
        })
        .catch(error => {
          console.log('error', error)
        })

      this.phase = 'complete'
      this.$SmoothScroll(0, 1)
    }
  }
}
