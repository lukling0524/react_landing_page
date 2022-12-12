import styled, { css } from 'styled-components';

function Navigation({ loc }) {
    const menu = ['FEATURES', 'DOWNLOAD', 'Q&A'];
    return (
        <Nav loc={loc}>
            {menu.map((menu, index) => (
                <a href={`#${menu}`} key={index}>
                    {menu}
                </a>
            ))}
        </Nav>
    );
}

const Nav = styled.nav`
    a {
        margin: 0 20px;
        font-size: 14px;
        background-color: transparent;
        transition: 0.2s;

        ${({ loc }) =>
            loc === 'footer' &&
            css`
                color: #fff;
            `}

        &:last-of-type {
            margin-right: 50px;
        }

        &:hover {
            color: ${({ theme }) => theme.colors.red};
        }
    }
`;

export default Navigation;
