module.exports = function map(array, callback, ctx) {
  var mappedArray = [];

  for (var i = 0; i < array.length; ++i) {
    if (array[i] || array[i] === 0) {
      mappedArray[i] = callback.call(ctx, array[i], i, array);
    } else {
      mappedArray[i] = array[i]
    }
  }

  return mappedArray;
}
