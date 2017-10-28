import {BaseComponent} from '../../core/base-component';

export class Section extends BaseComponent {
    constructor() {
        super();
    }

    get animation() {
        let anim = new TweenMax(this, 2, {
            delay: 1,
            y:0,
            rotationX:"0deg",
            ease: Cubic.easeOut
        });

        return anim;
    }

    /**
     * CreatedCallback
     * The behavior you define occurs
     * when the element is registered.
     */
    createdCallback() {
        TweenMax.set(this, {
            y: 300,
            rotationX:"90deg",
            transformPerspective: 2500
        });

        super.createdCallback();
    }
}
