//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    welcome_msg: 'METAR和TAF解码',
    decode_metar: '解码METAR',
    decode_taf: '解码TAF',
    about: '关于本程序',
    userInfo: {},
  },
  //事件处理函数
  gotoMetarDecodePage: function() {
    wx.navigateTo({
      url: '../metar/metar'
    })
  },
  gotoTafDecodePage: function() {
    wx.navigateTo({
      url: '../taf/taf'
    })
  },
  gotoAboutPage: function () {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

