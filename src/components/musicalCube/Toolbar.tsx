import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import { reloadCircleSharp, reloadCircleOutline } from "ionicons/icons";
import './Toolbar.css'

const CubeSideToolbar: React.FC<{ loop: boolean, setLoop: any }> = ({ loop, setLoop }) => {
    return (<div className="cube-side-toolbar">
        <IonGrid>
            <IonRow>
                <IonCol offset='10'>
                    {loop ? <IonIcon size='large' icon={reloadCircleSharp} onClick={() => setLoop(false)} /> : <IonIcon size='large' icon={reloadCircleOutline} onClick={() => setLoop(true)} />}
                </IonCol>
            </IonRow>
        </IonGrid>
    </div>);
}

export default CubeSideToolbar;