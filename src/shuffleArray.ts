function randomNumberInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function swapInArray(indexA: number, indexB: number, arr): Array<any> {
  const valA = arr[indexA];
  const valB = arr[indexB];

  arr[indexB] = valA;
  arr[indexA] = valB;

  return arr;
}

export default function shuffleArray(list = []) {
  const listCopy = Array.from(list);
  const listCopyLength = listCopy.length;

  for (let i = 0; i < listCopyLength - 1; i++) {
    const randomIndex = randomNumberInRange(i + 1, listCopyLength);

    swapInArray(i, randomIndex, listCopy);
  }

  return listCopy;
}
