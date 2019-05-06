

export default {
    //仓库名字
    namespace: 'videonews',
    //仓库
    state: {
        video: [{
            img: "https://m-static.ppmoney.com/Content/Images/Upload/2019/20190305/77a090be-ec66-48b4-9220-6037e7cd1a79.jpg",
            url:"https://special.ppmoney.com/totoro/release/static/20162369.html",
            videoTit: "张丰毅带你了解PPmoney网贷",
            thing: "灵机系统、蜂巢系统、银行存管……纯小白也能看懂的PPmoney平台说明书！",
            datas: "2019-03-05 "
        },{
            img: "https://m-static.ppmoney.com/Content/Images/Upload/2019/20190305/23b510cc-f611-40eb-9f98-d7110486f769.jpg",
            url:"https://special.ppmoney.com/totoro/release/static/20162261.html",
            videoTit: "《我们这6年》PPmoney万惠集团6周年宣传片",
            thing: "这六年，是迎难而上，砥砺前行的六年，也是脚踏实地，践行普惠金融之路的六年。",
            datas: "2018-12-12 "
        },{
            img: "https://m-static.ppmoney.com/Content/Images/Upload/2019/20190305/dda891d7-6698-4924-b48c-8ca63b5e0075.jpg",
            url:"https://special.ppmoney.com/totoro/release/static/20162376.html",
            videoTit: "2019年集团拜年视频",
            thing: "董事长陈宝国、CEO胡新代表PPmoney万惠集团给大家送去新春祝福",
            datas: "2019-02-03"
        },{
            img: "https://m-static.ppmoney.com/Content/Images/Upload/2019/20190305/4403f25e-8833-4914-b863-2f072e01b12e.jpg",
            url:"https://special.ppmoney.com/totoro/release/static/20162397.html",
            videoTit: "践行普惠金融之路·高管系列专访",
            thing: "董事长陈宝国、CEO胡新等集团数位高管讲述平台风控、运营、合规多方面的发展现状。",
            datas: "2018-08-30"
        },{
            img: "https://special.ppmoney.com/totoro/release/static/20162002.html",
            url:"https://m-static.ppmoney.com/Content/Images/Upload/2019/20190305/3d52bdfe-c36c-42df-b887-ddd07ab06a2a.jpg",
            videoTit: "P粉故事教师篇",
            thing: "在PPmoney3500万用户中，教师是重要的组成部分。他们用心教书，也理性投资，是PPmoney优秀用户群像的代表之一。",
            datas: "2018-09-10"
        }]
    },
    //reducers跟dispatch 里面的type
    reducers: {
        video(state, action) {
            //把旧的仓库值放进去，并且把新的仓库值也放进取
            return { ...state, ...action.payload };
        },
        
    },

};