import backgroundLofiAm from "../../assets/sounds/Background_Lofi_Am.wav";

export enum AvailableBackgroundTracks { 
    Backgrond_Lofi_Am = "BackgroundLofiAm"
};

export class BackgroundTracksUtil {
    registerSounds = (soundsData: any) => {
        soundsData[AvailableBackgroundTracks.Backgrond_Lofi_Am] = backgroundLofiAm;
    };
}