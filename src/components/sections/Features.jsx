import styled from 'styled-components';
import TextBox from '../common/TextBox';
import FeaturesTabs from '../features/FeaturesTabs';

function Features() {
    const textContents = {
        title: 'Features',
        desc: 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so tou can access them on the go.',
    };

    const { title, desc } = textContents;

    return (
        <FeaturesContainer>
            <div className="text-container">
                <TextBox fontSize={'32px'} title={title} desc={desc} />
            </div>
            <FeaturesTabs />
        </FeaturesContainer>
    );
}

const FeaturesContainer = styled.div`
    ${({ theme }) => theme.mixin.layourFrame};
    margin-bottom: 150px;

    .text-container {
        max-width: 50%;
        margin: 0 auto;
        text-align: center;
    }
`;

export default Features;
