import styled from "styled-components"

export default function Footer({isLight, handleToggleTheme}){
    return (
        <Wrapper>
            <p>La nouvelle application</p>
            <button onClick={handleToggleTheme}>Changer vers le {isLight? "DarkTheme" : "LightTheme"} </button>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
height: 80px;
display: flex;
justify-content: space-between;
padding: 0px 24px;
align-items: center;
background-color: ${(props)=> props.theme.mainColor};
`;