export default function (context, callback) {
  console.log('auth 中间件')
  console.log('context', context)
  console.log('process', process)
  // context.userAgent = process.server
  //   ? context.req.headers['user-agent']
  //   : navigator.userAgent
  const { route } = context
  if (route.fullPath === '/') {
  }
  callback()
}
