export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) {
    throw Error('Argument must be an Array');
  }
  return array.every((value) => set.has(value));
}
