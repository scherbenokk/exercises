'use strict';

module.exports = function debounce(fn, msec) {
    let isExecuted = false;
    let context;
    let args;

    return function execute() {
        context = this;
        args = Array.from(arguments);

        if (!isExecuted) {
            isExecuted = true;

            setTimeout(() => {
                fn.apply(context, args);
                isExecuted = false;
            }, msec);
        } 
    }
}