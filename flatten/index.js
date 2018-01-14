'use strict';

module.exports = (array) => {
    let result = [];

    function flatten (elem) {
        if (typeof elem === 'object') {
            elem.forEach(flatten); 
        } else {
            result.push(elem);
        }
    }

    flatten(array);
    
    return result;
}