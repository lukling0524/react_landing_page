import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './components/sections/Header';
import TopArea from './components/sections/TopArea';
import theme from './resource/css/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <TopArea />
            </ThemeProvider>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
    a{
        color: inherit;
        text-decoration: none;
    }

    li{
        list-style: none;
    }
`;

export default App;
