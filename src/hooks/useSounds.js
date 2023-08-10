import * as Tone from "tone";
import { useEffect, useRef } from "react";
import Kick from "assets/sounds/Kick.wav"
import Loop from "assets/sounds/Loop14.wav"
import Perc from "assets/sounds/Perc1.wav"
import Snare from "assets/sounds/Snare.wav"


export default function useSounds(){
const mySampler = useRef(null);

useEffect(()=> {
    const sampler = new Tone.Sampler({
        C4: Kick,
        "D#4": Loop,
        "F#4": Perc,
        A4: Snare,
    }).toDestination();

    Tone.loaded().then(() => {
        mySampler.current = sampler;
    });
}, []);

function soundPlay(note) {
    mySampler.current.triggerAttackRelease([note], 4);
}

function handleKeyDown({key}){
switch (key){
    case "a": soundPlay("C4");break;
    case "z": soundPlay("D#4");break;
    case "e": soundPlay("F#4");break;
    case "r": soundPlay("A4");break;
default: break;
}}

useEffect(()=>{
    window.addEventListener("keydown", handleKeyDown);
return ()=> {
    window.removeEventListener("keydown", handleKeyDown);
};
}, []);

const buttonsList = [
    {soundPlay: () => soundPlay("C4"),},
    {soundPlay: () => soundPlay("D#4"),},
    {soundPlay: () => soundPlay("F#4"),},
    {soundPlay: () => soundPlay("A4"),},
 ];
    return {buttonsList};
}