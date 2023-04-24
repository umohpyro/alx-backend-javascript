export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    throw Error('startString must be a string');
  }
  for (const value of set) {
    if (typeof value !== 'string') {
      throw Error('set must only contain strings');
    }
    if (
      value.startsWith(startString)
      && startString.length > 0
      && startString !== undefined
    ) {
      return [...set]
        .filter((value) => value.startsWith(startString))
        .map((value) => value.slice(startString.length))
        .join('-');
    }
  }
  return '';
}
