export default function (context, callback) {
  console.log('test 中间件')
  callback()
}
