import { createAnimation, Animation} from "@ionic/react";

const pulsating = (animation: React.MutableRefObject<Animation | null>, elementRef: React.MutableRefObject<HTMLDivElement | null>): React.EffectCallback  => {
    return () => {
        if (animation.current === null) {
            //TODO: Add rotation if it looks better, when the note cirles are in place
            const pulsatingAnimation = createAnimation()
                .addElement(elementRef.current!)
                .keyframes([
                    { offset: 0, transform: 'scale(0.98) rotate(0)' },
                    { offset: 0.15, transform: 'scale(1.03) rotate(0)' },
                    { offset: 0.3, transform: 'scale(1.05) rotate(0)' },
                    { offset: 0.5, transform: 'scale(1.07) rotate(0)' },
                    { offset: 0.75, transform: 'scale(1.05) rotate(0)' },
                    { offset: 0.85, transform: 'scale(1.03) rotate(0)' },
                    { offset: 1, transform: 'scale(0.98) rotate(0)' }
                ]);

            animation.current = createAnimation()
                .addElement(elementRef.current!)
                .duration(5000)
                .iterations(Infinity)
                .addAnimation([pulsatingAnimation]);
        }
    };
}

export default pulsating;