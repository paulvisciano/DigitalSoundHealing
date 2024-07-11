import { IonGrid, IonIcon, IonRow } from "@ionic/react";
import { reloadCircleSharp, reloadCircleOutline, syncCircle } from "ionicons/icons";
import './Toolbar.css'

const CubeSideToolbar: React.FC<{ loop: boolean, setLoop: any, triggerSync: any }> = ({ loop, setLoop, triggerSync }) => {
    return (<div className="cube-side-toolbar">
        <IonGrid>
            <IonRow>
                {loop ? <IonIcon size='large' icon={reloadCircleSharp} onClick={() => setLoop(false)} /> : <IonIcon size='large' icon={reloadCircleOutline} onClick={() => setLoop(true)} />}
            </IonRow>
            <IonRow>
                <IonIcon size='large' icon={syncCircle} onClick={() => triggerSync()} />
            </IonRow>
        </IonGrid>
    </div>);
}

export default CubeSideToolbar;