// Find the first repeating character in a string

export default function firstRepeatingChar (chars = []): string {
  let repCharIsFound = false;
  let arrEnded = chars.length === 0;
  let i = -1;
  let current: string;

  while(!repCharIsFound && !arrEnded) {
    i += 1;
    // the rest of the elements from the current down to the last.
    const rest = chars.slice(i+1);
    current = chars.at(i);
    
    repCharIsFound = rest.findIndex(c => c === current) > -1;

    if (i === chars.length-1) {
      arrEnded = true;
    }
  }

  return repCharIsFound ? current : undefined;
}
