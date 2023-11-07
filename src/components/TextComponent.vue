<template>
  <div>
    <input ref="myInput" @keydown.enter="onKeydown" @input="changeInputValue"/>

    <div>count: {{ count }}</div>
    <!--    <div>result: {{ count + 10 }}</div>-->
    <div>result: {{ getResult }}</div>

    <a :href="href" @click.prevent="onClickLink">Ссылка на Гугл</a>

    <div class="container" @click="onClickContainer($event, '3')"></div>

    <!--    <button v-if="isActiveBtn">Отправить</button>-->
    <!--    <button v-show="isActiveBtn">Отправить - 2</button>-->
    <button class="btn" :class="{'hide': !isActiveBtn}">Отправить</button>


    <ul>
      <li
        v-for="(userItem, index) in users"
        :key="userItem.id">
        {{ index + 1 }}: {{ userItem.name }}
      </li>
    </ul>
  </div>
</template>

<script>
const ARR_DATA = [
  {
    id: 1,
    name: "Jon"
  },
  {
    id: 2,
    name: "Masha"
  },
  {
    id: 3,
    name: "Any"
  }
]


export default {
  name: 'TestComponent',
  data() {
    return {
      count: 0,
      href: 'https://google.com',
      isActiveBtn: false,
      users: ARR_DATA
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.count ++;
    // }, 1000)

    // setTimeout(() => {
    //   this.isActiveBtn = true
    // }, 2000)

    console.log(this.$refs.myInput);
  },
  methods: {
    onClickContainer(event, str) {
      console.log(event, str)
      this.count++;
    },
    onClickLink(event) {
      // не нужно прописывать, потому что есть @click.prevent
      // event.preventDefault();
      console.log('click')
    },
    onKeydown(event) {
      console.log(event.key)
    },

    changeInputValue(event) {
      const value = event.target.value;

      // this.isActiveBtn = Boolean(value);
      this.isActiveBtn = !!value;
    }
  },

  computed: {
    getResult() {
      return this.count + 10
    }
  }
}
</script>

<style scoped>
.container {
  width: 400px;
  height: 400px;
  background-color: white;
}

.btn {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.btn.hide {
  opacity: 0;
}
</style>
