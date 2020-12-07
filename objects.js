var car= {
    "model": 2019,
    "color": "black",
    "name": "civic", 
    "car condition": "good",
};

console.log(car.color);
console.log(car["car condition"]);         //when property name has space in it

car.color="white";
console.log(car.color);

car["speed"]=300;
console.log(car.speed);

delete car.speed;
console.log(car.speed);


//creating lookups using object
var lookup =  {
    "b" : "black",
    "p" : "pink",
    "r" : "red",
};

var val = "p";
console.log(lookup[val]);


//checking if an object has some property or not
function checkObj(checkProp){
    if(car.hasOwnProperty(checkProp))
        console.log(car[checkProp]);
    else
        console.log("none");
}
checkObj("name");


//accessing nested objects
var myStore = {
  "car" : {
    "inside":{
      "p1": "one",
      "p2": "two",
    },
    "outside":{
      "p3": "three",
      "p4": "four",
    }
  }
};

var obj= myStore.car.outside["p3"];
console.log(obj);



//accessing nested array
var myGarden = [
    {
      "type": "flowers",
      "names": [
        "rose",
        "tulip",
        "lily",
      ]
    },
    {
      "type": "trees",
      "names": [
        "apple",
        "mango",
        "bnana",
      ]
    }
  ];
  var myPlant = myGarden[0].names[2];
  console.log(myPlant);
  



