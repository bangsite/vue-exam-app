import Vue from 'vue';
// vee validate
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { email } from 'vee-validate/dist/rules'
// eslint-disable-next-line camelcase

extend('email', {
  ...email,
  message: 'メールアドレスを正しく入力してください'
})

extend('requiredRadio', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true,
  message: '※{_field_}を選択してください。'
})

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true,
  message: '※{_field_}を入力してください。'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)