// task-1
function getRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.send();
    });
}

document.querySelector('button').addEventListener('click', () => {
    getRequest('GET', 'https://jsonplaceholder.typicode.com/users')
        .then(data => data.forEach(el => {
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                <div class="card-body">
                    <div>name: ${el.name}</div>
                    <div>username: ${el.username}</div>
                    <div>email: ${el.email}</div>
                </div>
            `
            document.querySelector('.main').appendChild(div)
        }));
});