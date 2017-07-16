var metarUtil = require("../../utils/metar.js");
var util = require('../../utils/util.js')

var app = getApp();

Page({
  data:{
    prompt: '请输入METAR报文',
    decode_metar: '解码METAR',
    metar_raw: '',
    decodedMetarAvailable: false,
    metar_nodes: {
      airport: '',
      hour: 0,
      min: 0,
      day: 10,
      wind: {},
      visibility: 9999,
      clouds: [],
      temperature: 0,
      dewPoint: 0,
      qnh: 1017,
      rvr: [],
      forecast: ''
    },
    result: '解码结果'
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  metarInput: function(e) {
    // var str = (e.detail.value).toUpperCase();
    this.setData({
      metar_raw: (e.detail.value).toUpperCase()
    })
  },
  decodeMetar: function() {
    var that = this;

    var parseDecodedMetar = function(metar_decoded) {
      // TODO:
      // (1) Change UTC time to local time
      // (2) Display the airport name rather than the ICAO code
    }

    that.setData({
      metar_nodes: metarUtil.parseMetar(this.data.metar_raw),
      decodedMetarAvailable: true
    })
  }
})