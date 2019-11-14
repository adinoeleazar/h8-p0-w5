function kaliTerusRekursif(angka) {
    // you can only write your code here!

    var result = String(angka)
    var start = Number(result[0])

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