// import React from 'react';
import './Report.less'
import { Component } from 'react';
import { connect } from 'dva';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }
class Report extends Component {
    constructor(props) {
        // 继承于父组件的props
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div className="Prevent">
                {
                    this.props.brandnews.news.map((item, index) => {
                        return <div className="Prevent mar" key={index}>
                            <div className="Prevent">
                                <div className="item-img" style={{
                                    display: 'inline-block',
                                    background: 'url(' + item.img + ')no-repeat',
                                    backgroundSize: "contain"
                                }}></div>
                                <div className="right-side">
                                    <a href="https://www.ppmoney.com/Newsletter/NewDetail?id=10678">
                                        <h4>{item.newsTit}</h4>
                                        <p>{item.thing}</p>
                                        <p className="color-999">{item.datas}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    })
                }
                {/* 分页功能 */}
                <div className="paging">
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                </div>
            </div>
        )
    }
}


export default connect((state) => {
    return state
})(Report)
