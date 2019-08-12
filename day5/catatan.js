

// - minimal 8 character

// - harus ada Uppercase

// - harus ada lowercase

// - harus ada angka

​

function validatePassword(password) {

  var longerOrEqualTo8 = password.length >= 8

  var hasUpperCase = false

  var hasLowerCase = false

  var hasNumber = false

  

  for (var i = 0; i < password.length; i++) {

    if (password[i].toUpperCase() === password[i]) {

      hasUpperCase = true

    } else if (password[i].toLowerCase() === password[i]) {

      hasLowerCase = true

    }

​

    if (Number(password[i]) || password[i] === '0') {

      hasNumber = true

    }

  }

​

  return (longerOrEqualTo8 && hasUpperCase && hasLowerCase && hasNumber) 

}

​

​

​

console.log(validatePassword('aaaaaaaaaaaaaa'))

console.log(validatePassword('asds'))

console.log(validatePassword('asdsasdasd'))

console.log(validatePassword('asdsaABasd'))

console.log(validatePassword('as12ABasd'))

console.log(validatePassword('as0ABasd'))

