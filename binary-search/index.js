module.exports = binarySearch;

function binarySearch(array, element, start, end) {
  var startIndex = start || 0;
  var endIndex = end || array.length - 1;

  // count of elements in sub-array
  var elementsCount = endIndex - startIndex + 1;
  var currentIndex = parseInt(elementsCount / 2, 10) + startIndex;

  if (array[currentIndex] === element) {
    return currentIndex;
  }

  // edge case: if start index === 0 and end index === 1
  if (elementsCount === 2 && startIndex === 0 && endIndex === 1 && array[startIndex] === element) {
    return startIndex;
  }

  if (elementsCount < 2) {
    return -1;
  }

  if (array[currentIndex] > element) {
    return binarySearch(array, element, startIndex, currentIndex);
  } else {
    return binarySearch(array, element, currentIndex, endIndex);
  }
}
