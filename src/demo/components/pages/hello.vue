<template>
    <div>Welcome,<span class="name">{{userName}}</span>!</div>
</template>

<script>
import { mapState } from 'vuex'
// import helloStoreModule from 'stores/hello'
export default {
  asyncData ({ store, route }) {
    return store.dispatch('hello/fetchUser')
  },
  data () {
    return {
      name: 'Hello World'
    }
  },
  computed: {
    ...mapState({
      name: state => state.hello.name
    })
  }
}
</script>

<style lang="postcss" scoped>
.name{
  color:#ff6666;
  font-size:18px;
}
</style>
