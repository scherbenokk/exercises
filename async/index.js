'use strict';

module.exports = {
    sequence,
    parallel,
    race,
};

function sequence(arrayFn) {
    return (cb) => {
        let currentIndex = 0;
        let callbackFn = (err, data) => {
            if (err) {
                cb(err);
            }

            if (++currentIndex < arrayFn.length) {
                arrayFn[currentIndex](callbackFn, data);
            } else {
                cb(null, data);
            }
        }

        arrayFn[0](callbackFn);
    }
}

function parallel(arrayFn) {
    return (cb) => {
        let currentCounter = 0;
        let results = [];

        let makeCallback = (index) => (err, data) => {
            if (err) {
                cb(err);
            }

            results[index] = data;

            if (++currentCounter === arrayFn.length) {
                cb(null, results);
            }
        }

        arrayFn.forEach((fn, index) => fn(makeCallback(index)));
    }
}

function race(arrayFn) {
    return (cb) => {
        let hasWinner = false;
        let callback = (err, data) => {
            if (err) {
                cb(err);
            }

            if (!hasWinner) {
                hasWinner = true;
                cb(null, data);
            }
        }

        arrayFn.forEach(fn => fn(callback));
    }
}