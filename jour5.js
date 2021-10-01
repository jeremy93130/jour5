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

function swap(string) {
  var sentence = ""

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toUpperCase()) {
      sentence += string[i].toUpperCase()
    } else {
      sentence += string[i].toLowerCase()
    }
  }

  console.log(sentence)
}

swap("MaDame ZouZou")







