import styled from 'styled-components';
// import { imagePath } from '../../resource/css/theme';
import CommonBtn from '../common/CommonBtn';
import TextBox from '../common/TextBox';

function TopArea() {
    const textContents = {
        title: 'A Simple Bookmark Manager',
        desc: 'A clean and simple interface to organize your favourite website. Open a nre browser tab and see your sites load instantly, Try if for free.',
    };

    const { title, desc } = textContents;

    return (
        <TopAreaContainer>
            <div className="items">
                <TextBox fontSize={'44px'} title={title} desc={desc} />
                <div className="btn-wrap">
                    <CommonBtn color={'blue'} text={'Get it on Chrome'} />
                    <CommonBtn color={'white'} text={'Get it on Forefox'} />
                </div>
            </div>
            <div className="items">
                <img src="images/illustration-hero.svg" alt="" />
            </div>
            {/* <ImageBox className="items" /> */}
        </TopAreaContainer>
    );
}

const TopAreaContainer = styled.div`
    ${({ theme }) => theme.mixin.layourFrame};
    display: flex;
    align-items: center;
    margin: 114px 0 90px;

    .items {
        width: 100%;
        flex: 1;

        img {
            width: 100%;
        }
    }

    .btn-wrap {
        margin-top: 36px;
    }
`;

// const ImageBox = styled.div`
//     width: 400px;
//     height: 200px;
//     background: ${`url('${imagePath}/illustration-hero.svg')`} no-repeat center;
//     background-size: contain;
// `;
export default TopArea;
