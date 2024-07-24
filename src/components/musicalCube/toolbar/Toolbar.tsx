import { IonGrid, IonIcon, IonRow } from "@ionic/react";
import { reloadCircleSharp, reloadCircleOutline, syncCircle, pauseCircle, playCircle } from "ionicons/icons";
import './Toolbar.css'

interface ToolbarOptions {
    isPlaying: boolean;
    playPause: () => void;
    loop: boolean;
    setLoop: (val: boolean) => void;
    triggerSync: () => void;
    enableLoop: boolean;
};

const CubeSideToolbar: React.FC<ToolbarOptions> = ({ isPlaying, playPause, loop, setLoop, enableLoop }) => {
    return (<div className="cube-side-toolbar">
        <IonGrid>
            <IonRow>
                {isPlaying ? <IonIcon size='large' icon={pauseCircle} onClick={() => playPause()} /> : <IonIcon size='large' icon={playCircle} onClick={() => playPause()} />}
            </IonRow>

            {enableLoop &&
                <IonRow>
                    {loop ? <IonIcon size='large' icon={reloadCircleSharp} onClick={() => setLoop(false)} /> : <IonIcon size='large' icon={reloadCircleOutline} onClick={() => setLoop(true)} />}
                </IonRow>
            }
        </IonGrid>
    </div>);
}

export default CubeSideToolbar;