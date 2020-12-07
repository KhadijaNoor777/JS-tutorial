//random number between 0 and 1
var r1 = Math.random();
console.log(r1)



//random whole number
var r2 = Math.floor(Math.random()*20);  //between 0 to 19
console.log(r2)
var r3 = Math.floor(Math.random()*10);  //between 0 to 9
console.log(r3)


//parse int
var str = "12";
console.log(parseInt(str))
var str = "abc";
console.log(parseInt(str))
var str = "10110"
console.log(parseInt(str,2))  //base 2, converts binary to int



//rest operator
//...args converts all arguments to an array
function sums(...args){
    let sum =0;
    for(args of args){
      sum += args;
    }
    return sum;
  }
  
  console.log(sums(1,2,3));
  
  
  //spread operator
  var num1 = [1,2,3,4];
  var num2 = num1;
  var num3= [...num1];
  console.log(num2);
  console.log(num3);
  num1[2]=5;
  console.log(num2);
  console.log(num3);
  
  var num3= [...num1];
  
