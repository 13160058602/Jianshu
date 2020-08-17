import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem, QRCodeWrapper, QRCodeInfo } from '../style';
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => {
                        return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    })
                }

                <QRCodeWrapper>
                    <img className="pic" alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"/>
                    <QRCodeInfo>
                        <h3 className="title">下载简书手机App</h3>
                        <p className="description">随时随地发现和创造内容</p>
                    </QRCodeInfo>
                </QRCodeWrapper>
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})

export default connect(mapState, null)(Recommend);