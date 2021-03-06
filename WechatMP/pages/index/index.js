//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  getRequestData: function (res) {
    console.log(res);
    this.setData({
      stories: res.data.objects
    });
  },

  onLoad: function () {
    let page = this;
    const request = {
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/`,
      method: 'GET',
      header: { 'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
      success: page.getRequestData
    }
    wx.request(request);
  },

  showStory(event) {
    let data = event.currentTarget.dataset;
    let id = data.id;
  }
})

