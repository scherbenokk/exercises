'use strict';

module.exports = function curry(fn) {
    function cr () {
        let args = Array.from(arguments);
        let allParams = args[0].concat(args.slice(1));

        if (allParams.length === fn.length) {
            return fn.apply(null, allParams);
        }

        return cr.bind(null, allParams);
    }

    return cr.bind(null, []);
}