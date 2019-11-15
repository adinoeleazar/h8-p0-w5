function faktorPrima(num) {
   //

   var remains = num

   var result = []

   while (remains > 1) {

    for (var i = 2; i <= remains; i++) { 

        if (remains % i === 0 && isFaktor(i) === true) {

            result.push(i)
            break
        }
    }
    remains /= i
}

return result;
}

function isFaktor (num) {
  //
  var result = true

  for (var i = 2; i < num; i++) {
    if (num%i === 0) {result = false}
  }
  return result
}

function inString (array) {
  //
  var result = ''
  var angka = {}

  for (var i = 0; i < array.length; i++) {

    if (angka[array[i]] === undefined) {angka[array[i]] = 1}
    else {angka[array[i]] += 1}
  }

  for (var x in angka) {
    if (angka[x] > 1) {result += x + '^' + angka[x]}
    else {
      if (result.length === 0) {result += x}
      else {result += 'x' + x}
    }
  }
return result
}

console.log((faktorPrima(12))) // output = [2, 2, 3] 
console.log((faktorPrima(34))) // output = [2, 17] 
console.log((faktorPrima(30))) // output = [2, 3, 5] 
console.log((faktorPrima(27))) // output = [3, 3, 3] 

console.log(inString(faktorPrima(12))) // output = '2^2x3'
console.log(inString(faktorPrima(34))) // output = '2x17'
console.log(inString(faktorPrima(30))) // output = '2x3x5'
console.log(inString(faktorPrima(27))) // output = '3^3'