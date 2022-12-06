import styled, { css } from 'styled-components';

function CommonBtn({ style, color, text }) {
    return (
        <>
            <Buttonn style={{ style }} color={color}>
                {text}
            </Buttonn>
        </>
    );
}

const Buttonn = styled.button`
    padding: 16px 24px;
    border-radius: 5px;
    border: 0;
    background-color: transparent;
    border: 1px solid red;
    cursor: pointer;
    transition: 0.2s;

    ${({ theme, color }) =>
        color === 'blue' &&
        css`
            color: #fff;
            border-color: ${theme.colors.blue};
            background-color: ${theme.colors.blue};

            &:hover {
                color: ${theme.colors.blue};
                background-color: #fff;
                box-shadow: 1px 2px 6px 0px hsl(231deg 69% 60% / 20%);
            }
        `}

    ${({ theme, color }) =>
        color === 'white' &&
        css`
            color: ${theme.colors.navy};
            border-color: ${theme.colors.snowWhite};
            background-color: ${theme.colors.snowWhite};
            box-shadow: 1px 2px 6px 0px hsl(231deg 69% 60% / 20%);

            &:hover {
                border-color: ${theme.colors.navy};
                background-color: #fff;
            }
        `}


    ${({ theme, color }) =>
        color === 'red' &&
        css`
            color: #fff;
            border-color: ${theme.colors.red};
            background-color: ${theme.colors.red};
            box-shadow: 1px 2px 6px 0px hsl(0deg 0% 36%/ 45%);

            &:hover {
                color: ${theme.colors.red};
                background-color: #fff;
            }
        `}

        & + & {
        margin-left: 16px;
    }
`;

export default CommonBtn;
