// http://wiki.dev.daokoudai.net/pages/viewpage.action?pageId=17596597
import qs from 'qs'
const userMap = {
  // 成功
  test1: {
    "resCode": "0000",
    "resMsg": "成功",
  },
  // 失败
  test2: {
    resCode: "9999",
    resMsg: "失败",
    type: 'core',
  },
}

export default {
  getByUsername: config => {
    let data = userMap['test1'] // 默认返回数据

    // // 处理返回数据
    // // 获取请求参数
    // let {params} = qs.parse(config.body)
    // params = JSON.parse(params) // 获取请求参数
    // // 处理请求参数示例
    // let reqData = JSON.parse(data.params.reqData)
    // reqData.redirectUrl = params.redirectUrl
    // data.params.reqData = JSON.stringify(reqData)

    return data
  },
}