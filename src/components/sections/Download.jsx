import styled from 'styled-components';
import CommonBtn from '../common/CommonBtn';
import TextBox from '../common/TextBox';

function Download() {
    const textContents = {
        title: 'Download the extension',
        desc: `we've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.`,
    };

    const { title, desc } = textContents;

    const browsers = [
        {
            name: 'Chrome',
            ver: '62',
        },
        {
            name: 'Firefox',
            ver: '55',
        },
        {
            name: 'Opera',
            ver: '46',
        },
    ];
    return (
        <DownloadWrap>
            <div>
                <TextBox fontSize={'32px'} title={title} desc={desc} />
            </div>

            <CardWrap>
                {browsers.map(({ name, ver }, index) => (
                    <li key={index}>
                        <img src={`images/logo-${name}.svg`} alt={`${name} icon`} />
                        <p className="title">Add to {name}</p>
                        <p className="desc">Mininum version {ver}</p>
                        <CommonBtn size={'small'} color={'blue'} text={'Add & Install Extension'} />
                    </li>
                ))}
            </CardWrap>
        </DownloadWrap>
    );
}

const DownloadWrap = styled.div`
    ${({ theme }) => theme.mixin.layourFrame};
    margin-bottom: 150px;
    text-align: center;

    & > div {
        width: 40%;
        margin: 0 auto;
    }
`;

const CardWrap = styled.ul`
    ${({ theme }) => theme.mixin.flexCenter('center')};
    margin-top: 44px;

    li {
        padding: 20px;
        border-radius: 10px;
        box-shadow: 2px 4px 10px rgba(83, 104, 223, 0.2);
        transition: 0.2s;

        &:nth-child(2) {
            margin-top: 50px;
        }

        &:nth-child(3) {
            margin-top: 100px;
        }

        &:hover {
            transform: translateY(-10px);
        }

        & + li {
            margin-left: 34px;
        }

        img {
            margin: 20px 0 30px;
        }

        .title {
            font-weight: 600;
            font-size: 18px;
        }

        .desc {
            margin: 10px 0 30px;
            color: ${({ theme }) => theme.colors.gray};
            font-size: 14px;
        }
    }
`;

export default Download;
