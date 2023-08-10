import * as Tone from "tone";
import { useState, useEffect, useRef } from "react";
import Kick from "assets/sounds/Kick.wav"
import Loop from "assets/sounds/Loop14.wav"
import Perc from "assets/sounds/Perc1.wav"
import Snare from "assets/sounds/Snare.wav"


export default function useSounds(){
const mySampler = useRef(null);

const [isAPlayed, isAPlayedChange] = useState(false)
const [isBPlayed, isBPlayedChange] = useState(false)
const [isCPlayed, isCPlayedChange] = useState(false)
const [isDPlayed, isDPlayedChange] = useState(false)

useEffect(()=> {
    const sampler = new Tone.Sampler({
        A4: Kick,
        B4: Loop,
        C4: Perc,
        D4: Snare,
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
    case "a": isAPlayedChange(true); window.setTimeout(()=> isAPlayedChange(false),200); soundPlay("A4");break;
    case "z": isBPlayedChange(true); window.setTimeout(()=> isBPlayedChange(false),200); soundPlay("B4");break;
    case "e": isCPlayedChange(true); window.setTimeout(()=> isCPlayedChange(false),200); soundPlay("C4");break;
    case "r": isDPlayedChange(true); window.setTimeout(()=> isDPlayedChange(false),200); soundPlay("D4");break;
default: break;
}}

useEffect(()=>{
    window.addEventListener("keydown", handleKeyDown);
return ()=> {
    window.removeEventListener("keydown", handleKeyDown);
};
}, []);

const buttonsList = [
    {soundPlay: () => soundPlay("A4"),isPlayed: isAPlayed, id: "A4"},
    {soundPlay: () => soundPlay("B4"),isPlayed: isBPlayed, id: "B4"},
    {soundPlay: () => soundPlay("C4"),isPlayed: isCPlayed, id: "C4"},
    {soundPlay: () => soundPlay("D4"),isPlayed: isDPlayed, id: "D4"},
 ];
    return {buttonsList};
}