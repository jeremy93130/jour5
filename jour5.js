// Alphabet 
function sortLetters(string) {
  var alphabetical = string.split("")
  var alphabet = alphabetical.sort()
  alphabet = alphabetical.join("")
  return alphabet
}
var result = sortLetters("konnexio")
console.log(result)

// XOXO 

function countEach(x) {

  var countX = 0
  var countO = 0
  for (var i = 0; i < x.length; i++) {
    if (x[i] === "x") {
      countX++
      // console.log(countX)
    } else if (x[i] === "o") {
      countO++
      // console.log(countO)
    }



  } if (countX === countO) {
    return true
  } else {
    return false
  }
}

var blabla = countEach("xoxo")
console.log(blabla)

// palindrome

function checkpal(string) {
  var palindrome = string.split("")
  var palindrome1 = palindrome.reverse()
  var palindrome2 = palindrome1.join("")
  if (palindrome === "") {
  } else if (string === palindrome2) {
    return "Palindrome !"
  } else {
    return `${palindrome2} n'est pas un palindrome`
  }


}
var pal = checkpal("racecar")
console.log(pal)

// Swap

// function swap(string) {
//   var sentence = ""

//   for (var i = 0; i < string.length; i++) {
//     if (string[i] !== string[i].toUpperCase()) {
//       sentence +=string[i].toUpperCase()
//     } else {
//       sentence += string[i].toLowerCase()
//     } 
//   }

//   console.log(sentence)
// }

// swap("MaDame ZouZou")


// function swap(string) {
//   var sentence = ""

//   for (var i = 0; i < string.length; i++) {
//     if (string[i] !== string[i].toUpperCase()) {
//       sentence += string[i].toUpperCase()
//     } else {
//       sentence += string[i].toLowerCase()
//     }
//   } return sentence



// }
// var resultat = swap("MaDame ZouZou")
// console.log(resultat)



function swap(string) {
  var sentence = ""

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      sentence += string[i].toLowerCase()
    } else {
      sentence += string[i].toUpperCase()
    }
  } return sentence



}
var resultat = swap("MaDame ZouZou")
console.log(resultat)



// Bonus : 

function makeItSpongeBob(string) {
  var sentence = ""

  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0 || string[i].toUpperCase() === " ") {
      sentence = sentence + string[i].toUpperCase()
    } else { 
      sentence = sentence + string[i].toLowerCase()
    }
  } return sentence
}

var result = makeItSpongeBob("Javascript is easy")
console.log(result)

// Bonus II :

function sortLetters(string) {
  var alphabetical = string.split("")
  var alphabet = alphabetical.sort()
  alphabet = alphabetical.slice(0, 1)
  alphabet = alphabetical.join("")
  return alphabet
}
var result = sortLetters("koNeXio")
console.log(result)


// Bonus III :

function countEach(x) {

  var countX = 0
  var countO = 0
  for (var i = 0; i < x.length; i++) {
    if (x[i] === "x" || x[i].toUpperCase() === "X") {
      countX++
      console.log(countX)
    } else if (x[i] === "o" || x[i].toUpperCase() === "O") {
      countO++
      console.log(countO)
    } else {
      return "Fatal Error ! "
    }
  }

    if (countX === countO) {
    return true
  } else {
    return false

  }
}

var blabla = countEach("xoxoXOXOXxOo")
console.log(blabla)














