//destructuring
var car = {
    "name" : "civic",
    "model" : 2019,
  };

const {"name":carName} = car;
console.log(carName);

//swap using destructuring
var a=6, b=7;
[a,b]=[b,a];
console.log(a,b);

//template string
const specs= `it's ${car.name} of model ${car.model}`;
console.log(specs);