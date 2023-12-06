<template>
  <h1>NewsPage</h1>

  <div v-if="$route.params.id === '1'">
    Новость 1
  </div>
  <div v-else-if="$route.params.id === '2'">
    Новость 2
  </div>
  <router-link to="/">
    Перейти на главную
  </router-link>
  <button @click="toMainPage">
    Перейти на главную
  </button>
</template>

<script>
export default {
  name: 'NewsPage',
  created () {
    console.log(this.$route.params)
  },

  methods: {
    toMainPage () {
      // // перейти на страницу '/'
      // this.$router.push('/')

      this.$router.push({
        name: 'main'
      })

      // // на сколько станиц назад нужно вернуться
      // this.$router.go(-1)
      //
      // // то же что и push, но без сохранения пути
      // this.$router.replace('/')
    }
  }
}
</script>
