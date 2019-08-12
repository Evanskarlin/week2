height = 5;
display = '';

// *
// **
// ***
// ****
// ***
// **
// *

for(var i = height; i>0 ; i--){
    display = '';
    for(var j = height; j>=i ; j--){
    display = display + "*";
    } 
    console.log(display);
}
for(var i = 0; i<height ; i++){
    display = '';
    for(var j = height-1; j>i ; j--){
    display = display + "*";
    } 
    console.log(display);
}

// ****
//  ***
//   **
//    *
//   **
//  ***
// ****

for(var i = 0; i<height ; i++){
    display = '';
    for(var j = 0; j<i ; j++){
        display = display + " ";
    } 
    for(var j = height; j>i ; j--){
    display = display + "*";
    } 
    console.log(display);
}
for(var i = height-1; i>0 ; i--){
    display = '';
    for(var j = 1; j<i ; j++){
        display = display + " ";
    } 
    for(var k = height; k>=i ; k--){
        display = display + "*";
    } 
    console.log(display);
}

//    *
//   **
//  ***
// ****
//  ***
//   **
//    *

for(var i = height; i>0 ; i--){
    display = '';
    for(var j = 1; j<i ; j++){
        display = display + " ";
    } 
    for(var k = height; k>=i ; k--){
        display = display + "*";
    } 
    console.log(display);
}
for(var i = 0; i<height ; i++){
    display = '';
    for(var j = 0; j<=i ; j++){
        display = display + " ";
    } 
    for(var j = height-1; j>i ; j--){
    display = display + "*";
    } 
    console.log(display);
}

//     *
//    ***
//   *****
//  *******
// *********

var l = 0;

for(var i = 0; i<height ; i++){
    display = '';
    for(var k = i; k<height ; k++){
        display = display + " ";
    } 
    l = (i*2);
    for(var j = 0; j<=l ; j++){
        display = display + "*";
    }
    console.log(display);
}