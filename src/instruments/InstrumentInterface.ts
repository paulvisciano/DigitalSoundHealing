export enum InstumentName {
    TibetanMetalSingingBowl = "Tibetan Metal Singing Bowl",
    TibetanCrystalSingingBowl = "Tibetan Crystal Singing Bowl",
}

export interface InstumentInterface { 
    name : InstumentName;
    registerSounds : (soundsData : any) => void;
}