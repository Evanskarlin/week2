//soal 1:
    var nilai = 0;

    console.log("LOOPING PERTAMA");
    while(nilai<20){
        nilai = nilai + 2;
       console.log(nilai + " - I love coding");
    }
    console.log("LOOPING KEDUA");
    while(nilai>2){
       nilai = nilai - 2;
        console.log(nilai + " - I will become full stack developer");
    }

//soal 2:
    console.log("LOOPING PERTAMA");
    for (var nilai = 1; nilai < 20; nilai++){
        console.log(nilai + " - I love coding");
    }
    console.log("LOOPING KEDUA");
    for (var nilai = 20; nilai > 0; nilai--){
        console.log(nilai + " - I will become full stack developer");
    }

//soal 3:
    for (var nilai = 1; nilai < 101; nilai++){
        if (nilai%2 === 0){
            console.log("GENAP");
        }
        else{
            console.log("GANJIL");
        }
    }

    for (var nilai = 1; nilai < 101; nilai += 2){
        if (nilai%3 === 0){
            console.log(nilai + " KELIPATAN 3");
        }
        else{
            console.log("");
        }
    }

    for (var nilai = 1; nilai < 101; nilai += 5){
        if (nilai%6 === 0){
            console.log(nilai + " KELIPATAN 6");
        }
        else{
            console.log("");
        }
    }

    for (var nilai = 1; nilai < 101; nilai += 9){
        if (nilai%10 === 0){
            console.log(nilai + " KELIPATAN 10");
        }
        else{
            console.log("");
        }
    }