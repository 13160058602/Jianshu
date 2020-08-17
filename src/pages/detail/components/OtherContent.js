import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actionCreator';
import { OtherContentWrapper, OtherContentList, WritterWrapper, SplitLine, WritterInfo, WritterName, Button, WritterContent, ContentTitle, ReadedNumber } from '../style';

class OtherContent extends PureComponent {
    render() {
        const { otherContentList } = this.props;
        return (
            <OtherContentWrapper>
                <WritterWrapper>
                    <img className="pic" alt="" src='https://upload.jianshu.io/users/upload_avatars/11991477/6adb372a-e05f-435f-b97c-fd3bac8df23d?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp'/>
                    <WritterInfo>
                        <WritterName>
                            菊之韵_沉淀
                            <Button>
                                关注
                            </Button>
                        </WritterName>
                        <WritterContent>
                            总资产946 (约87.54元)
                        </WritterContent>
                    </WritterInfo>                
                </WritterWrapper>
                <SplitLine />
                {
                    otherContentList.map((item) => {
                        return (
                            <OtherContentList key={item.id}>
                                <ContentTitle>
                                    {item.contentTitle}
                                </ContentTitle>
                                <ReadedNumber>
                                    {item.readedNumber}
                                </ReadedNumber>
                            </OtherContentList>
                        )
                    })
                }
            </OtherContentWrapper>
        )
    }

    componentDidMount() {
        this.props.getOtherContent();
    }
}

const mapState = (state) => ({
    otherContentList: state.getIn(['detail', 'otherContentList'])
});

const mapDispatch = (dispatch) => ({
    getOtherContent() {
        dispatch(actionCreator.getContent());
    }
});

export default connect(mapState, mapDispatch)(OtherContent);