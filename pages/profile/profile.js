// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false  //当前音乐是否正在播放
  },
  onMusicTap: function () {
    //1获取当前音乐状态
    var isp = this.data.isPlayingMusic;
    if (isp) {
      wx.pauseBackgroundAudio();
      this.setData({ isPlayingMusic: false });
    } else {
      // 播放音乐
      wx.playBackgroundAudio({
        dataUrl: "http://oo.oeecc.com/data/2018/10/18/1539827774.mp3",
        title: "...",
      });
      this.setData({ isPlayingMusic: true });
    }


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})