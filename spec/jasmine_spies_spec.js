let Dress = require("../src/jasmine_spies");

describe("Dress to getBrand() and getSize Test", function() {
  let dress = new Dress();

  it("calls the getBrand() function", function() {
    spyOn(dress, "getBrand");

    dress.getBrand();
    expect(dress.getBrand).toHaveBeenCalled();
  });

  it(" checks the number of times the getBrand() function is called", function() {
    spyOn(dress, "getBrand");

    dress.getBrand();
    dress.getBrand();
    dress.getBrand();
    expect(dress.getBrand).toHaveBeenCalledTimes(3)
  });

  it(" checks the arguments getBrand() function has been called with", function() {
    spyOn(dress, "getBrand");

    
    dress.getBrand("Gucci")
    expect(dress.getBrand).toHaveBeenCalledWith("Gucci");
  });
    
});
