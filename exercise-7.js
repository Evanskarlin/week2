//soal 1:
    var rows1 = 5;

    for(var A = 0; A<rows1 ; A++){
        console.log("*");
    }

//soal 2:
    var rows2 = 5;
    var bintang = "";

    for(var A = 0; A<rows2 ; A++){
        for(var B = 0; B<rows2 ; B++){
            bintang = bintang + "*"
        }
        console.log(bintang);
        bintang = '';
    }

//soal 3:
    var rows2 = 5;
    var bintang = "";

    for(var A = 0; A<rows2 ; A++){
        for(var B = 0; B<=A ; B++){
            bintang = bintang + "*"
        }
        console.log(bintang);
        bintang = '';
    }