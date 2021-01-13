import randomString from "../Cities";

describe("Test functionalities", () => {
  test("Testing function", () => {
    expect(typeof randomString()).toBe("string");
  });

  test("Check no a citie", () => {
    expect(randomString()).not.toMatch(/Cordova/);
  });
});
