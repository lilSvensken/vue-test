<template>
  <div class="container">
    <router-link to="/">Главная</router-link>
    <router-link to="/news/1">Новость 1</router-link>
    <router-link to="/news/2">Новость 2</router-link>
    <router-link to="/any">Еще страница</router-link>
    <router-link to="/any">Еще страница</router-link>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
