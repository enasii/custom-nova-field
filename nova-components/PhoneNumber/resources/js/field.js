Nova.booting((Vue, router, store) => {
  Vue.component('index-phone-number', require('./components/IndexField'))
  Vue.component('detail-phone-number', require('./components/DetailField'))
  Vue.component('form-phone-number', require('./components/FormField'))
})
