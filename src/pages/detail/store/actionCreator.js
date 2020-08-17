import axios from 'axios';
import * as constants from './constants';

const changeContent = (result) => ({
    type: constants.CHANGE_CONTENT_DATA,
    contentList: result.contentList
});

const changeOtherContent = (result) => ({
    type: constants.CHANGE_OTHER_CONTENT,
    otherContentList: result.otherContentList
});

const changeRecommendContent = (result) => ({
    type: constants.CHANGE_RECOMMEND_CONTENT,
    recommendContentList: result.recommendContentList
});

export const getContent = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            const result = res.data.data;
            dispatch(changeContent(result));
            dispatch(changeOtherContent(result));
            dispatch(changeRecommendContent(result));
        })
    }
};

export const SpinShow = (notSpin) => ({
    type: constants.CHANGE_CONTENT_SPIN,
    notSpin
});
