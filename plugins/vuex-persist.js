import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    key: 'bps',
    storage: window.sessionStorage,
    // modules: ['index', 'commodity'],
    // paths: ['count'],
    reducer: (state) => ({
      token: state.token,
      // count: state.count,
      // commodity: state.commodity,
    }),
  }).plugin(store)
  // new VuexPersistence({
  //   key: 'bpl',
  //   storage: window.localStorage,
  //   reducer: (state) => ({
  //     count: state.count,
  //     cloud: state.cloud,
  //   }),
  // }).plugin(store)
}
