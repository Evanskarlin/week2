var x = 0;
var o = 0;

function xo(str) {
    x = 0;
    o = 0;
    for (var A = str.length ; A >= 0 ; A--){
        if (str[A] === 'x'){
            x = x + 1 ;
        }
        else if (str[A] === 'o'){
            o = o + 1 ;
        }
    }
    if (x === o){
        return true;
    }
    else{
        return false;
    }
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true