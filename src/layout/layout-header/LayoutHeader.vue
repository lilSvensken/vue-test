<template>
  <div class="container">
    <div id="header-btn"></div>
    <router-link to="/">Главная</router-link>
    <router-link to="/list">Список Постов</router-link>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
}
</script>

<style scoped lang="scss" src="./styles.scss"></style>
