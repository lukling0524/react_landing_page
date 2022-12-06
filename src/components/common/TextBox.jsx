import styled from 'styled-components';

function TextBox({ fontSize, title, desc }) {
    return (
        <TextWrap>
            <Title style={{ fontSize }}>{title}</Title>
            <Desc>{desc}</Desc>
        </TextWrap>
    );
}

const TextWrap = styled.div``;
const Title = styled.p`
    color: ${({ theme }) => theme.colors.navy};
    font-weight: bold;
`;
const Desc = styled.p`
    color: ${({ theme }) => theme.colors.gray};
`;

export default TextBox;
