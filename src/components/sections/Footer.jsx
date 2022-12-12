import styled from 'styled-components';
import Navigation from '../common/Navigation';

function Footer() {
    const social = ['facebook', 'twitter'];

    return (
        <FooterWrap>
            <div className="left">
                <img src="images/logo-bookmark-footer.svg" alt="" />
                <Navigation loc={'footer'} />
            </div>
            <div className="right">
                {social.map((icons, index) => (
                    <button key={index}>
                        <img src={`images/icon-${icons}.svg`} alt={icons} />
                    </button>
                ))}
            </div>
        </FooterWrap>
    );
}

const FooterWrap = styled.footer`
    ${({ theme }) => theme.mixin.layourFrame};
    height: 88px;
    ${({ theme }) => theme.mixin.flexCenter('space-between')};
    background-color: ${({ theme }) => theme.colors.navy};

    .left {
        display: flex;
        align-items: center;

        img {
            margin-right: 40px;
        }
    }

    .right {
        button {
            transition: 0.2s;
            &:hover {
                opacity: 0.5;
            }
            & + button {
                margin-left: 20px;
            }
        }
    }
`;

export default Footer;
