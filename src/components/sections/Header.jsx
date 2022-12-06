import styled from 'styled-components';
import CommonBtn from '../common/CommonBtn';

function Header() {
    const menu = ['FEATURES', 'DOWNLOAD', 'Q&A'];
    const style = {
        padding: '14px 32px',
        fontSize: '190px',
    };

    return (
        <HeaderWrap>
            <HeaderContainer>
                <img src="images/logo-bookmark.svg" alt="" />
                <Gnb>
                    <Nav>
                        {menu.map((menu, index) => (
                            <a href={`#${menu}`} key={index}>
                                {menu}
                            </a>
                        ))}
                        <CommonBtn style={style} color={'red'} text={'LOGIN'} />
                    </Nav>
                </Gnb>
            </HeaderContainer>
        </HeaderWrap>
    );
}

const HeaderWrap = styled.div``;

const HeaderContainer = styled.div`
    ${({ theme }) => theme.mixin.layourFrame};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 48px;
`;
const Logo = styled.div`
    width: 150px;
    height: 30px;
    background: url(images/logo-bookmark.svg);
`;
const Gnb = styled.div``;
const Nav = styled.nav`
    a {
        margin: 0 20px;
        font-size: 14px;
        background-color: transparent;
        transition: 0.2s;

        &:hover {
            color: ${({ theme }) => theme.colors.red};
        }
    }

    /* button {
        margin-left: 30px;
        padding: 14px 32px;
        font-size: 14px;
    } */
`;

export default Header;
