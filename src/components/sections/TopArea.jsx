import styled, { css } from 'styled-components';
import CommonBtn from '../common/CommonBtn';
import TextBox from '../common/TextBox';

function TopArea() {
    const textContents = {
        title: 'A Simple Bookmark Manager',
        desc: 'A clean and simple interface to organize your favourite website. Open a nre browser tab and see your sites load instantly, Try if for free.',
    };

    const { title, desc } = textContents;

    return (
        <TopAreaWrap>
            <TopAreaContainer>
                <div>
                    <TextBox fontSize={'44px'} title={title} desc={desc} />
                    <div>
                        <CommonBtn color={'blue'} text={'Get it on Chrome'} />
                        <CommonBtn color={'white'} text={'Get it on Forefox'} />
                    </div>
                </div>
                <ImageBox />
            </TopAreaContainer>
        </TopAreaWrap>
    );
}

const TopAreaWrap = styled.div``;
const TopAreaContainer = styled.div`
    ${({ theme }) => theme.mixin.layourFrame};
    display: flex;
`;

const ImageBox = styled.div``;
export default TopArea;
