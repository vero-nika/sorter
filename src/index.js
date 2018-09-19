class Sorter {
  constructor() {
    this.array = [];
    this.comparator = this._baseComparator;
  }
  _baseComparator(left, right) {
    return left - right;
  }
  add(element) {
    this.array.push(element);
    console.log(this);
  }
  at(index) {
    return this.array[index];
  }
  get length() {
    return this.array.length;
  }
  toArray() {
    return this.array;
  }
  sort(indices) {
    var array = [];
    indices.sort(this._baseComparator);
    indices.forEach(element => {
      array.push(this.array[element]);
    });
    array.sort(this.comparator);
    indices.forEach((element, index) => {
      this.array[element] = array[index];
    })
    return this;
  }
  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}
module.exports = Sorter;