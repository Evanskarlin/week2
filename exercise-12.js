var jam = 0;
var menit = 0;

function konversiMenit(menit) {
    jam = Math.floor(menit/60);
    menit = menit%60;
    if (menit < 10){
        menit = "0" + menit;
    }
    return jam + ":" + menit;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00