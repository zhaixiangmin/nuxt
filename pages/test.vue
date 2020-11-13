<template>
  <div>
    <h1 class="mt_30">这是测试页面</h1>
    <nuxt-link to="/">首页</nuxt-link>
    <div class="img-box" style="background: red">
      1k图标<img src="~/assets/img/selected-depot.png" />
    </div>
    <div class="img-box">2k图标<img src="~/assets/img/tf-logo.png" /></div>
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
    // return { project: 'nuxt' }
    return new Promise((resolve, reject) => {
      resolve({ project: 'nuxt' })
      // setTimeout(() => {
      //   resolve({ project: 'nuxt' })
      // }, 1000)
    })
  },
  data() {
    return {
      name: 'hello',
      title: 'Hello World!',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'miaoshu',
          name: 'miaoshu',
          content: 'wo de miaoshu',
        },
        // {
        //   name: 'description',
        //   content: '',
        // },
      ],
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
