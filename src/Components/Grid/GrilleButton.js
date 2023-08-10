import { styled } from "styled-components";

export default function GrilleButton({isPlayed=false, soundPlay, id, handleSampleChange}){
    return (<Wrapper isPlayed={isPlayed} onClick={soundPlay}>
        <label onClick={(e)=>e.stopPropagation()} htmlFor={id}>🎵</label>
        <input onClick={(e)=>e.stopPropagation()} id={id} type="file" onChange={handleSampleChange}/>
    </Wrapper>);
    }

    const Wrapper = styled.div`
    border-radius: 4px;
    background: rgba(100, 204, 197, 1);
    background: radial-gradient(circle, rgba(140, 244, 237, 1) 0%, rgba(100, 204, 197, 1)100%);
    position: relative;
    overflow: hidden;
    &::before {
        position: absolute;
        content: "";
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
        background: radial-gradient(
            circle,
            rgba(255, 170, 167, 1) ${(props) => (props.isPlayed ? "25%" : "0%")},
            rgba(255, 230, 213, 1) 100%
        );
        opacity: ${(props) => (props.isPlayed ? "1" : "0")};
        transition: linear 0.2s;
    }
    &:hover::before{
        opacity: 1;
    }
    &:active::before{
        opacity: 1;
        background: radial-gradient(
            circle,
            rgba(255, 170, 167, 1) 25%,
            rgba(255, 230, 213, 1) 100%
        );
    }
    & input{
        display: none;
    }

    & label{
        position: absolute;
        right: 12px;
        top: 12px;
        font-size: 24px;
    }
    `;
