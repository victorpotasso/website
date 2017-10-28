import {BaseComponent} from '../../core/base-component';

export class Codepen extends BaseComponent {
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

        this.classList.add('codepen');
    }
}
