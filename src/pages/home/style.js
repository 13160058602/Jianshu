import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const BackTop = styled.div`
    position: fixed;
    width: 60px;
    height: 60px;
    right: 100px;
    bottom: 100px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc; 
    font-size: 14px;
    cursor: pointer;
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
        text-decoration: none;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
        margin-bottom: 8px;
    }
    .textLink {
        text-decoration: none;
    }
    .textLink:hover {
        text-decoration: underline;
    }
`;

export const ListMeta = styled.div`
    width: 458px;
    height: 20px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .iconfont {
        font-size: 12px;
    }
    .diamond {
        margin-right: 20px;
        color: #ea6f5a;
    }
    .nickname {
        margin-right: 10px;
        color: #b4b4b4;
    }
    .comment {
        margin-right: 10px;
        color: #b4b4b4;
        height: 14px;
    }
    .like {
        mergin-right: 10px;
        color: #b4b4b4;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const QRCodeWrapper = styled.div`
    width: 234px;
    height: 60px;
    margin-bottom: 30px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    padding: 10px 22px;
    .pic {
        width: 60px;
        height: 60px;
        float: left;
    }
`;

export const QRCodeInfo = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    width: 143px;
    line-height: 43px;
    .title {
        font-size: 15px;
        color: #333333;
        width: 143px;
        height: 21px;
    }
    .description {
        font-size: 13px;
        color: #999999;
        margin-top: 4px;
        width: 143px;
        height: 18px;
        
    }
`;

export const WritterWraper = styled.div`
    width: 278px;
    height: 326px;
    border-radius: 3px;
    font-size: 14px;
    color: #969696;
    .title {
        width: 56px;
        height: 16px;
    }
`;

export const PagesSwitch = styled.div`
    float: right;
`;

export const WritterItem = styled.div`
    margin-top: 15px;
    width: 280px;
    height: 47px;
    .pic {
        position: absolute;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        border: 1px solid #f0f0f0;
        border-radius: 50%;
    }
`;

export const WritterItemName = styled.div`
    padding-top: 5px;
    width: 280px;   
    font-size: 14px;
    line-height: 20px;
    display: block;
    color: #2f2f2f;
    text-align: center;
`;

export const WritterItemFollow = styled.div`
    padding: 0;
    float: right;
    width: 60px;
    margin-top: 5px;
    font-size: 13px;
    color: #42c02e;
`;

export const WritterIntroduction = styled.div`
    font-size: 12px;
    color: #969696;
    margin: 2px 0 10px 0;
    width: 200px;
    line-height: 20px;
    text-align: -webkit-right;
`;

export const WritterMore = styled.div`
    position: absolute;
    padding: 7px 7px 7px 12px;
    margin-top: 20px;
    width: 259px;
    height: 19px;
    font-size: 13px;
    text-align: -webkit-center;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
`;