export default function createInt8TypedArray(length, position, value) {
  const bufferedData = new ArrayBuffer(length);
  const data = new Int8Array(bufferedData, 0, length);

  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  data.set([value], position);
  return new DataView(bufferedData);
}
