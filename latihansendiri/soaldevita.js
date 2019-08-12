var height = 5;
var display = '';

for(var j = height; j>0 ; j--){
    display='';
    for(var i = height; i>0 ; i--){
        display = display + i;
    }
    console.log(display);
    height = height-1;
}