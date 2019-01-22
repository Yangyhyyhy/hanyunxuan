// pages/product/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    detailslist:[
      { id: 1, img_url: "http://img3.imgtn.bdimg.com/it/u=2084478463,2400455016&fm=214&gp=0.jpg", title1: "《『世人皆怀念盛唐，我独爱...》", title2: "￥110" },
      { id: 2, img_url: "http://img1.imgtn.bdimg.com/it/u=373951392,1972035049&fm=26&gp=0.jpg", title1: "《少年的誓言》", title2: "￥310" },
      { id: 3, img_url: "https://imgsa.baidu.com/forum/w%3D580/sign=f6fb2c523fa85edffa8cfe2b795509d8/69df124c510fd9f99de0106b2e2dd42a2934a4e0.jpg", title1: "遇见秋", title2: "￥200" },
      { id: 4, img_url: "https://imgsa.baidu.com/forum/w%3D580/sign=502bc00b75310a55c424defc87444387/537fc4bf6c81800abec5d3f6bd3533fa838b47c9.jpg", title1: "《何况旧欢新恨阻心期。空满...》", title2: "￥180" },
      { id: 5, img_url: "https://imgsa.baidu.com/forum/w%3D580/sign=27e4b8e26c59252da3171d0c049a032c/0001c7fc1e178a82471c2558fa03738da877e8ca.jpg", title1: "蝶恋花", title2: "￥160" },
      { id: 6, img_url: "https://imgsa.baidu.com/forum/w%3D580/sign=a1888c32a351f3dec3b2b96ca4eff0ec/f02904f3d7ca7bcb36d883d7b2096b63f724a84a.jpg", title1: "闺", title2: "￥150" }
      ],
      img_url:"",
      price:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(options)
    this.setData({
      id: options.id      
    });
    
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
        //获取点击id
    let data = { id: this.data.id };
    //console.log(data.id)

    //拿出图片路径
    let img_url = { img_url: this.data.detailslist[data.id-1].img_url }; 
    //console.log(img_url)
    //赋新值
    this.setData({
      img_url: img_url.img_url,
    });
     //拿出价格
    let price = { price: this.data.detailslist[data.id - 1].title2 };
    //console.log(price)
    this.setData({
      price: price.price,
    });
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