import 'whatwg-fetch';
import "babel-polyfill";

import "./core/threejs/orbit-controls";

/**
 * Register Element Polyfill
 * @see https://www.npmjs.com/package/document-register-element
 */
import 'document-register-element';

/**
 * Greensock
 * @see https://github.com/greensock/GreenSock-JS
 */
// import 'gsap/src/uncompressed/TweenLite';
import 'gsap/src/uncompressed/TweenMax';
import 'gsap/src/uncompressed/TimelineMax';
// import 'gsap/src/uncompressed/plugins/CSSPlugin';
// import 'gsap/src/uncompressed/plugins/ScrollToPlugin';

// Event
import {Event} from './core/events/event';

// Components
import {Button} from './components/button/button';
import {Hero} from './components/hero/hero';
import {Section} from './components/section/section';
import {ProgressScrollbar} from './components/progress-scrollbar/progress-scrollbar';
import {Codepen} from './components/codepen/codepen';
import {ProgressLinear} from './components/progress-linear/progress-linear';

// Sections
import {Works} from './sections/works/works';
import {Lab001} from './sections/lab-001/lab-001';
import {Lab002} from './sections/lab-002/lab-002';

import {Services} from './core/services';
import {WebAudio} from './services/webaudio';

 /**
 * App
 *
 * @author Victor Potasso <victorpotasso@gmail.com>
 * @date 29th October 2016
 */
 @Services([
     WebAudio
 ])
class App extends HTMLElement {
    /**
     * PREFIX
     * @type {String}
     * @const
     */
    static get PREFIX() { return 'vp-'; }

    /**
     * @constructor
     */
    constructor() {
        super();
    }

    createdCallback() {
        // components
        document.registerElement(`${App.PREFIX}hero`, Hero);
        document.registerElement(`${App.PREFIX}button`, Button);
        document.registerElement(`${App.PREFIX}section`, Section);
        document.registerElement(`${App.PREFIX}progress-scrollbar`, ProgressScrollbar);
        document.registerElement(`${App.PREFIX}codepen`, Codepen);
        document.registerElement(`${App.PREFIX}progress-linear`, ProgressLinear);

        // sections
        document.registerElement(`${App.PREFIX}works`, Works);
        document.registerElement(`${App.PREFIX}lab-001`, Lab001);
        document.registerElement(`${App.PREFIX}lab-002`, Lab002);

        // load webaudio
        if(this.webaudio.support()) this.webaudio.load();

        // create timeline
        this.tl = new TimelineMax({
            paused: true
        });

        // getting animation from sections
        let sections = Array.from(this.querySelectorAll('vp-section'));
        sections.map(section => this.tl.add(section.animation));

        document.addEventListener('scroll', this.scroll.bind(this));
    }

    scroll(event) {
        let percent = window.scrollY / (document.body.clientHeight - window.innerHeight);
        this.tl.progress(percent);
    }
}

// boot
function contentLoaded(event) {
    document.removeEventListener(Event.DOM_CONTENT_LOADED, contentLoaded);
    document.registerElement(`${App.PREFIX}app`, App);
}
document.addEventListener(Event.DOM_CONTENT_LOADED, contentLoaded);
