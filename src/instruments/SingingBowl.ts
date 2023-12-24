import { NoteEnum } from "../sounds/NoteEnum";
import { InstumentInterface, InstumentName } from "./InstrumentInterface";
import bowlAStrike from "../assets/sounds/Bowl_A_Strike.wav";
import bowlBStrike from "../assets/sounds/Bowl_B_Strike.wav";
import bowlCStrike from "../assets/sounds/Bowl_C_Strike.wav";
import bowlDStrike from "../assets/sounds/Bowl_D_Strike.wav";
import bowlEStrike from "../assets/sounds/Bowl_E_Strike.wav";
import bowlFStrike from "../assets/sounds/Bowl_F_Strike.wav";
import bowlGStrike from "../assets/sounds/Bowl_G_Strike.wav";
import bowlAGlide from "../assets/sounds/Bowl_A_Glide.wav";
import bowlBGlide from "../assets/sounds/Bowl_B_Glide.wav";
import bowlCGlide from "../assets/sounds/Bowl_C_Glide.wav";
import bowlDGlide from "../assets/sounds/Bowl_D_Glide.wav";
import bowlEGlide from "../assets/sounds/Bowl_E_Glide.wav";
import bowlFGlide from "../assets/sounds/Bowl_F_Glide.wav";
import bowlGGlide from "../assets/sounds/Bowl_G_Glide.wav";

export enum SoundBowlGestureEnum {
    Strike = "Strike",
    Glide = "Glide"
}

export class SingingBowl implements InstumentInterface {
    name = InstumentName.TibetanMetalSingingBowl;

    getSoundPath = (note: NoteEnum, method: SoundBowlGestureEnum) => {
        let soundPath;

        switch (note) {
            case NoteEnum.A:
                soundPath = method === SoundBowlGestureEnum.Strike ? bowlAStrike : bowlAGlide;
                break;
            case NoteEnum.B:
                soundPath = method === SoundBowlGestureEnum.Strike ? bowlBStrike : bowlBGlide;
                break;
            case NoteEnum.C:
                soundPath = method === SoundBowlGestureEnum.Strike ? bowlCStrike : bowlCGlide;
                break;
            case NoteEnum.D:
                soundPath = method === SoundBowlGestureEnum.Strike ? bowlDStrike : bowlDGlide;
                break;
            case NoteEnum.E:
                soundPath = method === SoundBowlGestureEnum.Strike ? bowlEStrike : bowlEGlide;
                break;
            case NoteEnum.F:
                soundPath = method === SoundBowlGestureEnum.Strike ? bowlFStrike : bowlFGlide;
                break;
            case NoteEnum.G:
                soundPath = method === SoundBowlGestureEnum.Strike ? bowlGStrike : bowlGGlide;
                break;
            default:
                soundPath = null;
                break;
        }

        return soundPath;
    };
}