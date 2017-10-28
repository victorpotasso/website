// third-party
import Singleton from '../core/singleton';
import Emitter   from '../core/emitter';

/*
 * Service: Broadcaster
 *
 * on, off and emit events
 */
@Emitter
@Singleton({
    name: 'broadcaster'
})
export default class Broadcaster {
    /**
     * @constructor
     */
    constructor() {}
}
