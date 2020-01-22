let Dress = require("../src/jasmine_spies");

describe("Dress toString() Test", function() {
  let dress = new Dress();

  it("calls the getBrand() and getSize function", function() {
    spyOn(dress, "getBrand");
    spyOn(dress, "getSize");

    dress.toString();
    expect(dress.getBrand).toHaveBeenCalled();
    expect(dress.getSize).toHaveBeenCalled();
  });

  it("calls to check the number of times function has been called", function() {
    spyOn(dress, "getBrand");
    spyOn(dress, "getSize");

    dress.toString();
    dress.toString();
    dress.toString();

    expect(dress.getBrand).toHaveBeenCalledTimes(3);
    expect(dress.getSize).toHaveBeenCalledTimes(3);
  });

  it("calls to get brand and size with arguments", function() {
    spyOn(dress, "getBrand");
    spyOn(dress, "getSize");

    dress.getBrand("Gucci", 8);
    dress.getSize("Gucci", 8);
    expect(dress.getBrand).toHaveBeenCalledWith("Gucci", 8);
    expect(dress.getSize).toHaveBeenCalledWith("Gucci", 8);
  });
});
