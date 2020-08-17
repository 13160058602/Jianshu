import React, { PureComponent } from 'react';
import { ListItem, ListInfo, ListMeta, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                                <ListItem key={index}>
                                    <Link to='/detail'>
                                        <img alt="" className="pic" src={item.get('imgUrl')} />
                                    </Link>
                                    <ListInfo>
                                        <Link className="textLink" to='/detail'>
                                            <h3 className="title">{item.get('title')}</h3>
                                        </Link>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                    <ListMeta>
                                        <span className="diamond">
                                            <span className="iconfont">&#xe600;</span>
                                            97.9
                                        </span>
                                        <span className="nickname">
                                            简书钻首席小专家
                                        </span>
                                        <span className="comment">
                                            <span className="iconfont">&#xe63d;</span>
                                            48
                                        </span>
                                        <span className="like">
                                        <span className="iconfont commentIcon">&#xe610;</span>
                                            231
                                        </span>
                                    </ListMeta>
                                </ListItem>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page));
    }
});

export default connect(mapState, mapDispatch)(List);