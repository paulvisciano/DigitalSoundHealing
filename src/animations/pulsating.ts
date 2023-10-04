import { createAnimation, Animation} from "@ionic/react";

const pulsating = (animation: React.MutableRefObject<Animation | null>, chakraCircleRef: React.MutableRefObject<HTMLDivElement | null>): React.EffectCallback  => {
    return () => {
        if (animation.current === null) {
            //TODO: Add rotation if it looks better, when the note cirles are in place
            const rotatingAnimation = createAnimation()
                .addElement(chakraCircleRef.current!)
                .keyframes([
                    { offset: 0, transform: 'scale(1) rotate(0)' },
                    { offset: 0.15, transform: 'scale(1.03) rotate(0)' },
                    { offset: 0.3, transform: 'scale(1.05) rotate(0)' },
                    { offset: 0.5, transform: 'scale(1.1) rotate(0)' },
                    { offset: 0.75, transform: 'scale(1.05) rotate(0)' },
                    { offset: 0.85, transform: 'scale(1.03) rotate(0)' },
                    { offset: 1, transform: 'scale(1) rotate(0)' }
                ]);

            animation.current = createAnimation()
                .addElement(chakraCircleRef.current!)
                .duration(5000)
                .iterations(Infinity)
                .addAnimation([rotatingAnimation]);
        }
    };
}

export default pulsating;