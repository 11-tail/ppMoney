
export default {
    //仓库名字
    namespace: 'brandnews',
    //仓库
    state: {
        news: [{
            img: "http://www.ppmoneygroup.com//upload/images/img20190427190102.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10678",
            newsTit: "PPmoney胡新：合规备案进程加快 头部平台积极提升综合实力",
            thing: "4月27日，PPmoney网贷2019年全新升级的高管私享会系列活动在北京举行。针对用关注的平台合规备案进程... ",
            datas: "2019-04-27 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190427184556.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10677",
            newsTit: "PPmoney高管私享会在京举办 多举措提升平台透明度",
            thing: "为了加深与用户的沟通交流，让用户进一步了解平台合规备案最新动向，4月27日，PPmoney网贷2019年全新...  ",
            datas: "2019-04-27 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190425182257.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10676",
            newsTit: "PPmoney斩获金融科技领导力奖 创新能力获认可",
            thing: "4月25日，由中国管理科学学会金融科技研究院主办的第九届中国金融科技峰会在上海举行。PPmoney万惠集...  ",
            datas: "2019-04-25  "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190425150206.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10675",
            newsTit: "PPmoney陈宝国出席天河区九届人大七次会议",
            thing: "4月25日，广州市天河区第九届人大七次会议在天河区政府召开，天河区人大常委会相关部门领导出席会议，...  ",
            datas: "2019-04-25 "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190423100022.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10674",
            newsTit: "注重深度服务用户  PPmoney启动2019年高管私享会",
            thing: "据业内人士透露，为了进一步增强平台的合规透明度、与用户共享发展成果，PPmoney网贷将于4月27日启动...  ",
            datas: "2019-04-23  "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190422155352.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10673",
            newsTit: "PPmoney实缴注册资本增至5亿 全国仅13家跨过5亿实缴门槛",
            thing: "4月19日，PPmoney网贷在官方网站发布公告称，平台运营主体万惠投资管理有限公司实缴资本增至5亿元，并...  ",
            datas: "2019-04-22  "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190422152533.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10672",
            newsTit: "PPmoney荣获“人力资源管理杰出奖” 持续提升金融科技硬实力",
            thing: "前程无忧在北京举办“2019人力资源管理杰出奖”颁奖典礼。凭借在人才激励与建设、人力资源优化管理等... ",
            datas: "2019-04-22  "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190419154257.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10671",
            newsTit: "最新！ PPmoney网贷宣布完成实缴注册资本5亿元",
            thing: "4月19日，PPmoney网贷对外发布公告称，为积极拥抱监管、顺应行业发展趋势，平台母公司PPmoney万惠集团...  ",
            datas: "2019-04-19  "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190418173534.jpg",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10670",
            newsTit: "服务用户超4300万 PPmoney社会责任报告彰显普惠担当",
            thing: "企业不仅是创造利润的社会因子，同时也是承担并履行社会责任的重要载体。继发布一季报后，4月18日，P... ",
            datas: "2019-04-18  "
        },{
            img: "http://www.ppmoneygroup.com//upload/images/img20190416115611.png",
            url:"https://www.ppmoney.com/Newsletter/NewDetail?id=10668",
            newsTit: "PPmoney加强用户信用建设 打造平台优质资产端",
            thing: "近日，PPmoney万惠集团宣布正式接入百行征信，实现信用数据共享。有业内人士表示，当前，包括PPmoney...  ",
            datas: "2019-04-16 "
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