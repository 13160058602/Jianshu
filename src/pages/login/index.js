import React, { PureComponent } from 'react';
import { LoginWrapper, Logo, LoginBox, Title, LoginTitle, RegisterTitle, AccountBox, PasswordBox, RememberBox, LoginButton, 
    MoreSign, SplitLine, FormMain, OtherWays
} from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'; 

class Login extends PureComponent {

    showIcons() {
        const iconList = [];
        const codeList = [
            <span className="iconfont weibo">&#xe601;</span>,
            <span className="iconfont weixin">&#xe63e;</span>,
            <span className="iconfont qq">&#xe644;</span>,
        ];
        for(let i=0; i<3; i++){
            iconList.push(
                <li className="li">
                    <div className="div">
                        {codeList[i]}
                    </div>
                </li>
            )
        }
        return iconList;
    }

    render() {
        const { loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <Link to='/'>
                        <Logo>
                            <img className="img" alt="" src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" />
                        </Logo>
                    </Link>
                    <LoginBox>
                        <Title>
                            <div>
                                <Link to='/login'><LoginTitle>登录</LoginTitle></Link>
                                <b className="point">·</b>
                                <RegisterTitle>注册</RegisterTitle>
                            </div>
                        </Title>
                        <FormMain>
                            <div className="accountWrapper">
                                <AccountBox placeholder="手机号或邮箱" type="text" ref={(input) => {this.account = input}}></AccountBox>
                                <span className="iconfont account">&#xe627;</span>
                            </div>
                            <div  className="passwordWrapper"> 
                                <PasswordBox placeholder="密码" type="password" ref={(input) => {this.password = input}}></PasswordBox>
                                <span className="iconfont password">&#xe602;</span>
                            </div>
                            <RememberBox>
                                <input className="input" type="checkbox" value="true" checked="checked" />
                                <span className="span">记住我</span>
                            </RememberBox>
                            <div className="question">登录遇到问题?</div>
                            <LoginButton onClick={() => this.props.login(this.account, this.password)}>登录</LoginButton>
                        </FormMain>
                        <MoreSign>
                            <SplitLine>社交帐号登录</SplitLine>
                            <OtherWays>
                                {this.showIcons()}
                            </OtherWays>
                        </MoreSign>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/' />
        }
    }
}  

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapdispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
});

export default connect(mapState, mapdispatch)(Login);