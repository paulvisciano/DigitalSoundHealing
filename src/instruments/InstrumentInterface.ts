import { NoteEnum } from "../sounds/NoteEnum";

export enum InstumentName {
    TibetanMetalSingingBowl = "Tibetan Metal Singing Bowl",
    TibetanCrystalSingingBowl = "Tibetan Crystal Singing Bowl",
}

export interface InstumentInterface { 
    name : InstumentName;
    getSoundKey : (gesture : any, note : NoteEnum) => string;
    registerSounds : (soundsData : any) => void;
}