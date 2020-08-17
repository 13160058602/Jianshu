import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import { Header, ContentWrapper, ArticleContent, ImagePackage } from '../style';

class Content extends Component {

    render() {
        const { contentList } = this.props;
        return (
            <ContentWrapper>
                <style global jsx>{`
                    body {
                        background-color: #f9f9f9;
                    }
                `}</style>
                <Header>{ contentList.title }</Header>
                <ImagePackage>
                    <img className="pic" alt="" src={ contentList.imgUrl }/>
                </ImagePackage>
                <ArticleContent dangerouslySetInnerHTML={{__html: contentList.content}} />
            </ContentWrapper>
        )
    }

    componentDidMount() {
        this.props.getContent();
    }
}

const mapState = (state) => ({
    contentList: state.getIn(['detail', 'contentList'])
});

const mapDispatch = (dispatch) => ({
    getContent() {
        dispatch(actionCreator.getContent());
    }
});

export default connect(mapState, mapDispatch)(Content);