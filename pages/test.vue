<template>
  <div>
    <h1 class="mt_30">这是测试页面</h1>
    <nuxt-link to="/">首页</nuxt-link>
    <div class="img-box" style="background: red">
      1k图标<img src="~/assets/img/selected-depot.png" />
    </div>
    <div class="img-box">2k图标<img src="~/assets/img/tf-logo.png" /></div>
    <!--引用 static 目录下的图片，在dist根目录的相应路径/image生成guide_icon.png图片文件-->
    <div class="img-box">static 1k图标<img src="/image/guide_icon.png" /></div>
    <!--~/ 自动转化为base64，照样在dist根目录的相应路径/image生成guide_icon2.png图片文件-->
    <div class="img-box">
      static 2 1k图标<img src="~/static/image/guide_icon2.png" />
    </div>
    <el-divider></el-divider>
    <el-button @click="$store.commit('increment')"
      >index {{ $store.state.count }}</el-button
    >
    <el-button @click="$store.commit('cloud/increment')"
      >cloud {{ $store.state.cloud.cloud }}</el-button
    >
    <el-button @click="$store.commit('commodity/increment')"
      >commodity {{ $store.state.commodity.commodity }}</el-button
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Test',
  middleware: 'test',
  fetch({ store, params }) {
    // store.commit('increment')
  },
  asyncData(context) {
    console.log('context', context)
    // return { project: 'nuxt' }
    return new Promise((resolve, reject) => {
      context.app.myInjectFunction('test') // 插件，注入context
      context.app.$combinedInjectFunction('asyncData test2') // 插件，同时注入context和Vue实例
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
  computed: {
    ...mapState(['count']),
  },
  created() {
    const { name, project, count } = this
    console.log('name', name)
    console.log('project', project)
    console.log('count', count)
    this.$myInjectedFunction('test') // 插件
    this.$combinedInjectFunction('created test2') // 插件，同时注入context和Vue实例
    console.log('this.$config', this.$config)
    console.log('this.$config.publicValue', this.$config.publicValue)
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
}
</script>
