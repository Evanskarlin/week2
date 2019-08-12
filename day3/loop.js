var counter1 = 0
var limit1 = 5
while (counter1 < limit1) {
  counter1 = counter1 + 1
  console.log(counter1)
}

console.log('==========')

// INITIALIZATION
// LIMIT
// PROCESS

// while biasanya digunakan ketika jumlah iterasi mau berapa kali belum diketahui di awal
// sedangkan for digunakan ketika jumlah iterasi sudah fix berapa kalinya

var word = 'dggregdvdfndfzfsdfgf'

var zIsFound = false
var indeks = -1
while(zIsFound === false) {
  if (word[indeks] === 'z') {
    zIsFound = true
  }
  indeks++
}
console.log(indeks)

