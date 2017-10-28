// third-party
import {Singleton} from '../core/singleton';
import {Emitter}   from '../core/emitter';

/*
 * WebAudio
 */
@Emitter
@Singleton({
    name: 'webaudio'
})
export class WebAudio {
    static get RENDER() { return 'webaudio-render'; }

    /**
     * @constructor
     */
    constructor(){
        this.context = new AudioContext();
        this.analyser = this.context.createAnalyser();
    }

    support() {
        let context = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
        return context != null || context != undefined;
    }

    load() {
        let url = 'assets/audios/arctic-monkeys-the-view-from-the-afternoon.mp3';
        let options = {
          method: 'GET',
          mode: 'cors',
          cache: 'default'
        }
        fetch(url, options)
            .catch(err => console.error(err))
            .then(response => response.arrayBuffer())
            .then(buffer => this.context.decodeAudioData(buffer).then(this.audioLoaded.bind(this)))
    }

    audioLoaded(audioBuffer) {
        this.source = this.context.createBufferSource();
        this.source.buffer = audioBuffer;
        this.source.connect(this.analyser);
        this.analyser.connect(this.context.destination);

        this.play();

        this.analyser.fftSize = 2048;
        this.bufferLength = this.analyser.frequencyBinCount;
        this.frequencyData = new Uint8Array(this.bufferLength);

        this.source.onended = this.end.bind(this);

        this.render();
    }

    play(time=0) {
        this.source.start(time);
    }

    stop(time=0) {
        this.source.stop(time);
    }

    end(event) {
        // loop
        this.play();
    }

    render() {
        this.analyser.getByteFrequencyData(this.frequencyData);

        let _event = document.createEvent('HTMLEvents');
        _event.initEvent(WebAudio.RENDER, false, true);
        _event.frequencyData = this.frequencyData;
        this.emit(_event);

        requestAnimationFrame(this.render.bind(this));
    }
}
