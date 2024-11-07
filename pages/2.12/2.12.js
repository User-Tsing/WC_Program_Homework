// pages/2.12/2.12.js
var rand,sum;
function createRand(){
    rand=[];
    sum=0;
    var i,r;
    for(i=0;i<6;i++){
        r=(Math.random()*100).toFixed(2)*1;
        rand.push(r);
        sum=sum+rand[i];
        console.log(rand[i]);
    }
    sum=sum.toFixed(2);
    console.log(sum);
}
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
    onLoad:function(){
        createRand();
        this.setData({
            sum:sum,
            rand:rand
        })
    },
    newRand:function(){
        createRand();
        this.setData({
            sum:sum,
            rand:rand
        })
    }
})