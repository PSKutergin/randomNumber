'use strict'

let main = () => {
  let num = parseInt(Math.random() * 100)

  return function result(attempt) {
    let again
    let userNum

    if (attempt === 0) {
      again = confirm('Попытки закончились, хотите сыграть еще?')
      if (again) {
        num = parseInt(Math.random() * 100)
        result(10)
      } else {
        return
      }
    }

    userNum = prompt('Угадай число от 1 до 100')

    if (isNaN(userNum) || userNum === '') {
      alert('Введи число!')
      result(attempt)
    }
    if (userNum === null) {
      alert('Игра окончена')
      return
    }

    attempt--
    console.log(attempt, num)

    if (num === +userNum) {
      again = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')
      if (again) {
        num = parseInt(Math.random() * 100)
        result(10)
      } else {
        return
      }
    } else if (num > +userNum) {
      alert('Загаданное число больше, осталось попыток ' + attempt)
      result(attempt)
    } else if (num < +userNum) {
      alert('Загаданное число меньше, осталось попыток ' + attempt)
      result(attempt)
    }
  }
}

let start = main()
start(10)
