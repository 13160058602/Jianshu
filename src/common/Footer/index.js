import React, { Component } from 'react';
import { FooterWrapper, TopWrapper, BottomWrapper } from './style';

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <TopWrapper>
                    关于简书 · 联系我们 · 加入我们 · 简书出版 · 品牌与徽标 · 帮助中心 · 合作伙伴
                </TopWrapper>
                <BottomWrapper>
                    ©2012-2020 / 简书 /
                </BottomWrapper>
            </FooterWrapper>
        )
    }
}

export default Footer;