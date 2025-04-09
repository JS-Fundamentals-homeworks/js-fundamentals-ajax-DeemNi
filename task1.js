// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

const clasList = document.querySelector('.usersList');

const userInfo = fetch('https://jsonplaceholder.typicode.com/users')
                    .then(res => res.json())
                    .then(data => data.forEach((el) => {
                        clasList.innerHTML += `
                        <li>${el.name}</li>
                        `
                    }))