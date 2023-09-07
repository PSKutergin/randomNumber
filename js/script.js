'use strict'

let main = () => {
  let num = parseInt(Math.random() * 100)
  return function result() {
    userNum = prompt('Угадай число от 1 до 100')

    if (isNaN(userNum) || userNum === '') {
      alert('Введи число!')
      result()
    }
    if (userNum === null) {
      alert('Игра окончена')
      return
    }
    if (num === +userNum) {
      alert('Поздравляю, Вы угадали!!!')
      return
    } else if (num > +userNum) {
      alert('Загаданное число больше')
      result()
    } else if (num < +userNum) {
      alert('Загаданное число меньше')
      result()
    }
  }
}

let start = main()
start()
