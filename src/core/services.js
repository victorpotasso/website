import {buildDependencies} from './_helpers';

/**
 * Decorator: Services
 * @author Victor Potasso <victorpotasso@gmail.com>
 */
export function Services(services) {
    return function(target) {
        if(services) target.prototype.services = buildDependencies(target, services);
    }
}
