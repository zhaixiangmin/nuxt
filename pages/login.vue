<template>
  <div class="page-container">
    <div class="content">
      <div class="img-box">
        <img src="~/assets/img/login-logo.jpg" />
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="登录名">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" :loading="loading"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/index'
// import { authApi } from '@/api/index'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      loading: false, // 加载状态
      form: {
        userName: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapMutations(['setToken']),
    // onSubmit() {
    //   this.loading = true // 启动加载
    //   this.$axios
    //     .$post(authApi, this.form)
    //     .then((res) => {
    //       console.log('login res', res)
    //       if (res && res.payload) {
    //         this.setToken(res.payload)
    //         this.$router.push('/cloud')
    //       }
    //     })
    //     .finally(() => {
    //       this.loading = false // 关闭加载
    //     })
    // },
    onSubmit() {
      this.loading = true // 启动加载
      login(this.form)
        .then((res) => {
          console.log('login res', res)
          if (res && res.payload) {
            this.setToken(res.payload)
            this.$router.push('/cloud')
          }
        })
        .finally(() => {
          this.loading = false // 关闭加载
        })
    },
  },
}
</script>

<style scoped lang="scss">
.page-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f1f7fc;

  .content {
    position: absolute;
    width: 760px;
    height: 470px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-left: 380px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    .img-box {
      position: absolute;
      left: 0;
      top: 0;
      width: 380px;
      height: 470px;
      overflow: hidden;

      img {
        height: 100%;
      }
    }

    /deep/ .el-form {
      padding: 20px;
    }
  }
}
</style>
