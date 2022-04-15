export default function bubbleSort(
  list: Array<string | number>
): Array<string | number> {
  const sortedList = Array.from(list);

  for (let i = 0; i < sortedList.length; i++) {
    for (let j = 0; j < sortedList.length - 1; j++) {
      const currentValue = sortedList[j];
      const nextIndex = j + 1;
      const nextValue = sortedList[nextIndex];

      if (currentValue > nextValue) {
        sortedList[j] = nextValue;
        sortedList[nextIndex] = currentValue;
      }
    }
  }

  return sortedList;
}
