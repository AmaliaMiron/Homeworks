//numar par/impar
const oddeven = (random) => {
  let num = random;
  if (num % 2 == 0) {
    console.log(num + " " + "este numar par!");
  } else {
    console.log(num + " " + "este numar impar!");
  }
};
num = oddeven(4);
num = oddeven(5);

//suma
const sum = (a1, a2) => {
  const number1 = a1;
  const number2 = a2;

  console.log(number1 + number2);
};
const numbers = sum(5, 5);

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12",
  },
};
//clonare
const clonePerson = { ...person };

//destructurare
const { name } = person;
console.log(name);

const car = {
  name: "Toyota",
  settings1: { color: "white", doors: 5 },
};

//clone
const cloneCar = {
  ...car,
  modelYear: "2022",
  settings: { wheels: "4", engine: "1.6" },
};
const mergedcar = { ...car, ...cloneCar };
console.log(mergedcar);

//destructurare
const {
  settings1: { color, doors },
} = car;
console.log(
  "The car has it's color " +
    color +
    " " +
    "and it has" +
    " " +
    doors +
    " " +
    "doors "
);
