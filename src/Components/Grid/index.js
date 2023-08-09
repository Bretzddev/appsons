import styled from "styled-components"
import GrilleButton from "./GrilleButton";
import useSounds from "hooks/useSounds";

export default function Grid(){
    const {buttonsList} = useSounds();
    return (
        <Wrapper>
            <h2>Grid page</h2>
            <Grille>
                {buttonsList.map(({soundPlay}, index) => {return <GrilleButton key={index} soundPlay={soundPlay}/>;
                })}
            </Grille>
        </Wrapper>
    );
}

const Wrapper = styled.div``;

const Grille = styled.div`
display : grid;
width: 400px;
height: 400px;
border: solid 1px;
grid-template-columns: 1fr 1fr;
column-gap: 12px;
row-gap: 12px;
padding: 24px;
margin: auto;
@media (max-width: 640px){
    grid-template-columns: 1fr;
    width: 300px;
    height: 300px;
}
`;