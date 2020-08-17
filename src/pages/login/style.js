import styled from 'styled-components';

export const LoginWrapper = styled.div`
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`;

export const Logo = styled.div`
    position: absolute;
    top: 56px;
    margin-left: 50px;
    .img {
        width: 100px;
        vertical-align: middle;
    }
`;

export const LoginBox = styled.div`
    position: relative;
    top: 40px;
    width: 300px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,0.1);
    vertical-align: middle;
    display: inline-block;
    .question {
        position: relative;
        float: right;
        margin: 15px 0;
        font-size: 14px;
        color: #999999;
    }
`;

export const FormMain = styled.div`
    margin: 0 0 20px;
    .accountWrapper {
        position: relative;
        width: 100%;
    }
    .account {
        position: absolute;
        top: 14px;
        left: 10px;
        font-size: 18px;
        color: #969696;
    }
    .passwordWrapper {
        position: relative;
        width: 100%;
    }
    .password {
        position: absolute;
        top: 14px;
        left: 10px;
        font-size: 18px;
        color: #969696;
    }
`;

export const Title = styled.div`
    width: 280px;
    height: 19px;
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    font-size: 18px;
    line-height: 1.1;
    vertical-align: middle;
    display: inline-block;
    .point {
        padding: 10px;
        font-weight: 700;
    }
`;

export const LoginTitle = styled.div`
    width: 36px;
    height: 20px;
    vertical-align: middle;
    font-weight: 700;
    color: #ea6f5a;
    padding: 10px;
    border-bottom: 2px solid #ea6f5a;
    display: inline-block;
`;

export const RegisterTitle = styled.div`
    width: 36px;
    height: 20px;
    vertical-align: middle;
    font-weight: 400;
    color: #969696;
    padding: 10px;
    display: inline-block;
`;

export const AccountBox = styled.input`
    border-radius: 4px 4px 0 0;
    width: 251px;
    height: 41px;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    border-bottom: none;
    outline: none;
`;

export const PasswordBox = styled.input`
    border-radius: 0 0 4px 4px;
    width: 251px;
    height: 41px;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    outline: none;
`;

export const RememberBox = styled.div`
    box-sizing: border-box;
    width: 63px;
    height: 24px;
    float: left;
    margin: 15px 0;
    display: inline-block;
    .input {
        margin: 4px 0 0;
        line-height: normal;
    }
    .span {
        margin-left: 5px;
        font-size: 15px;
        color: #969696;
        vertical-align: middle;
    }
`;

export const LoginButton = styled.button`
    box-sizing: border-box;
    background: #3194d0;
    margin-top: 20px;
    width: 100%;
    border: none;
    padding: 9px 18px;
    font-size: 18px;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
`;

export const MoreSign = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 73px;
`;

export const SplitLine = styled.h6`
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
    &::before {
        content: "";
        border-top: 1px solid #b5b5b5;
        position: absolute;
        width: 60px;
        top: 5px;
        left: 30px;
    }
    &::after {
        content: "";
        border-top: 1px solid #b5b5b5;
        position: absolute;
        width: 60px;
        top: 5px;
        right: 30px;
    }
`;

export const OtherWays = styled.ul`
    margin-bottom: 10px;
    list-style: none;
    width: 100%;
    height: 50px;
    .li {
        margin: 0 5px;
        display: inline-block;
        line-height: 20px;
    }
    .div {
        width: 50px;
        height: 50px;
        line-height: 50px;
        display: block;
        cursor: pointer;
    }
    .iconfont {
        font-size: 28px;
    }
    .weibo {
        color: #e05244;
    }
    .weixin {
        color: #00BB2A;
    }
    .qq {
        color: #498ad5;
    }
`;