import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account' + account +'&password=' + password).then((res) => {
            const accountInDB = res.data.data.account;
            const passwordInDB = res.data.data.password;
            if (accountInDB === account && passwordInDB === password ) {
                dispatch(changeLogin())
            }else {
                alert('登陆失败')
            }
        })
    }
}