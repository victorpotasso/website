/**
 * Decorator: Singleton
 * @author Victor Potasso <victorpotasso@gmail.com>
 */
export function Singleton(params) {
    return function(target) {
        target.prototype._name = params.name;

        // We will hold the instance reference in a Symbol.
        // A Symbol is a unique, immutable property of an object introduced in ES6.
        var instance = Symbol('__instance__');

        // We define the static method for retrieving the instance.
        target.instance = function () {
            // If no instance has been created yet, we create one
            if (!target[instance]) { target[instance] = new target(); }

            // Return the saved instance.
            return target[instance];
        };
        return target;
    }
}
