import { ColorEnum } from "../colors/ColorEnum";
import { getUniqueColorFromGeneric } from "../colors/ColorGenerator";
import { PositionEnum } from "../colors/PositionsEnum";
import { NoteEnum } from "../sounds/NoteEnum";

//https://www.color-meanings.com/chakra-colors-the-7-chakras-and-their-meanings/
export enum ChakraEnum {
    Crown = 1,
    ThirdEye = 2,
    Throat = 3,
    Heart = 4, 
    Solar = 5,
    Sacral = 6,
    Root = 7
}

export interface ChakraInterface { 
    name: ChakraEnum;
    nameAsString: string;
    note: NoteEnum;
    color: ColorEnum;
    colorHex : string;
    position : PositionEnum;
    play : any;
}

export class Chakra implements ChakraInterface {
    name: ChakraEnum;
    nameAsString : string;
    note: NoteEnum;
    noteAsString : string;
    color: ColorEnum;
    colorHex : string;
    position : PositionEnum;

    constructor(name: ChakraEnum) {
        this.name = name;
        this.nameAsString = ChakraEnum[name].toLowerCase();

        switch (name) {
            case ChakraEnum.Crown:
                this.note = NoteEnum.B;
                this.color = ColorEnum.Violet;
                this.colorHex = '#6000EE';
                this.position = PositionEnum.TopLeft
                break;
            case ChakraEnum.ThirdEye:
                this.note = NoteEnum.A;
                this.color = ColorEnum.DarkBlue;
                this.colorHex = "#3F51B5";
                this.position = PositionEnum.TopMiddle
                break;
            case ChakraEnum.Throat:
                this.note = NoteEnum.G;
                this.color = ColorEnum.LightBlue;
                this.colorHex = "#2196F3";
                this.position = PositionEnum.TopRight
                break;
            case ChakraEnum.Heart:
                this.note = NoteEnum.F;
                this.color = ColorEnum.Green;
                this.colorHex = "#4CAF50";
                this.position = PositionEnum.Center
                break;
            case ChakraEnum.Solar:
                this.note = NoteEnum.E;
                this.color = ColorEnum.Yellow;
                this.colorHex = "#FFEB3B";
                this.position = PositionEnum.BottomLeft
                break;
            case ChakraEnum.Sacral:
                this.note = NoteEnum.D;
                this.color = ColorEnum.Orange;
                this.colorHex = "#FF9800";
                this.position = PositionEnum.BottomMiddle
                break;
            case ChakraEnum.Root:
                this.note = NoteEnum.C;
                this.color = ColorEnum.Red;
                this.colorHex = "#F44336";
                this.position = PositionEnum.BottomRight
                break;

            default:
                this.note = NoteEnum.F;
                this.color = ColorEnum.Green;
                this.colorHex = "#4CAF50";
                this.position = PositionEnum.Center;
                break;
        }

        this.noteAsString = NoteEnum[this.note].toLowerCase();
    }

    //Note is on the 7 note scale
    //Color is on the 7 color spectrum
    play = () => {
        const uniqueColor = getUniqueColorFromGeneric(this.color);

        //TODO : Change this to actually play a note or insert a message into a queue
        console.log(`Play ${this.name} | ${this.note} | ${uniqueColor}`);

    }
}
