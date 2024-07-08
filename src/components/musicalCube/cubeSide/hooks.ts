import { useEffect } from "react"

 // Customize the way the click event is handled to be able to seek vertically
const _handleClick = (wavesurferRef : any, event: any) => {
    var rect = wavesurferRef.current.renderer.parent.getBoundingClientRect();
    let minY = rect.top;
    let maxY = rect.bottom;
    let newVal = 1 - ((event.clientY - minY) / (maxY - minY));

    wavesurferRef.current.seekTo((newVal));
    wavesurferRef.current.play();
};

export const useCustomWavesurferClick = (wavesurferRef : any) => {
    useEffect(() => {
        //Add a local func, so the unsub works correctly
        const handle = (e : any) => _handleClick(wavesurferRef, e);

        wavesurferRef.current.renderer.parent.addEventListener("click", handle);

        return () => {
            wavesurferRef.current.renderer.parent.removeEventListener("click", handle);
        }
    });
};