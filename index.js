function logsNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i + ' Jackpot!')
        }
        else if (i % 3 == 0) {
            console.log(i + ' This is divisible by 3')
        }
        else if (i % 5 == 0) {
            console.log(i + ' This is divisible by 5')
        }
        else {
            console.log(i)
        }
    }
}
logsNumbers(1, 100)

const body = document.querySelector('body')
const btn = document.createElement('button')
btn.innerHTML = 'click me to get random IMAGE'
body.appendChild(btn)
const div = document.createElement('div')
body.appendChild(div)
btn.addEventListener('click', () => {
    const img = document.createElement('img')
    div.innerHTML = ''
    div.appendChild(img)
    const photoId = Math.floor(Math.random() * 100)
    img.src = `https://picsum.photos/id/${photoId}/400`
})

fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);

        body.appendChild(document.createElement('h1'))
        const title = document.querySelector('h1')
        title.innerHTML = `First three users are:`
        const users = data.data.filter(user => user.id < 4)
        users.forEach(element => {
            const li = document.createElement('li')
            body.appendChild(li);
            li.innerHTML = element.first_name;
        });
    });