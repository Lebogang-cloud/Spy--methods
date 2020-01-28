class Dress {
  constructor(brand, size) {
    this.brand = brand;
    this.size = size;
  }

  getBrand() {
    return this.brand;
  }
  setBrand(brand) {
    this.brand = brand;
  }

  getSize() {
    return this.size;
  }
  setSize(size) {
    this.size = size;
  }

  dressDetails() {
    return (
      "The brands is " +
      this.getBrand() +
      " and my size is " +
      this.getSize() +
      "."
    );
  }
}

module.exports = Dress;
