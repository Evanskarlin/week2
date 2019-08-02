var tanggal = 31;
var bulan = 12;
var tahun = 2201;
var display = '';

if (tanggal>0 && tanggal<32){
    display = display + tanggal + " ";
}
else{
    display = display + "//tanggal salah// ";
}

switch(bulan){
    case 1:
        display = display + "Januari ";
        break;
    case 2:
        display = display + "Februari ";   
        break;
    case 3:
        display = display + "Maret ";
        break;
    case 4:
        display = display + "April ";
        break;
    case 5:
        display = display + "Mei ";
        break;
    case 6:
        display = display + "Juni ";
        break;
    case 7:
        display = display + "Juli ";
        break;
    case 8:
        display = display + "Agustus ";
        break;
    case 9:
        display = display + "September ";
        break;
    case 10:
        display = display + "Oktober ";
        break;
    case 11:
        display = display + "November ";
        break;
    case 12:
        display = display + "Desember ";
        break;
    default:
        display = display + "//bulan salah// ";         
        break;
}

if (tahun>1899 && tahun<2201){
    display = display + tahun;
}
else{
    display = display + "//tahun salah// ";
}

console.log(display);