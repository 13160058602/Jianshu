import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import { actionCreators } from './store';
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {

    handleScrollTop() {
        window.scroll(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' alt="推荐" src="https://upload.jianshu.io/admin_banners/web_images/4984/79ff791e7ddb523246801d656818282e66d40d98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writter />
                </HomeRight>
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvent();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true));
        }else {
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapState, mapDispatch)(Home);