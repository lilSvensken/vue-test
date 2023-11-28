<template>
  <ul>
    <li
      v-for="user in users"
      :key="user.id"
    >
      <User
        :userName="user.name"
        :age="user.age"
        @remove="removeItem($event, user.id)"
      />
    </li>
  </ul>
</template>

<script>
import User from "@/components/User.vue";

const ARR_DATA = [
  {
    id: 1,
    name: "Jon",
    age: 18
  },
  {
    id: 2,
    name: "Masha",
    age: 20
  },
  {
    id: 3,
    name: "Any",
    age: 35
  }
]

export default {
  name: "UsersList",
  components: { User },
  data() {
    return {
      users: ARR_DATA
    }
  },
  methods: {
    removeItem(ev, id) {
      this.users = this.users.filter(item => item.id !== id);
    }
  }
};
</script>
