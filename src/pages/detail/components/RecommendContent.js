import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actionCreator';
import { RecommendContentWrapper, BigTitle, RecommendContentList, RecommendContentTitle, ReadedInfo, RecommendContentWrapperSpin } from '../style';

class RecommendContent extends Component {
    render() {
        let { recommendContentList, showSpin } = this.props;
        return (
            <div>
            { showSpin ?
            <RecommendContentWrapper>
                <BigTitle>
                    <h6>推荐阅读</h6>
                </BigTitle>
                {
                    recommendContentList.map((item) => {
                        return (
                            <RecommendContentList key={item.id}>
                                <RecommendContentTitle>
                                    {item.reContentTitle}
                                </RecommendContentTitle>
                                <ReadedInfo>{item.readedInfo}</ReadedInfo>
                            </RecommendContentList>
                        )
                    })
                }
            </RecommendContentWrapper>
            :
            <RecommendContentWrapperSpin>
                <BigTitle>
                    <h6>推荐阅读</h6>
                </BigTitle>
                {
                    recommendContentList.map((item) => {
                        return (
                            <RecommendContentList key={item.id}>
                                <RecommendContentTitle>
                                    {item.reContentTitle}
                                </RecommendContentTitle>
                                <ReadedInfo>{item.readedInfo}</ReadedInfo>
                            </RecommendContentList>
                        )
                    })
                }
            </RecommendContentWrapperSpin>
            }
            </div>
        )
    }

    componentDidMount() {
        this.props.getRecommendContent();
        this.bindEvent();
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeSpin);
    }
}

const mapstate = (state) => ({
    recommendContentList: state.getIn(['detail', 'recommendContentList']),
    showSpin: state.getIn(['detail', 'showSpin'])
});

const mapDispatch = (dispatch) => ({
    getRecommendContent() {
        dispatch(actionCreator.getContent());
    },
    changeSpin() {
        if (document.documentElement.scrollTop > 340) {
            dispatch(actionCreator.SpinShow(false));
        }else {
            dispatch(actionCreator.SpinShow(true));
        }
    }
});

export default connect(mapstate, mapDispatch)(RecommendContent);