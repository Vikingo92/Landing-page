const form = document.getElementById('form')
const anchor = document.getElementById('ancla')

form.addEventListener('submit', enviar)

function enviar(eve) {
    eve.preventDefault()

    const data = new FormData(this)
    // console.log(form.get('name'));
    anchor.setAttribute('href', `meilto:a.linares749@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
    anchor.click()
}
