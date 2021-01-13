const cities = ["Valencia", "Maracay", "Caracas", "Maturin", "Maracaibo"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("String vacio"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

export default randomString;
