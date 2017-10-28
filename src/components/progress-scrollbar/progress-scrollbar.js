import {BaseComponent} from '../../core/base-component';

export class ProgressScrollbar extends BaseComponent {
    constructor() {
        super();
    }

    /**
     * CreatedCallback
     * The behavior you define occurs
     * when the element is registered.
     */
    createdCallback() {
        super.createdCallback();
        this.resume();
    }
    
    scroll(event) {
        let percent = window.scrollY / (document.body.clientHeight - window.innerHeight);
        TweenMax.to(this, .35, {height: window.innerHeight * percent, ease: Cubic.easeOut});
    }

    resume() {
        document.addEventListener('scroll', this.scroll.bind(this));
    }

    pause() {
        document.removeEventListener('scroll', this.scroll.bind(this));
    }
}
