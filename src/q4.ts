

const text = 'asf294uilkasjdflj$%^&*lksdjfjahgsf72#$%^&*(*&^%45678876545hffajsbdfk';
/* 

console.time('perf');

const map = text.split('').reduce((charsMap, char) => {
  let count = charsMap.has(char) ? charsMap.get(char) : 0;

  charsMap.set(char, ++count)

  return charsMap;
}, new Map());

const arrayMap = Array.from(map.entries());

const sortedMap = arrayMap.sort((a, b) => b[1] - a[1] );

console.log('The most repeated char is ', sortedMap[0]);

console.timeEnd('perf'); */

// 16.304ms
// 7.663ms
// 6.09ms

//-----------------------
// a simpler approach using .split()
// If you split the original string by the current char, 
// The more a char appears, the more chuncks it will have the splitted array,
// so the splitted array lenght -1 is equals the times that the char appears in the string.
console.time('perf');
let mostRepChar = '';
let times = 0;

Array.from(text).forEach(value => {
  const count = text.split(value).length - 1;

  if (count > times) {
    mostRepChar = value;
    times = count;
  }
});

console.log('The most repeated char is ', mostRepChar);
console.timeEnd('perf');

// 6.508ms
// 4.737ms