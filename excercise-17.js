function kaliTerusRekursif(angka) {
    // you can only write your code here!

    // var angkaPertama = strAngka[0]
    var result = angka
    var mulai = angka
    // while loop selama result diatas 10 atau dia null

    while (result >= 10) {
        result = 1

        for (var i = 0; i < String(mulai).length; i++) {

           result *= Number(String(mulai)[i])  
        }
        mulai = result
        
    }
        
    

return result

    // var stringAngka = String(angka)
    // var result = 1

    // if (stringAngka.length === 1) {return result}

    // else {return Number(stringAngka[0]) * kaliTerusRekursif(stringAngka.slice(1))}
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6