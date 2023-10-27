import { NoteEnum } from "../sounds/NoteEnum";

export enum InstumentName {
    TibetanMetalSingingBowl = "Tibetan Metal Singing Bowl",
    TibetanCrystalSingingBowl = "Tibetan Crystal Singing Bowl",
}

export enum InstrumentGestureEnum {
    Strike = "Strike",
    Glide = "Glide"
}

export interface InstumentInterface { 
    name : InstumentName;
    getSoundPath : (note : NoteEnum, gesture :InstrumentGestureEnum ) => any;
}