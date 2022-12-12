import { useState } from 'react';
import styled, { css } from 'styled-components';
import CommonBtn from '../common/CommonBtn';
import TextBox from '../common/TextBox';

function Qna() {
    const textContents = {
        title: 'Frequently Asked Questions',
        desc: `Here are some of out FAQs. If you havs any questions you'd like answered please feel free to email us.`,
    };

    const { title, desc } = textContents;

    const accordion = [
        {
            title: 'What is Bookmark?',
            contents: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        },
        {
            title: 'How can I request a new browser?',
            contents: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur officiis quaerat ut aliquid perspiciatis id ab obcaecati eligendi aperiam, beatae, saepe nesciunt quos officia et, quod eaque nostrum incidunt.  Commodi consequatur officiis quaerat ut aliquid perspiciatis id ab obcaecati eligendi aperiam, beatae, saepe nesciunt quos officia et, quod eaque nostrum incidunt.',
        },
        {
            title: 'Is there a mobile app?',
            contents: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur officiis quaerat ut aliquid perspiciatis id ab obcaecati eligendi aperiam, beatae, saepe nesciunt quos officia et, quod eaque nostrum incidunt.',
        },
        {
            title: 'What about other Chromium browsers?',
            contents: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi consequatur officiis quaerat ut aliquid perspiciatis id ab obcaecati eligendi aperiam, beatae, saepe nesciunt quos officia et, quod eaque nostrum incidunt.',
        },
    ];

    const [active, setActive] = useState(false);

    const toggle = (e) => {
        setActive(!active);

        console.log(active);
    };

    return (
        <QnaWrap>
            <TextBox fontSize={'32px'} title={title} desc={desc} />
            <ul>
                {accordion.map(({ active, title, contents }, index) => (
                    <li key={index}>
                        <div className="titleArea" active={active} onClick={toggle}>
                            <p>{title}</p>
                            <img src="images/icon-arrow.svg" alt="arrow" />
                        </div>
                        <div className="textWrap">
                            <div className="textArea">{contents}</div>
                        </div>
                    </li>
                ))}
            </ul>
            <CommonBtn color={'blue'} text={'More Info'} />
        </QnaWrap>
    );
}
const QnaWrap = styled.div`
    ${({ theme }) => theme.mixin.layourFrame};
    max-width: 540px;
    margin: 0 auto 150px;
    text-align: center;

    ul {
        margin: 40px 0 40px;
        text-align: left;
    }

    li {
        border-top: 1px solid #d1d1d1;
    }

    .titleArea {
        ${({ theme }) => theme.mixin.flexCenter('space-between')};
        padding: 20px 0;
        font-size: 18px;
        cursor: pointer;

        &:hover {
            p {
                color: ${({ theme }) => theme.colors.red};
            }

            img {
                transform: rotate(180deg);
                opacity: 0.8;
            }
        }
        p {
            transition: 0.2s;
        }

        img {
            transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
        }
    }

    .textWrap {
        max-height: 0;
        overflow: hidden;

        ${({ active }) =>
            active &&
            css`
                max-height: 100%;
            `}
    }

    .textArea {
        padding: 10px 0 30px;
        line-height: 1.8;
        color: ${({ theme }) => theme.colors.gray};
    }
`;

export default Qna;
