// pages/2.10/2.10.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    data:{
        flag:true,
        name:'',
        chinese_score:'',
        math_score:'',
        avrage:''
      },
      nameInput:function(e){
        this.setData({
          name:e.detail.value
        })
      },
      chineseInput:function(e){
        this.setData({
          chinese_score:e.detail.value
        })
      },
      mathInput:function(e){
        this.setData({
          math_score:e.detail.value
        })
      },
      calc:function(e){
        if(this.data.name==''||this.data.chinese_score==''||this.data.math_score=='')
        {return;}
        else{
          var a=(this.data.chinese_score*1+this.data.math_score*1)/2;
          this.setData({
            avrage:a,
            flag:false
          });
        }
      }
})