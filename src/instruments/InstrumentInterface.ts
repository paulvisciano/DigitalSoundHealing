import { NoteEnum } from "../sounds/NoteEnum";
import { MethodEnum } from "./SingingBowl";

export interface InstumentInterface { 
    getSoundPath : (note : NoteEnum, method :MethodEnum ) => any;
}