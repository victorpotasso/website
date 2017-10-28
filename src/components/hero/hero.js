import {BaseComponent} from '../../core/base-component';

import {Services} from '../../core/services';
import {WebAudio} from '../../services/webaudio';

@Services([
    WebAudio
])
export class Hero extends BaseComponent {
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

        this.logo = this.querySelector('#logo');
        this.bars = Array.from(this.querySelector('.bars').children);
        this.letterV = this.querySelector('#letter-v');
        this.letterP = this.querySelector('#letter-p');
        this.ballon = this.querySelector('#ballon');
        this.progressLinear = document.querySelector('#global-progress-linear');

        this.webaudio.on(WebAudio.RENDER, this.render.bind(this));
    }

    render(event) {
        let frequencyData = event.frequencyData;

        if(this.progressLinear.style.display != 'none') this.progressLinear.style.display = 'none';

        TweenMax.set(this.letterV, {
            autoAlpha: ((frequencyData[30] / 1000) * 5) + .1
        })

        TweenMax.set(this.letterP, {
            autoAlpha: ((frequencyData[10] / 1000) * 5) + .1
        })

        TweenMax.set(this.ballon, {
            autoAlpha: ((frequencyData[0] / 1000) * 5) + .1
        })

        TweenMax.set(this.logo, {
            scale: .7 + (frequencyData[0] / 1000) * 2
        })

        TweenMax.set(document.body, {
            backgroundColor: (0x333333 * (frequencyData[0] / 10000)) + 0x333333
            // backgroundColor: "rgb(" + frequencyData[0] + ", " + frequencyData[this.bufferLength/7] + ", " + frequencyData[this.bufferLength/3] + ")"
        })

        this.bars.map((bar, i) => {
            TweenMax.set(bar, {
                height: (frequencyData[i] / 10)
            })
        });
    }
}
