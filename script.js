let key = document.getElementById('display_key_container')
let number = document.getElementById('display_number_container')


document.addEventListener('keyup', (event) => {
    let name = event.key

    let code = event.which;
    key.innerHTML = (`You Pressed: <h4>${name}</h4>`)



    number.innerHTML = (`${code}`)
    number.style.display = "flex"
    key.style.fontSize = "50px"



}, false);


