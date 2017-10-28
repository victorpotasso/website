/**
 * Build modules
 */
export function buildModules(context, modules) {
    let _modules = new Array();
    for(let module in modules) {
        let Klass = modules[module];
        let instance = new Klass();
        context.appendChild(instance._el);
        _modules[module] = instance;
    }
    return _modules;
}

/**
 * Build controllers
 */
export function buildControllers(view, controllers) {
    let _controllers = new Array();
    for(let controller in controllers) {
        let Klass = controllers[controller];
        let instance = new Klass(view);
        _controllers[controller] = instance;
    }
    return _controllers;
}

/**
 * Build Dependencies
 */
export function buildDependencies(target, dependencies) {
    let _dependencies = new Array();
    for(let dependency in dependencies) {
        let Klass = dependencies[dependency];
        let instance = Klass.instance();
        target.prototype[Klass.prototype._name] = instance;
        _dependencies[Klass.prototype._name] = target.prototype[Klass.prototype._name];
    }
    return _dependencies;
}
