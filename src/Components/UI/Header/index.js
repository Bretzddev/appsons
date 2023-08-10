import styled from "styled-components"
import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    return (
        <Wrapper>
            <h1>La nouvelle application</h1>
            <NavRow>
                <Link to="/"><MenuEl isCurrentPage={location.pathname ==="/"}>Home</MenuEl></Link>
                <Link to="/grid"><MenuEl isCurrentPage={location.pathname ==="/grid"}>Grid</MenuEl></Link>
                <Link to="/about"><MenuEl isCurrentPage={location.pathname ==="/about"}>About</MenuEl></Link>
            </NavRow>
        </Wrapper>
    );
}

const Wrapper = styled.header`
height: 80px;
display: flex;
justify-content: space-between;
padding: 0px 24px;
align-items: center;
color: ${(props)=> props.theme.backgroundColor}; 
background-color: ${(props)=> props.theme.mainColor};
& a {
    text-decoration: none;
    color: inherit;
}
&
`;

const MenuEl = styled.p`
font-size: 18px;
padding-bottom: 2px;
margin: 10px;
border-bottom: solid 2px  ${props => props.isCurrentPage ? "" : "transparent"};
&:hover {
    border-bottom: 2px ${props => props.isCurrentPage ? "solid" : "dotted"};
}
`;

const NavRow = styled.nav`
display: flex;
flex-direction: row;
`;