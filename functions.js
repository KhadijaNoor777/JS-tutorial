function add(x,y){
    console.log(x+y);
}
var a=3, b=5;
add(a,b);

function sub(x,y){
    return x-y;
}

diff=sub(5,2);
console.log(diff);

function vowel(x){
    switch(x){
        case 'a':
            return true;
            break;
        case 'e':
            return true;
            break;
        case 'i':
            return true;
            break;
        case 'o':
            return true;
            break;
        case 'u':
            return true;
            break;
        default:
            return false;
            break;
    }
}

if(vowel('m'))
    console.log("vowel");
else{
    console.log("not vowel");
}



//ternary operator
8>4?console.log("true"):console.log("false");
var n= 9
n>0?console.log("positive"):n<0?console.log("negative"):console.log("zero");
