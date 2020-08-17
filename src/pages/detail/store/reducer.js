import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    contentList: [],
    otherContentList: [],
    recommendContentList: [],
    showSpin: true
});

export default (state = defaultState, action)  => {
    switch(action.type) {
        case constants.CHANGE_CONTENT_DATA:
            return state.set('contentList', action.contentList);
        case constants.CHANGE_OTHER_CONTENT:
            return state.set('otherContentList', action.otherContentList);
        case constants.CHANGE_RECOMMEND_CONTENT:
            return state.set('recommendContentList', action.recommendContentList);
        case constants.CHANGE_CONTENT_SPIN:
            return state.set('showSpin', action.notSpin);
        default:
            return state;
    }
}