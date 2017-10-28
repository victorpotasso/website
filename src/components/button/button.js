import {BaseComponent} from '../../core/base-component';

export class Button extends BaseComponent {
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
    }

    /**
     * attachedCallback
     * The behavior occurs when
     * the element is inserted into the DOM.
     */
    attachedCallback() {
        super.attachedCallback();
    }

    /**
     * detachedCallback
     * The behavior occurs when
     * the element is removed from the DOM.
     */
    detachedCallback() {
        super.detachedCallback();
    }

    /**
     * attributeChangedCallback
     * The behavior occurs when
     * an attribute of the element is added, changed, or removed
     */
    attributeChangedCallback(name, oldValue, newValue) {
        super.attributeChangedCallback(name, oldValue, newValue);
        switch(name) {
            case 'url':
                let url = newValue;
                let target = this.getAttribute('target');
                this.addEventListener('click', event => {
                    window.open(url, target ? target : '');
                });
                break;
        }
    }
}
