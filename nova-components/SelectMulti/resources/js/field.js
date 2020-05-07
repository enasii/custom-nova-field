Nova.booting((Vue, router, store) => {
  Vue.component('index-select-multi', require('./components/IndexField'))
  Vue.component('detail-select-multi', require('./components/DetailField'))
  Vue.component('form-select-multi', require('./components/FormField'))
})
