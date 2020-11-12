<template>
  <div>
    <div class="mt_30">测试页面</div>
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Test',
  middleware: 'test',
  fetch({ store, params }) {
    store.commit('increment')
  },
  asyncData(context) {
    console.log('context', context)
    return { project: 'nuxt' }
  },
  data() {
    return {
      name: 'hello',
    }
  },
  computed: {
    ...mapState(['count']),
  },
  created() {
    const { name, project, count } = this
    console.log('name', name)
    console.log('project', project)
    console.log('count', count)
  },
}
</script>
