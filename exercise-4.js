var tanggal = 31;
var bulan = 12;
var tahun = 2200;

if (tanggal>0 && tanggal<32){
    switch(bulan){
        case 1:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Januari " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 2:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Februari " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 3:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Maret " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 4:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " April " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 5:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Mei " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 6:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Juni " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 7:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Juli " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 8:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Agustus " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 9:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " September " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 10:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Oktober " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 11:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " November " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        case 12:
            if (tahun>1899 && tahun<2201){
                console.log(tanggal + " Desember " + tahun);
            }
            else{
                console.log("Tahun salah");
            }
            break;
        default:
            console.log("Bulan salah")            
            break; 
    }
}
else{
    console.log("Tanggal salah");
}



