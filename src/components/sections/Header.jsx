import styled from 'styled-components';
import CommonBtn from '../common/CommonBtn';
import Navigation from '../common/Navigation';

function Header() {
    return (
        <HeaderWrap>
            <img src="images/logo-bookmark.svg" alt="" />
            <Gnb>
                <Navigation />
                <CommonBtn color={'red'} text={'LOGIN'} size={'small'} />
            </Gnb>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.div`
    ${({ theme }) => theme.mixin.layourFrame};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 48px;
`;

const Gnb = styled.div`
    display: flex;
    align-items: center;
`;

export default Header;
