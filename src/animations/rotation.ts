import { createAnimation, Animation} from "@ionic/react";

const rotation = (animation: React.MutableRefObject<Animation | null>, elementRef: React.MutableRefObject<HTMLDivElement | null>): React.EffectCallback  => {
    return () => {
        if (animation.current === null) {
            //TODO: Add rotation if it looks better, when the note cirles are in place
            const rotatingAnimation = createAnimation()
                .addElement(elementRef.current!)
                .keyframes([
                    { offset: 0, transform: 'scale(1) rotate(0deg)' },
                    { offset: 0.25, transform: 'scale(1.25) rotate(90deg)' },
                    { offset: 0.5, transform: 'scale(1.5) rotate(180deg)' },
                    { offset: 0.75, transform: 'scale(1.25) rotate(270deg)' },
                    { offset: 1, transform: 'scale(1) rotate(360deg)' }
                ]);

            animation.current = createAnimation()
                .addElement(elementRef.current!)
                .duration(180000)
                .iterations(Infinity)
                .addAnimation([rotatingAnimation]);
        }
    };
}

export default rotation;