// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userInput = document.querySelector('#userNameInput')
const searchButton = document.querySelector('#getUserButton')
const userCity = document.querySelector('#userCity')

function searchSity() {
    fetch(`https://jsonplaceholder.typicode.com/users?name=${userInput.value}`)
          .then(res => res.json())
          .then(data => userCity.innerHTML = data[0].address.city
    )
    userInput.value = '';
}

searchButton.addEventListener('click', searchSity)