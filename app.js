const config = require("config.js");
const cloudenv_id = 'book-platform-5g48crvv5397094a'

App({
      openid: '',
      userinfo:'',
      canReflect:true,
      onLaunch: function() {
            if (!wx.cloud) {
                  console.error('请使用 2.2.3 或以上的基础库以使用云能力')
            } else {
                  wx.cloud.init({
                       env: JSON.parse(config.data).env,
                        traceUser: true,
                  })
            }
           this.systeminfo=wx.getSystemInfoSync();

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.cloud.init({
      env: cloudenv_id,
      traceUser: true,
    });

    this.globalData.db = wx.cloud.database({
      env: cloudenv_id
    })

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  

      },
      globalData: {
        userInfo: {
          nickName: null
        },
        db: null
      }
})