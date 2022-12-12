import { useState } from 'react';
import styled from 'styled-components';
import CommonBtn from '../common/CommonBtn';
import TextBox from '../common/TextBox';

function FeaturesTabs() {
    const tabItem = [
        {
            idx: 0,
            url: 'images/illustration-features-tab-1.svg',
            tab: 'Simple Bookmarking',
            title: 'Bookmark in one click',
            desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        },
        {
            idx: 1,
            url: 'images/illustration-features-tab-2.svg',
            tab: 'Speedy Searching',
            title: 'Intelligent search',
            desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        },
        {
            idx: 2,
            url: 'images/illustration-features-tab-3.svg',
            tab: 'Easy Sharing',
            title: 'Share your bookmarks',
            desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        },
    ];

    const [crntIdx, setCrntIdx] = useState(0);

    const tabHandler = (idx) => {
        setCrntIdx(idx);

        console.log('idx:' + idx);
        console.log('crnt' + crntIdx);
    };

    return (
        <Tabarea>
            <TabsWrap>
                {tabItem.map((tabMenus, index) => (
                    <TabBtn key={index} className={crntIdx === tabMenus.idx ? 'is-active ' : ''} onClick={() => tabHandler(index)}>
                        {tabMenus.tab}
                    </TabBtn>
                ))}
            </TabsWrap>
            {tabItem.map(({ url, title, desc }, index) => (
                <Panel key={index} style={{ display: crntIdx === index ? 'flex' : 'none' }}>
                    <div className="imageBox">
                        <img src={url} alt="" />
                    </div>
                    <div className="textBox">
                        <TextBox fontSize={'32px'} title={title} desc={desc} />
                        <div className="moreBtn">
                            <CommonBtn color={'blue'} text={'More Info'} size={'small'} />
                        </div>
                    </div>
                </Panel>
            ))}
        </Tabarea>
    );
}

const Tabarea = styled.div``;

const TabsWrap = styled.div`
    width: 70%;
    display: flex;
    margin: 50px auto 0;
    border-bottom: 1px solid #d1d1d1;
`;

const TabBtn = styled.button`
    flex: 1;
    padding: 42px 42px;
    transition: 0.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.red};
    }

    &.is-active {
        color: ${({ theme }) => theme.colors.red};
    }
`;

const Panel = styled.div`
    display: flex;
    align-items: center;
    margin-top: 74px;

    .imageBox {
        width: 100%;
        flex: 1;
        padding-right: 124px;

        img {
            width: 100%;
        }
    }

    .textBox {
        flex: 1;

        .moreBtn {
            margin-top: 34px;
        }
    }
`;

export default FeaturesTabs;
