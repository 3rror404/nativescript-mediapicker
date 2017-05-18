var Mediapicker = require("nativescript-mediapicker").Mediapicker;
var mediapicker = new Mediapicker();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(mediapicker.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(mediapicker.functionname()).toEqual(jasmine.any(Promise));
  });
});