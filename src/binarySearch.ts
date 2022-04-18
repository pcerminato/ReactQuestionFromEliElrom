/**
 * Find an element in an ascending ordered list.
 * O(log n).
 * @param list The ascending ordered list to search on.
 * @param searchValue The value to search for.
 * @returns {number} Returns the index of the element found in the list. If not found, returns -1.
 */
export default function binarySearch(list, searchValue) {
  let foundIndex = -1;
  let firstIndex = 0;
  let lastIndex = list.length;
  let isFound = false;
  let endOfList = list.length === 0;

  while (!isFound && !endOfList) {
    const middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    const currentValue = list[middleIndex];

    if (currentValue === searchValue) {
      isFound = true;
      foundIndex = middleIndex;
    } else if (searchValue < currentValue) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }

    endOfList = firstIndex > lastIndex;
  }

  return foundIndex;
}
