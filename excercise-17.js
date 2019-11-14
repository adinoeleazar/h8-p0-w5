function kaliTerusRekursif(angka) {
    // you can only write your code here!

    // // var angkaPertama = strAngka[0]
    // var result = angka
    // var mulai = angka
    // // while loop selama result diatas 10 atau dia null

    // Jika angka masih lebih besar dari 10
        // maka -> Melakukan looping perkalian dan memanggil fungsi secara rekursif
        //         dengan parameter hasil dari yang sudah di loop
    // jika angka lebih kecil dari 10
        // maka -> Return angka tersebut

    // while (result >= 10) {
    //     result = 1

        // for (var i = 0; i < String(mulai).length; i++) {

        //    result *= Number(String(mulai)[i])  
        // }
    //     mulai = result
        
    // }
        
    

    var result = String(angka)
    var start = Number(result[0])
    // var mulai = angka

    if (Number(result) < 10) {return result}

    else {
        for (var i = 1; i < result.length; i++) {

            start *= Number(result[i])
         }
    }
    return kaliTerusRekursif(start)
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6