/**
 * Decorator: Emitter
 * @author Victor Potasso <victorpotasso@gmail.com>
 */
export function Emitter(target) {
    target.prototype.listeners = {};

    /**
     * On
     */
    target.prototype.on = function(type, callback) {
        if(!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    };

    /**
     * Off
     */
    target.prototype.off = function(type, callback) {
        if(!(type in this.listeners)) {
            return;
        }
        var stack = this.listeners[type];
        for(var i = 0, l = stack.length; i < l; i++) {
            if(stack[i] === callback) {
                stack.splice(i, 1);
                return this.off(type, callback);
            }
        }
    };

    /**
     * Emit
     */
    target.prototype.emit = function(event) {
        if(!(event.type in this.listeners)) {
            return;
        }
        var stack = this.listeners[event.type];
        // event.target = target;
        for(var i = 0, l = stack.length; i < l; i++) {
            stack[i].call(this, event);
        }
    };
}
