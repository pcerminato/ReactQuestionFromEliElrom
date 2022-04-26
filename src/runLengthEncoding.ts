function encode(input: string): string {
  const chars: string[] = Array.from(input);
  let counter = 0;
  let prev: string = chars.length ? chars[0] : undefined;
  let encodedString = "";

  for (let i = 0; i <= chars.length; i++) {
    const current = chars[i];

    if (current === prev) {
      counter = counter + 1;
    } else {
      encodedString += `${counter}${prev}`;
      // count reset
      counter = 1;
    }

    prev = current;
  }

  return encodedString;
}

function isNumber(num: string) {
  return !isNaN(parseInt(num));
}

function decode(encodedString: string): string {
  const chars: string[] = Array.from(encodedString);
  let decodedString = "";
  let countTempl = "";
  let count: number;

  for (let i = 0; i < chars.length; i++) {
    const element = chars[i];

    if (isNumber(element)) {
      // if the current element is a number,
      // compose the template for the final number of repetitions.
      countTempl = `${countTempl}${element}`;
    } else {
      count = parseInt(countTempl);

      // repeat the chars as times as the code states
      for (let j = 1; j <= count; j++) {
        decodedString += element;
      }

      // reset template count
      countTempl = "";
    }
  }

  return decodedString;
}

export { encode, decode };
