export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    throw Error('Argument must be an Array');
  }
  return new Set(array);
}
