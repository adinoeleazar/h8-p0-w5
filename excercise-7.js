// var string = 'Walaupun re3gex ban99yak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
// console.log(string.match(/[a-z,0-9]+/gi));

function hapusSimbol(str) {
    // you can only write your code here!

    // cara 1
    // var result = str.match(/[a-z,\d]+/gi)

    // cara 2
    var result = str.match(/[a-z]+|\d+/gi)

    return result.join('')
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100