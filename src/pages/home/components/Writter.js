import React, { PureComponent } from 'react';
import { WritterWraper, PagesSwitch, WritterItem, WritterItemName, WritterItemFollow, WritterIntroduction, WritterMore } from '../style';
import { connect } from 'react-redux';

class Writter extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <WritterWraper>
                <span className="title">推荐作者</span>
                <PagesSwitch>
                    <span className="iconfont">&#xe851;</span>
                        换一批
                </PagesSwitch>
                {
                    list.map((item) => {
                        return (
                            <WritterItem key={item.get('id')}>
                                <img className="pic" alt="" src={item.get('imgUrl')}/>
                                <WritterItemName>
                                    {item.get('name')}
                                    <WritterItemFollow>
                                    <span className="iconfont">&#xeb8f;</span>
                                        关注
                                    </WritterItemFollow>
                                </WritterItemName>
                                <WritterIntroduction>
                                    {item.get('introduction')}
                                </WritterIntroduction>
                            </WritterItem>
                        )
                    })
                }
                <WritterMore>
                    查看全部
                </WritterMore>
            </WritterWraper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writterList'])
});

export default  connect(mapState)(Writter);