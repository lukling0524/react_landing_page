const deviceSizes = {
    mobile: '425px',
    tablet: '768px',
    desktop: '1440px',
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const mediaQueries = {
    mobile: `@media only screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `@media only screen and (max-width: ${deviceSizes.tablet})`,
    desktopL: `@media only screen and (max-width: ${deviceSizes.desktop})`,
};

const maxWidth = '1112px';

const mixin = {
    flexCenter: `
        display: flex;
        justify-contents: center;
        align-items: center;
    `,

    flexCenterColumn: `
        display: flex;
        flex-direction: column;
        justify-contents: center;
        align-items: center;
    `,

    layourFrame: `
        max-width: ${maxWidth};
        margin: 0 auto;
    `,
};

const margins = {
    sm: '5px',
    base: '14px',
    lg: '32px',
};

const paddings = {
    sm: '5px',
    base: '14px',
    lg: '32px',
};

const colors = {
    blue: 'hsl(231, 69%, 60%)',
    red: 'hsl(0, 94%, 66%)',
    gray: 'hsl(229, 8%, 60%)',
    navy: 'hsl(229, 31%, 21%)',
    snowWhite: '#F8F8F8',
};

const theme = {
    mediaQueries,
    mixin,
    maxWidth,
    margins,
    paddings,
    colors,
};

export default theme;
