
export default {
    //仓库名字
    namespace: 'Borrower',
    //仓库
    state: {
        TabBar: [{
            name: "王*",
            idcard: "证件号码：3*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：8100元",
        },{
            name: "李*加",
            idcard: "证件号码：4*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：2500元",
        },{
            name: "孙*",
            idcard: "证件号码：6*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：1600元",
        },{
            name: "窦*枫",
            idcard: "证件号码：3*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：12000元",
        },{
            name: "赵*",
            idcard: "证件号码：8*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：10100元",
        },{
            name: "沈*鸿",
            idcard: "证件号码：2*********",
            consumption: "用途：消费分期",
            periods: "期限：12个月",
            money: "借款金额：9700元",
        }]
    },
    //reducers跟dispatch 里面的type
    reducers: {
        editAuthor(state, action) {
            //把旧的仓库值放进去，并且把新的仓库值也放进取
            return { ...state, ...action.payload };
        },
        
    },

};