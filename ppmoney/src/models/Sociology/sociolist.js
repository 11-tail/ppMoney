
export default {
    //仓库名字
    namespace: 'sociolist',
    //仓库
    state: {
        SocialNews: [{
            img: "http://www.ppmoneygroup.com//upload/images/img20190418164544.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10669",
            newsTit: "PPmoney万惠集团发布2019年1季度企业社会责任报告",
            thing: "PPmoney万惠集团2019年发布的第一份企业社会责任报告。 ",
            datas: "2019-04-18 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20181227170329.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10603",
            newsTit: "守护山区儿童求学路  PPmoney捐助化州贫困小学",
            thing: "12月中旬，PPmoney万惠集团P心愿公益项目携手广州乐善助学促进会（以下简称“乐助会”）打造“革命老... ",
            datas: "2018-12-27"
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20181211203415.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10587",
            newsTit: "PPmoney万惠集团发布2018企业社会责任报告",
            thing: "PPmoney万惠集团2018年企业社会责任报告，反映了PPmoney万惠集团2018年来在创造股东价值、践行普惠金... ",
            datas: "2018-12-11  "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20181124164437.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10569",
            newsTit: "暖心！及贷开启流浪动物冬季关爱行动",
            thing: "为了帮助流浪动物们更好度过寒冬、得到更多关注，11月24日，及贷在广州举办“温暖光影·及爱计划”《神... ",
            datas: "2018-11-24 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20180730123631.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10433",
            newsTit: "关注外来务工子弟   及贷举办《西虹市首富》公益观影",
            thing: "近期，《西虹市首富》火热上映，好评如潮。7月28日，PPmoney万惠集团及贷“温暖光影·及爱计划”《西虹... ",
            datas: "2018-07-30 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20180723152030.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10417",
            newsTit: "PPmoney发布上半年社会责任报告 将公益善举融入普惠金融",
            thing: "近日，PPmoney万惠集团重磅发布2018年半年度企业社会责任报告，全面而详细盘点集团上半年在技术创新、... ",
            datas: "2018-07-23  "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20180528153422.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10359",
            newsTit: "共享书屋新升级  PPmoney发起全城书友会活动",
            thing: "5月26日，由PPmoney万惠集团主办的“第三季共享书屋之大型书友会”正式拉开序幕，为期两天的活动吸引... ",
            datas: "2018-05-28 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20180504095856.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10346",
            newsTit: "五四最美青年 及贷温暖光影走进养老院",
            thing: "为迎接五四青年节的到来，5月3日及贷“温暖光影·及爱计划”第三期走进广州养老院，以“最美青年义耆传... ",
            datas: "2018-05-04 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20180503104634.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10345",
            newsTit: "PPmoney万惠集团2018年1季度公益报告",
            thing: "公益，是一场没有终点的远行。而金融科技的加持，则让PPmoney万惠集团的公益路变得更加广阔、更加长远... ",
            datas: "2018-05-03 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20180423175144.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10342",
            newsTit: "世界读书日  PPmoney第三季共享书屋展览亮相广州",
            thing: "4月22日，一场“百人共建书屋”的活动在广州火爆拉开序幕。为了迎接第23个“世界读书日”的到来，PPm... ",
            datas: "2018-04-23 "
        }]
    },
    //reducers跟dispatch 里面的type
    reducers: {
        newsList(state, action) {
            //把旧的仓库值放进去，并且把新的仓库值也放进取
            return { ...state, ...action.payload };
        },
        
    },

};