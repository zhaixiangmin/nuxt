console.log('api/apiClient.js')

/**
 * api路径调整
 * @param urlData {string | object} 请求路径
 * eg.
 * '/org/getOrg/path'
 * 或者
 * {
 *  url: '/org/getOrg/{api}/{api}',
 *  join: [1, 2]
 * }
 * @returns {*}
 */
const apiChange = (urlData) => {
  if (typeof urlData === 'string') {
    return urlData
  }
  const url = urlData.url // 请求路径字符串(带有占位符{api})
  const join = urlData.join // 参数数组
  if (url && join) {
    return url
      .split('{api}')
      .map((val, index) =>
        join[index] === 0 || join[index] ? `${val}${join[index]}` : val
      )
      .join('')
  }
  return urlData.url
}

let request
export function setClient(newClient) {
  request = newClient
  // Create a custom axios instance
  // request = client.create({
  //   headers: {
  //     common: {
  //       Accept: 'text/plain, */*',
  //     },
  //   },
  // })
}

export default {
  publicGet(urlData, params) {
    return request({
      url: apiChange(urlData),
      method: 'get',
      params,
    })
  },
  publicPost(urlData, data, params) {
    return request({
      url: apiChange(urlData),
      method: 'post',
      data,
      params,
    })
  },
  publicPut(urlData, data, params) {
    return request({
      url: apiChange(urlData),
      method: 'put',
      data,
      params,
    })
  },
  publicDelete(urlData, params, data) {
    return request({
      url: apiChange(urlData),
      method: 'delete',
      params,
      data,
    })
  },
}
