/*
==========
negaraKota
==========

yaitu sebuah program khusus untuk mengelompokkan data yang berserakan 
berupa negara dan kota dari internet berupa array multidimensi. 

[INSTRUCTION]
tugas kalian adalah merapikan 
data yg di dapat tersebut menjadi object literal yg mudah di baca.

untuk dapat mengetahui perbedaan antara data negara dan kota adalah : 
1. negara 
bentuk data negara berupa array yg berisi 3 data yaitu : 
[n,a,b]
n = penanda kalau ini data negara 
a = kode negara , yang nanti nya sebagai acuan penyocok dengan data kota 
b = nama negara , yang akan menjadi key output
2. kota 
bentuk data kota berupa array yg berisi 2 data yaitu : 
[a,c]
a = kode negara , yang nanti nya sebagai acuan penyocok dengan data negara
c = nama kota , yang nantinya akan di pasangkan dengan nama negara masing - masing 

[EXAMPLE] 
input : [
["n","id","Indonesia"],["id","Jakarta"],["n","usa","Amerika Serikat"],
["id","Surabaya"],["usa","New York"],["usa","Washington DC"],["usa","California"],
["n","ch","China"],["ch","Beijing"],["n","ind","India"],["ch","Shanghai"],["ind","Bangalore"],
["ind","New Delhi"],["n","ru","Rusia"],["ru","Moscow"]
]
maka outputnya :
{   
    Indonesia: [ 'Jakarta', 'Surabaya' ],
    'Amerika Serikat': [ 'New York', 'Washington DC', 'California' ],
    China: [ 'Beijing', 'Shanghai' ],
    India: [ 'Bangalore', 'New Delhi' ],
    Rusia: [ 'Moscow' ] 
}

[RULE]
- Dilarang menggunakan build in function array apapun kecuali push() 
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()
*/

var input = [
    ["n","id","Indonesia"],["id","Jakarta"],["n","usa","Amerika Serikat"],
    ["id","Surabaya"],["usa","New York"],["usa","Washington DC"],["usa","California"],
    ["n","ch","China"],["ch","Beijing"],["n","ind","India"],["ch","Shanghai"],["ind","Bangalore"],
    ["ind","New Delhi"],["n","ru","Rusia"],["ru","Moscow"]
    ];

function perapihan(input){
    var data = [];

    for (i=0 ; i<input.length ; i++){
        if (input[i].length == 3){
            data.push([input[i]]);
        }
    }

    for (i=0 ; i<input.length ; i++){
        if (input[i].length == 2){
            for(j=0 ; j<data ; j++){
                if (input[i][0] == data[j][1]){
                    data[j].push(input[i]);
                }
            }
        }
    }
    return data

}

console.log(perapihan(input))