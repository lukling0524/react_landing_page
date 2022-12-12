import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Contact from './components/sections/Contact';
import Download from './components/sections/Download';
import Features from './components/sections/Features';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Qna from './components/sections/Qna';
import TopArea from './components/sections/TopArea';
import theme from './resource/css/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Header />
                <TopArea />
                <Features />
                <Download />
                <Qna />
                <Contact />
                <Footer />
            </ThemeProvider>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

    li{
        list-style: none;
    }
    button{
        padding: 10px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    input{
        border: 0;
        outline: 0;
    }
`;

export default App;
