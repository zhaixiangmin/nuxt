export default ({ app }, inject) => {
  app.myInjectFunction = (string) => {
    console.log('Okay, another function', string)
  }
}
