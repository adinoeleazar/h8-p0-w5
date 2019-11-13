// REKURSIF ==> PROSES LOOP BIASA TANPA FOR ATAUPUN WHILE
// =========
// 1. BASE CASE => KAPAN PROSES INI BERHENTI MEMANGGIL DIRINYA SENDIRI
// 2. PANGGIL DIRI SENDIRI
// 3. RETURN VALUE

// PROSES FUNCTION MEMANGGIL DIRINYA SENDIRI UNTUK MENGERJAKAN HAL YANG SERUPA


function tungItung(sentence) {
    var total = 0; // 2
    for (var i = 0; i < sentence.length; i++) { //i = 2
      if (isNaN(sentence[i]) === false) {
        total = total + Number(sentence[i]);
      } else {
        total = total + 0
      }
    }
  
    return total
  }
  
  function tungItungRec(sentence) {
    if (sentence.length === 0) {
      return ''
    } else {
      if (isNaN(sentence[0]) === false) {
        return Number(sentence[0]) + tungItungRec(sentence.slice(1));
      } else {
        return tungItungRec(sentence.slice(1));
      }
    }
  }
  
  var hasil = tungItungRec('25a3')
  console.log(hasil);
  
  //PROSES
  // sentence = '25a3'
  // return 2 + tungItungRec('5a3') //10
  // 
  // sentence = '5a3'
  // return 5 + tungItungRec('a3') // 8
  // 
  // sentence = 'a3'
  // return tungItungRec('3') //3
  // 
  // sentence = '3'
  // return 3 + tungItungRec('')
  // 
  // sentence = ''
  // return 0