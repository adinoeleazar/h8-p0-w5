function changeVocals (str) {
    //code di sini
    var result = ''
    

    for (var i = 0; i < str.length; i++) {

        if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' || str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O') {
            var hurufBaru = str[i].charCodeAt() + 1
            result += String.fromCharCode(hurufBaru)
        }

        else {result += str[i]}
    }
    return result
  }
  
  function reverseWord (str) {
    //code di sini
    var result = ''

    for (var i = str.length-1; i >= 0; i--) {

        result += str[i]
    }
    return result
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var result = ''

    for (var i = 0; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {result += str[i].toLowerCase()}
        else if (str[i] === str[i].toLowerCase()) {result += str[i].toUpperCase()}
    }
    return result
  }
  
  function removeSpaces (str) {
    //code di sini
    var result = ''

    for (var i = 0; i < str.length; i++) {

        if (str[i] !== ' ') {result += str[i]}
    }
    return result
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {return 'Minimal karakter yang diinputkan adalah 5 karakter'}

    var vocals = changeVocals(name)
    var reverse = reverseWord(vocals)
    var lU = setLowerUpperCase(reverse)

    return removeSpaces(lU)
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'