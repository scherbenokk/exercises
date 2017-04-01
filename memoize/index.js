module.exports = function(callbackToSolve) {
  var result = {};

  return function () {
    var argumentsHash = [].join.call(arguments);

    if (!result[argumentsHash]) {
      result[argumentsHash] = callbackToSolve.apply(null, arguments);
    }

    return result[argumentsHash];
  }
}
