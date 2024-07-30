import { InstrumentName } from "./InstrumentName";

export interface InstumentInterface { 
    name : InstrumentName;
    registerSounds : (soundsData : any) => void;
}