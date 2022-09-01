// index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
//     котра має детальну інфорацію про об'єкт на який клікнули

let blocs = document.createElement('div');
blocs.classList.add('main');
document.body.appendChild(blocs);

let userContainer = document.getElementsByClassName('main')[0];

fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()).then(users => {
    for (let user of users) {
        let bloc = document.createElement('div');
        bloc.classList.add('user');
        bloc.innerHTML = `<h5>${user.id} ${user.name}</h5>`

        let btn = document.createElement('button');
        let anchor = document.createElement('a');
        anchor.innerText = 'user-details';
        anchor.href = `./user-details.html?data=${JSON.stringify(user)}`;


        bloc.appendChild(btn);
        blocs.appendChild(bloc);
        btn.appendChild(anchor);
    }
})