import React, { Component } from 'react';
import Content from './components/Content';
import OtherContent from './components/OtherContent';
import RecommendContent from './components/RecommendContent';
import { DetailWrapper, DetailRight } from './style';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Content/>
                <DetailRight>
                    <OtherContent/>
                    <RecommendContent/>
                </DetailRight>
            </DetailWrapper>
        )
    }
}

export default Detail;