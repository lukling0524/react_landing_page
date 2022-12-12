import styled from 'styled-components';
import CommonBtn from '../common/CommonBtn';

function Contact() {
    return (
        <ContactWrap>
            <ContactContainer>
                <p className="textSm">35,000+ ALREADY JOINED</p>
                <p className="textLg">Stay up-to-date with what we're doing</p>
                <div className="formWrap">
                    <input type="email" placeholder="Enter yout email address" />
                    <CommonBtn color={'red'} text={'Contact Us'} />
                </div>
            </ContactContainer>
        </ContactWrap>
    );
}
const ContactWrap = styled.div`
    padding: 70px 0;
    text-align: center;
    color: #fff;
    font-size: 36px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.blue};
`;

const ContactContainer = styled.div`
    ${({ theme }) => theme.mixin.layourFrame};
    max-width: 440px;
    margin: 0 auto;

    .textSm {
        font-size: 14px;
    }

    .textLg {
        margin: 36px 0;
    }

    .formWrap {
        ${({ theme }) => theme.mixin.flexCenter('center')};

        input {
            flex: 1;
            margin-right: 20px;
            padding: 14px 20px;
            border-radius: 5px;
            border: 2px solid transparent;
            box-sizing: border-box;

            &:focus {
                border-color: ${({ theme }) => theme.colors.red};
            }
        }
    }
`;

export default Contact;
