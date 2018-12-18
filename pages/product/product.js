// pages/product/product.js

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    tejialist: [{ id: 1, img_url: "http://img4.imgtn.bdimg.com/it/u=2578147246,3166973596&fm=11&gp=0.jpg", title1: "￥88", title2:"￥188"},
      { id: 2, img_url: "http://img5.imgtn.bdimg.com/it/u=248710135,510254344&fm=26&gp=0.jpg", title1: "￥188", title2: "￥88" },
      { id: 3, img_url: "https://img.alicdn.com/imgextra/i3/1111438066/O1CN01UezXWb29SH946VqTt_!!1111438066.jpg", title1: "￥188", title2: "￥288" },
      { id: 4, img_url: "https://img.alicdn.com/imgextra/i2/1111438066/O1CN01u6MXXi29SH91RHqIP_!!1111438066.jpg", title1: "￥88", title2: "￥188" },
      { id: 5, img_url: "https://img.alicdn.com/imgextra/i1/1111438066/O1CN01mlUCDX29SH93dvwPt_!!1111438066.jpg", title1: "￥288", title2: "￥388" },
      { id: 6, img_url: "https://img.alicdn.com/imgextra/i1/3448729113/O1CN012HBnnpU3LWQRSsu_!!3448729113.jpg", title1: "￥88", title2: "￥188" },
      { id: 7, img_url: "https://img.alicdn.com/imgextra/i3/1111438066/O1CN01UezXWb29SH946VqTt_!!1111438066.jpg", title1: "￥88", title2: "￥188" },
      { id: 8, img_url: "https://img.alicdn.com/imgextra/i2/2698574130/O1CN011gNaDGojMWAngg0_!!2698574130.jpg", title1: "￥88", title2: "￥188" },
    ],
    navitems: [
      { id: 1, img_url: "../img/icon/icon1.png", title: "汉元素" },
      { id: 2, img_url: "../img/icon/icon2.png", title: "交领襦裙" },
      { id: 3, img_url: "../img/icon/icon3.png", title: "对襟襦裙" },
      { id: 4, img_url: "../img/icon/icon4.png", title: "褙子" },
      { id: 5, img_url: "../img/icon/icon5.png", title: "齐胸" },
      { id: 6, img_url: "../img/icon/icon1.png", title: "长衫" },
      { id: 7, img_url: "../img/icon/icon6.png", title: "配饰周边" },
      { id: 8, img_url: "../img/icon/icon7.png", title: "更多" }
    ],
    list: [
      { id: 1, img_url: "https://pic.hanfugou.com/pc/2017/5/9/22/1c7c0a1302df4621884dbf2d3aa554d7.jpg_2000.jpg" },
      { id: 2, img_url: "https://pic.hanfugou.com/pc/2017/5/9/22/8c2cfc1eb87748ecb5659acb8d83446a.JPG_2000.jpg" },
      { id: 3, img_url: "https://pic.hanfugou.com/pc/2017/5/9/20/f200c58a2b1a4ef995b566a4421dfa09.jpg_2000.jpg" },
      { id: 4, img_url: "https://pic.hanfugou.com/pc/2017/5/9/21/bfcc10e1b5cf4d2f89a04b87a5d09a0a.jpg_2000.jpg" }
    ],
    remenlist: [
      { id: 1, img_url: "http://img3.imgtn.bdimg.com/it/u=2084478463,2400455016&fm=214&gp=0.jpg", title1: "《『世人皆怀念盛唐，我独爱...》", title2: "￥110" },
      { id: 2, img_url: "http://img1.imgtn.bdimg.com/it/u=373951392,1972035049&fm=26&gp=0.jpg", title1: "《少年的誓言》", title2: "￥310" },
      { id: 3, img_url: "https://imgsa.baidu.com/forum/w%3D580/sign=f6fb2c523fa85edffa8cfe2b795509d8/69df124c510fd9f99de0106b2e2dd42a2934a4e0.jpg", title1: "遇见秋", title2: "￥200" },
      { id: 4, img_url: "https://imgsa.baidu.com/forum/w%3D580/sign=502bc00b75310a55c424defc87444387/537fc4bf6c81800abec5d3f6bd3533fa838b47c9.jpg", title1: "《何况旧欢新恨阻心期。空满...》", title2: "￥180" },
      { id: 5, img_url: "https://imgsa.baidu.com/forum/w%3D580/sign=27e4b8e26c59252da3171d0c049a032c/0001c7fc1e178a82471c2558fa03738da877e8ca.jpg", title1: "蝶恋花", title2: "￥160" },
      { id: 6, img_url: "https://imgsa.baidu.com/forum/w%3D580/sign=a1888c32a351f3dec3b2b96ca4eff0ec/f02904f3d7ca7bcb36d883d7b2096b63f724a84a.jpg", title1: "闺", title2: "￥150" }

    ]
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