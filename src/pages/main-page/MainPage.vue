<template>
  <div>
    <h2>
      Первый пост:
      {{ postsStore.getFirstPost }}
    </h2>
    <button @click="fetchPost">Получить посты</button>
    <button @click="onClear">Очистить</button>
  </div>
</template>
<script>
import { PostsStore } from '@/stores/posts.store'

export default {
  name: 'MainPage',
  setup () {
    const postsStore = PostsStore()
    return { postsStore }
  },
  methods: {
    fetchPost () {
      this.postsStore.fetchPosts()
    },
    onClear () {
      this.postsStore.clearPosts()
    }
  }
}
</script>
