import styled, { ThemeProvider } from "styled-components";
import { useState } from "react"; 
import GlobalStyle from "./GlobalStyle";
import lightTheme from "./themes/light.json"
import darkTheme from "./themes/dark.json"
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout({children}) {
    const [isLight, setIsLight] = useState(true);
    function handleToggleTheme(){setIsLight(!isLight);}

    return(
        <ThemeProvider theme={isLight? lightTheme : darkTheme}>
        <Wrapper>
            <GlobalStyle/>
            <Header/>
                {children}
            <Footer/>
            <button onClick={handleToggleTheme}>Changer vers le {isLight? "DarkTheme" : "LightTheme"} </button>
        </Wrapper>
    </ThemeProvider>
     );
}

const Wrapper = styled.div``;