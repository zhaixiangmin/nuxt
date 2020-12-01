export default ({ app }, inject) => {
  inject('combinedInjectFunction', (string) => {
    console.log('combinedInjectFunction', string)
  })
}
