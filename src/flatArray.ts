export default function flatArray(list = []) {
  const flatResult = [];

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    let flatElements = [item];

    if (Array.isArray(item)) {
      flatElements = flatArray(item);
    }

    flatResult.push(...flatElements);
  }

  return flatResult;
}
