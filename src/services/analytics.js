// third-party
import Singleton from '../core/singleton';

/**
 * Service: GoogleAnalytics
 * @author Victor Potasso <victorpotasso@gmail.com>
 */
@Singleton({
    name: 'analytics'
})
export default class GoogleAnalytics {
    /**
     * @constructor
     */
    constructor() {
        if(window.ga) {
            this.ga = window.ga;
        }
        else {
            throw new Error('GoogleAnalytics there is no instance of "ga".');
            return;
        }
    }

    /**
     * Page Tracking
     *
     * @param {String} page
     * @param {String} Object
     *
     * @see https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
     */
    pageview(...p_args) {
        let args = [];
        args.push('send');
        args.push('pageview');
        args = Array.prototype.concat(args, p_args);
        this.ga.apply(this, args);

        // console.log('GoogleAnalytics::event', args);
    }

    /**
     * Event Tracking
     *
     * @param {String} Category
     * @param {String} Action
     * @param {String} Label
     * @param {String} Value
     * @param {String} Object
     *
     * @see https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     */
    event(...p_args) {
        let args = [];
        args.push('send');
        args.push('event');
        args = Array.prototype.concat(args, p_args);
        this.ga.apply(this, args);

        // console.log('GoogleAnalytics::event', args);
    }
}
