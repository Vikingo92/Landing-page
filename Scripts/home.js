const btn = document.getElementById('login')


btn.addEventListener('click', login)

function login(eve) {
    eve.preventDefault()
    setTimeout(() => location.href='../index/login.html', 100);
}
