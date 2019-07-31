var jam = 0;
var menit = 0;
var tambahannol = '';

function konversiMenit(menit) {
    jam = menit/60;
    menit = menit%60;
    tambahannol = menit.toString()
    if (tambahannol.length < 2){
        tambahannol = "0";
    }
    else{
        tambahannol = '';
    }
    return jam.toFixed() + ":" + tambahannol + menit;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00