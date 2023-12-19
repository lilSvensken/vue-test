import { defineStore } from 'pinia'

export const PostsStore = defineStore('post-store', {
  // храним переменные, которые изменяются
  state: () => ({
    posts: [],
    isLoading: false,
    error: null
  }),

  // для функций
  actions: {
    async fetchPosts () {
      this.isLoading = true

      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
      })
        .then(res => res.json())
        .then(res => {
          this.isLoading = false
          this.posts = res
        })
        .catch(err => {
          this.error = err
        })
    },
    clearPosts () {
      this.posts = []
    }
  },

  // для функций, возвращающих вычисляемые данные
  getters: {
    getFirstPost: (state) => {
      return state.posts[0]
    }
  }
})
