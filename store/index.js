export default {
  state: {
    count: 0,
    user: {},
    token: '',
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setToken(state, token) {
      state.token = token
    },
  },
}
