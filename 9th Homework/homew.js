//Creati cate 2 exemple pentru mostenire si compozitie folosindu-va de domeniul vostru de activitate sau unul preferat.(puteti folosi orice referinta).

//Primul exemplu
const Laptops = () => {
  function Laptop() {
    this.name = null;
    this.processor = "";
    this.memory = "";
    this.ssd = "";
  }

  function Asus(settings) {
    Laptop.call(this);
    const { name, processor, memory, ssd } = settings;
    this.name = name;
    this.processor = processor;
    this.memory = memory;
    this.ssd = ssd;
  }

  function Lenovo(settings) {
    Laptop.call(this);
    const { name, processor, memory, ssd } = settings;
    this.name = name;
    this.processor = processor;
    this.memory = memory;
    this.ssd = ssd;
  }

  Asus.prototype = Object.create(Laptop.prototype);
  Lenovo.prototype = Object.create(Laptop.prototype);

  var firstLaptop = new Asus({
    name: "Asus TUF F15 Gaming Laptop",
    processor: "Intel Core i5",
    memory: "8GB",
    ssd: "1TB",
  });

  var secondLaptop = new Asus({
    name: "ASUS E510MA",
    processor: "Intel Celeron",
    memory: "4GB",
    ssd: "256GB",
  });

  var thirdLaptop = new Asus({
    name: "ASUS ROG Strix G17 G713IE Gaming Laptop",
    processor: "AMD Ryzen 7",
    memory: "16GB",
    ssd: "512GB",
  });

  var fourthLaptop = new Lenovo({
    name: "Lenovo IdeaPad 3 15ALC6",
    processor: "AMD Ryzen 3",
    memory: "4GB",
    ssd: "128GB",
  });

  var fifthLaptop = new Lenovo({
    name: "Lenovo Gaming Laptop IdeaPad 3 15ACH6",
    processor: "AMD Ryzen 7",
    memory: "16GB",
    ssd: "512GB",
  });

  var sixthLaptop = new Lenovo({
    name: "Lenovo IdeaPad 3 15IHU6 Gaming Laptop",
    processor: "Intel Core i5",
    memory: "8GB",
    ssd: "256GB",
  });

  function group(...args) {
    this.groupLaptops = args;
  }

  const laptopAsus = { firstLaptop, secondLaptop, thirdLaptop };
  const laptopLenovo = { fourthLaptop, fifthLaptop, sixthLaptop };
  const thisLaptops = new group(laptopAsus, laptopLenovo);
  console.log(thisLaptops);
};

Laptops();
//al doilea exemplu

const Apple = () => {
  function Iphones(settings) {
    this.model = null;
    this.memory = "";
    this.color = "";
  }

  function Iphone(settings) {
    Iphones.call(this);
    const { model, memory, color } = settings;
    this.model = model;
    this.memory = memory;
    this.color = color;
  }
  Iphone.prototype = Object.create(Iphones.prototype);

  var firstIphone = new Iphone({
    model: "Iphone 11",
    memory: "64GB",
    color: "Silver",
  });

  var secondIphone = new Iphone({
    model: "Iphone 12 Pro",
    memory: "128GB",
    color: "Gold",
  });

  var thirdIphone = new Iphone({
    model: "Iphone 13 Pro Max",
    memory: "1TB",
    color: "Space Gray",
  });

  function Details(settings) {
    Iphones.call(this);
    const { system, processor, size } = settings;
    this.system = system;
    this.processor = processor;
    this.size = size;
  }
  Details.prototype = Object.assign(Details.prototype, Iphones.prototype);

  var firstDetail = new Details({
    system: "iOS 13",
    processor: "Apple A13 Bionic",
    size: "6.1inch",
  });

  var secondDetail = new Details({
    system: "iOS 14",
    processor: "Apple A14 Bionic",
    size: "6.1inch",
  });

  var thirdtDetail = new Details({
    system: "iOS 15",
    processor: "Apple A15 Bionic",
    size: "6.1inch",
  });

  function group(...args) {
    this.groupIphones = args;
  }
  const iphonesIphone = { firstIphone, secondIphone, thirdIphone };
  const iphonesDetails = { firstDetail, secondDetail, thirdtDetail };
  const appleIphones = new group(iphonesIphone, iphonesDetails);
  console.log(appleIphones);
};

Apple();

//cate o functie care primeste cate un parametru: integer, string, object, array, callback

//integer
const sums = (a, b) => {
  return a + b;
};
console.log(sums(10, 20));

//string
const numbers = (a) => {
  return a;
};
console.log(numbers(20));
console.log(numbers(30));

//object
const phone = (obj) => {
  return obj;
};
console.log(phone({ Name: "Apple", Model: "Iphone 13 Pro", Memory: "1TB" }));
console.log(phone({ Name: "Apple", Model: "Iphone 12", Memory: "128GB" }));

//array
const numbArray = (arr) => {
  return arr;
};
console.log(numbArray([4, 5, 6, 7]));
console.log(numbArray([10, 11, 12, 13]));

//Callback
const apple = ["Iphone", "Ipad", "AppleWatch", "MacBook"];

apple.forEach((names) => console.log(names));

//o functie care accepta un numar nedefinit de argumente care returneaza suma lor

function sum() {
  var sumNumb = 0;
  for (var i = 0; i < arguments.length; i++) {
    sumNumb += arguments[i];
  }
  return sumNumb;
}
console.log(sum(-2, 10));
console.log(sum(10, 18));
console.log(sum(10, 0));

//o functie care accepta un boolean si retuneaza un promise, resolve  cu o valoare daca booleanul este true si rejected daca este false cu alta valoare, prindeti ce returneaza functia si afisati cu console.log valoarea

function getSumNum(a, b) {
  const customPromise = new Promise((resolve, reject) => {
    const sum = a + b;

    if (sum <= 5) {
      resolve("The sum is good!");
    } else {
      reject("Number must be less than 5");
    }
  });

  return customPromise;
}
console.log(getSumNum(3, 2));
console.log(getSumNum(5, 0));
console.log(getSumNum(4, 4));
