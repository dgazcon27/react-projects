import "babel-polyfill";

const text = "hola Mundo";
const fruits = ["manzana", "melonm", "banana"];

test("Contiene texto", () => {
  expect(text).toMatch(/Mundo/);
});

test("Tenemos una banana", () => {
  expect(fruits).toContain("banana");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});

test("Checked", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, cb) => {
  cb(str.split("").reverse().join(""));
};

test("test callback", () => {
  reverseString("hola", (str) => {
    expect(str).toBe("aloh");
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("String vacio"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

test("Test promise", () => {
  reverseString2("hola").then((string) => {
    expect(string).toBe("aloh");
  });
});

test("test Async/await", async () => {
  const string = await reverseString2("hola");
  expect(string).toBe("aloh");
});

// afterEach(() => {
//   console.log("despues de cada test");
// });

// afterAll(() => {
//   console.log("despues de todas las pruebas");
// });

// beforeEach(() => console.log("antes de cada prueba"));
// beforeAll(() => console.log("antes de todas las pruebas"));
