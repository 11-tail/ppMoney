import React from 'react';
// import { connect } from 'dva';
import lendcss from './LendPage.css';
import LendRight from '../../components/LendPage/LendRight'
export default class LendPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            border1:true,
            border2:false,
            border3:false,
            aaa:false,
            bbb:true
        }
    }
    //样式
    onButtonClock1(e){
        e.preventDefault();
        this.setState({border1:this.state.bbb});
        this.setState({border2:this.state.aaa});
        this.setState({border3:this.state.aaa});
        console.log(11)
    }
    onButtonClock2(e){
        e.preventDefault();
        this.setState({border1:this.state.aaa});
        this.setState({border2:this.state.bbb});
        this.setState({border3:this.state.aaa});
        console.log(22)
    }
    onButtonClock3(e){
        e.preventDefault();
        this.setState({border1:this.state.aaa});
        this.setState({border2:this.state.aaa});
        this.setState({border3:this.state.bbb});
        console.log(33)
    }
    render() {
        return (
            <div>
                <div>
            <div className={lendcss.bb}>1</div>
            {/* lend的main部分 */}
            <div>
                {/* main的nav */}
                <div className={lendcss.mainNav}>
                    <div className={lendcss.Lendcontainer}>
                        <ul>
                            <li>您所在的位置:</li>
                            <li><a href="" >首页</a> > </li>
                            <li><a href="" >我要出借</a> > </li>
                            <li>自助投服务</li>
                        </ul>
                    </div>
                </div>
                {/* main主要内容 */}
                <div className={lendcss.mainContent}>
                    <div className={lendcss.Lendcontainer}>
                        {/* 左 */}
                        <div className={lendcss.LendConLeft}>
                            <ul className={lendcss.Lendlist}>
                                <li style={{backgroundColor:this.state.border1?"#028eed":''}}>
                                    <a href="" onClick={this.onButtonClock1.bind(this)}>
                                        <h2 className={lendcss.listTitle} style={{color:this.state.border1?"#fff":''}}>安心投服务<span className={lendcss.TitleSpan}>推荐</span></h2>
                                        <div className={lendcss.tip}>自动到期，安心出借</div>
                                    </a>
                                </li>
                                <li  style={{backgroundColor:this.state.border2?"#028eed":''}}>
                                    <a href=""  onClick={this.onButtonClock2.bind(this)}>
                                        <h2 className={lendcss.listTitle}  style={{color:this.state.border2?"#fff":''}}>自助投服务</h2>
                                        <div className={lendcss.tip}>让出借更轻松</div>
                                    </a>
                                </li>
                                <li style={{backgroundColor:this.state.border3?"#028eed":''}}>
                                    <a href=""  onClick={this.onButtonClock3.bind(this)}>
                                        <h2 className={lendcss.listTitle}  style={{color:this.state.border3?"#fff":''}}>散标专区</h2>
                                        <div className={lendcss.tip}>直接选择一键出借</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* 右 */}
                        <div className={lendcss.LendConRight}>
                            <LendRight />
                            {/* <LendRight3 /> */}
                        </div>
                    </div>
                </div>
            </div>



            <div className={lendcss.bb}>5</div>
        </div>
            </div>
        )
    }
}
// function LendPage() {
    
//     return (
//         <div>
//             <div className={lendcss.bb}>1</div>
//             {/* lend的main部分 */}
//             <div>
//                 {/* main的nav */}
//                 <div className={lendcss.mainNav}>
//                     <div className={lendcss.Lendcontainer}>
//                         <ul>
//                             <li>您所在的位置:</li>
//                             <li><a href="" >首页</a> > </li>
//                             <li><a href="" >我要出借</a> > </li>
//                             <li>自助投服务</li>
//                         </ul>
//                     </div>
//                 </div>
//                 {/* main主要内容 */}
//                 <div className={lendcss.mainContent}>
//                     <div className={lendcss.Lendcontainer}>
//                         {/* 左 */}
//                         <div className={lendcss.LendConLeft}>
//                             <ul className={lendcss.Lendlist}>
//                                 <li>
//                                     <a href="">
//                                         <h2 className={lendcss.listTitle}>安心投服务<span className={lendcss.TitleSpan}>推荐</span></h2>
//                                         <div className={lendcss.tip}>自动到期，安心出借</div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="">
//                                         <h2 className={lendcss.listTitle}>自助投服务</h2>
//                                         <div className={lendcss.tip}>让出借更轻松</div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="">
//                                         <h2 className={lendcss.listTitle}>散标专区</h2>
//                                         <div className={lendcss.tip}>直接选择一键出借</div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         {/* 右 */}
//                         <div className={lendcss.LendConRight}>2</div>
//                     </div>
//                 </div>
//             </div>



//             <div className={lendcss.bb}>5</div>
//         </div>
//     );
// }

// LendPage.propTypes = {
// };

// export default connect()(LendPage);
