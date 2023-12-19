export default {
  data () {
    return {
      alertText: null
    }
  },

  created () {
    console.log('alertOutput готов к использованию')
  },

  methods: {
    onAlert (componentName) {
      this.alertText = `Вывод алерта: ${componentName}`
      alert(this.alertText)
    },

    alertClear () {
      this.alertText = null
    }
  }
}
