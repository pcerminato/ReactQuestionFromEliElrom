export const romanIntValue = new Map<string, number>([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

export function hasNext(list: string[], index: number): boolean {
  return index < list.length - 1;
}

export default function romansToIntegers(roman: string): number {
  const romansList = Array.from(roman);
  let integer = -1;

  if (romansList.length) {
    integer = romansList.reduce(
      (totalInt, currentRoman, index, list): number => {
        const nextRoman = hasNext(list, index) ? list[index + 1] : undefined;
        const currentInt = romanIntValue.get(currentRoman);
        const nextInt = nextRoman ? romanIntValue.get(nextRoman) : 0;
        const useNegSign = nextRoman && currentInt < nextInt;

        return totalInt + (useNegSign ? -currentInt : currentInt);
      },
      0
    );
  }

  return integer;
}
