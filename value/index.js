module.exports = function (value) {
  var result = value;

  while (typeof result === 'function') {
    result = result();
  }

  return result;
}
