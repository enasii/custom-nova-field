Nova.booting((Vue, router, store) => {
  Vue.component('index-check-box', require('./components/IndexField'))
  Vue.component('detail-check-box', require('./components/DetailField'))
  Vue.component('form-check-box', require('./components/FormField'))
})
