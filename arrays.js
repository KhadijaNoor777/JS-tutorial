var arr1 = ["abc", 55];
for(var i=0; i<arr1.length;i++)
    console.log(arr1[i]);

var arr2 = [[1,2,3], [4,7,5], [[1,5,9],7,6]];
var m=arr2[2][0];
console.log(m);

var a=[7,8,9];
arr2.push(a);

m=arr2[3][2];
console.log(m);

y = arr2.shift();
console.log(y);
