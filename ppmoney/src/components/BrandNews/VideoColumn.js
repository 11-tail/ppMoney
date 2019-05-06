// import React from 'react';
import './VideoColumn.less'
import { Component } from 'react';
import { connect } from 'dva';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';



function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }
  
class VideoColumn extends Component {
    constructor(props) {
        // 继承于父组件的props
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>

                {
                    this.props.videonews.video.map((item, index) => {
                        return <div className="video-list" key={index}>
                            <a className="video-li" href={item.url}>
                                <img alt="" src={item.img} />
                                <div>
                                    <p>{item.videoTit}</p>
                                    <p>{item.thing}</p>
                                    <p>{item.datas}</p>
                                </div>
                            </a>
                        </div>
                    })
                }
                <div className="paging">
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                </div>
            </div>
        )
    }
}


export default connect((state) => {
    return state
})(VideoColumn)
