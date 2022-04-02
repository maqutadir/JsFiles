//polyfill for bind

Function.prototype.mybind = function (obj, ...args) {
  let func = this;
  return function (...args2) {
    func.apply(obj, [...args, ...args2]);
  };
};

const address = {
  country: "Canada"
};

function printAddress(
  streetNo,
  streetName,
  unitNo,
  city,
  province,
  postalCode
) {
  const streetAddress = `${streetNo} + ${streetName} + ${unitNo}`;
  console.log(
    `My full address is ${streetAddress} + ${city} + ${province} + ${postalCode} + ${this.country}`
  );
}

let printMyAddress = printAddress.mybind(address, "77", "King St W", "");

printMyAddress("Toronto", "ON", "M4P1K2");
