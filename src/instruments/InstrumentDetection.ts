import { InstrumentName } from "./InstrumentName";

export const getInstrumentFromSamplePath = (samplePath: string): InstrumentName => {
    const sampleName = samplePath.toLowerCase().substring(samplePath.lastIndexOf('/') + 1);
    let instruments = Object.values(InstrumentName);
    let instrumentName = instruments.find(name => {
        let isIn = sampleName.indexOf(name) > 0;

        console.log('sampleName ', sampleName)
        console.log('Name => ', name)
        console.log('name is in samplename ', isIn)

        return isIn;
    });


    return instrumentName ? instrumentName as InstrumentName : InstrumentName.Unknown;
}