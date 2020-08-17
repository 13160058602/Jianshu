import styled from 'styled-components';

export const DetailWrapper = styled.div`
    display: flex;
    box-sizing: content-box;
    width: 1000px;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 16px auto 16px;
    margin: 0 auto;
    font-size: 16px;
`; 

export const ContentWrapper = styled.div`
    width: 730px;
    padding: 24px;
    border-radius: 4px;
    margin-bottom: 10px;
    display: block;
    box-sizing: border-box;
    background-color: #ffffff;
`;

export const DetailRight = styled.div`
    flex-shrunk: 0;
    width: 260px;
    display: block;
    box-sizing: border-box;
`;

export const Header = styled.h1`
    font-size: 30px;
    color: #404040;
    font-weight: 700;
    line-height: 1.8;
    margin-bottom: 20px;
    width: 100%;
`;

export const ImagePackage = styled.div`
    width: 100%;
    padding-bottom: 25px;
    text-align: center;
`;

export const ArticleContent = styled.div`
    margin-bottom: 20px;
    word-break: break-word;
    p {
        display: block;
        margin-bottom: 20px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        line-height: 1.8;
    }
`;

export const OtherContentWrapper = styled.div`
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 228px;
    background-color: #ffffff;
    border: 1px solid #f0f0f0;
`;

export const OtherContentList = styled.div`
    margin-top: 16px;
    font-size: 16px;
    color: #404040;
`;

export const ContentTitle = styled.div`
    font-size: 14px;
    line-height: 22px;
    color: #2d2d2d;
    margin-bottom: 4px;
`;

export const ReadedNumber = styled.div`
    font-size: 12px;
    color: #969696;
    line-height: 17px;
`;

export const WritterWrapper = styled.div`
    align-items: center;
    width: 228px;
    height: 45px;
    .pic {
        position: absolute;
        vertical-align: middle;
        display: block;
        border-radius: 50%;
        border: 1px solid #eee;
        width: 43px;
        height: 43px;
    }
`;

export const WritterInfo = styled.div`
    display: flex;
    float: right;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
    overflow: hidden;
    width: 175px;
    min-height: 45px;
    margin-left: 8px;
`;

export const WritterName = styled.div`
    align-items: center;
    margin-bottom: 4px;
    font-size: 14px;
    line-height: 1.42;
    color: #404040;
`;

export const WritterContent = styled.div`
    color: #969696;
    font-size: 12px;
    line-height: 1.42;
`;

export const Button = styled.div`
    padding: 2px 12px;
    font-size: 12px;
    color: #ec7259;
    background-color: #fff;
    float: right;
    border-radius: 50px;
    border: 1px solid #ec7259;
`;

export const SplitLine = styled.div`
    width: 100%;
    height: 1px;
    margin: 16px 0;
    background-color: #eee;
`;

export const RecommendContentWrapper = styled.div`
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 228px;
    background-color: #ffffff;
    border: 1px solid #f0f0f0;
    font-size: 16px;
    color: #404040;
`;

export const RecommendContentWrapperSpin = styled.div`
    position: fixed;
    top: 0;
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 228px;
    background-color: #ffffff;
    border: 1px solid #f0f0f0;
    font-size: 16px;
    color: #404040;
`;

export const BigTitle = styled.div`
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-weight: 500;
    line-height: 20px;
    border-left: 4px solid #ec7259;
    font-size: 16px;
    padding-left: 6px;
    height: 18px;
`;

export const RecommendContentList = styled.div`
    margin-bottom: 12px;
    line-height: 1.42;
`;

export const RecommendContentTitle = styled.div`
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 4px;
`;

export const ReadedInfo = styled.div`
    font-size: 12px;
    color: #969696;
`;