export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  get maxStudentsSize() {
    return this._maxStudentsSize;
  }

  set maxStudentsSize(newSize) {
    if (typeof newSize === 'number') {
      this._maxStudentsSize = newSize;
    } else {
      console.log('Size must be a number');
    }
  }
}
