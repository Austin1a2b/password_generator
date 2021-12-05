function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatePassword(options) {
  // define things user might want
  // 設定 全部參數
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  //使用者選擇要的參數

  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove things user do not need
  //將 不要的字串 從清單中  移除 

  if (options.excludeCharacters) {
    collection = collection.filter((character) => !options.excludeCharacters.includes(character))
  }

  // start generating password
  //隨機抽取字串
  let password = ''
  for (let i = 1; i <= Number(options.length); i++) {
    password += sample(collection)
  }
  // return the generated password
  return password
}

// export generatePassword function for other files to use
module.exports = generatePassword