import {BaseComponent} from '../../core/base-component';

export class Lab001 extends BaseComponent {
    constructor() {
        super();
    }

    /**
     * CreatedCallback
     * The behavior you define occurs
     * when the element is registered.
     */
    createdCallback() {
        this.thumbnailEl = this.querySelector('vp-thumbnail');
        this.titleEl = this.thumbnailEl.querySelector('vp-thumbnail-title');
        this.imageEl = this.thumbnailEl.querySelector('vp-thumbnail-image');
        this.descriptionEl = this.thumbnailEl.querySelector('vp-thumbnail-description');

        this.thumbnailEl.addEventListener('mouseover', this.over.bind(this));
        this.thumbnailEl.addEventListener('touchstart', this.over.bind(this));
        this.thumbnailEl.addEventListener('mouseout', this.out.bind(this));
        this.thumbnailEl.addEventListener('touchend', this.out.bind(this));

        super.createdCallback();
    }

    over(event) {
        this.thumbnailEl.addEventListener('mousemove', this.move.bind(this));
        this.thumbnailEl.addEventListener('touchmove', this.move.bind(this));
    }

    out(event) {
        this.thumbnailEl.removeEventListener('mousemove', this.move.bind(this));
        this.thumbnailEl.removeEventListener('touchmove', this.move.bind(this));
        this.reset();
    }

    move(event) {
        event.preventDefault();
        let mx = (event.clientX || event.targetTouches[0].clientX) - this.thumbnailEl.offsetLeft;
        let my = (event.clientY || event.targetTouches[0].clientY) - this.thumbnailEl.offsetTop;
        let px = (mx - this.thumbnailEl.clientWidth/2) / (this.thumbnailEl.clientWidth/2);
        let py = (my - this.thumbnailEl.clientHeight/2) / (this.thumbnailEl.clientHeight/2);
        let angle = 10;
        let offsetX = 20;
        let offsetY = 10;

        TweenMax.to(this.imageEl, 1, {
            rotationX: py * -angle,
            rotationY: px * angle,
            z: 0,
            ease: Cubic.easeOut
        });

        TweenMax.to(this.titleEl, 1, {
            y: py * offsetY,
            x: px * offsetX,
            rotationZ: px * offsetY,
            z: 100,
            ease: Cubic.easeOut
        });

        TweenMax.to(this.descriptionEl, 1, {
            y: py * offsetY,
            x: px * offsetX,
            z: 80,
            ease: Cubic.easeOut
        });
    }

    reset() {
        TweenMax.to(this.imageEl, 1, {
            rotationX: 0,
            rotationY: 0,
            ease: Cubic.easeOut
        });
        TweenMax.to(this.titleEl, 1, {
            y: 0,
            x: 0,
            z: 100,
            rotationZ: 0,
            ease: Cubic.easeOut
        });

        TweenMax.to(this.descriptionEl, 1, {
            y: 0,
            x: 0,
            z: 80,
            ease: Cubic.easeOut
        });
    }
}
