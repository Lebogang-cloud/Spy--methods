let Dress = require("../src/jasmine_spies");

describe("Dress to getBrand() and getSize Test", function() {
  let dress = new Dress();

  it("calls the getBrand() function", function() {
    spyOn(dress, "getBrand");

    dress.getBrand();
    dress.getBrand()
    dress.getBrand("Gucci", 8)

    expect(dress.getBrand).toHaveBeenCalled();
    expect(dress.getBrand).toHaveBeenCalledTimes(3);
    expect(dress.getBrand).toHaveBeenCalledWith("Gucci", 8);
  });

  it("calls the getSize() function", function() {
    spyOn(dress, "getSize");

    dress.getSize("Gucci", 8)
    
    expect(dress.getSize).toHaveBeenCalled();
    expect(dress.getSize).toHaveBeenCalledTimes(1);
    expect(dress.getSize).toHaveBeenCalledWith("Gucci", 8);
  });
    
});
