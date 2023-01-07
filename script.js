function check(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let cpf = document.getElementById('cpf').value
    let phone = document.getElementById('phone').value
    let password = document.getElementById('password').value 
    let form = document.getElementById('form').value

    let texto1 = document.getElementById('texto1')
    let texto2 = document.getElementById('texto2')
    let texto3 = document.getElementById('texto3')
    let texto4 = document.getElementById('texto4')
    let texto5 = document.getElementById('texto5')
    

    let text = document.getElementById('text')

    if(name, email, cpf, phone, password == ''){
        texto1.textContent = 'Campo obrigatório'
        texto1.style.color = 'red'

        texto2.textContent = 'Campo obrigatório'
        texto2.style.color = 'red'

        texto2.textContent = 'Campo obrigatório'
        texto2.style.color = 'red'

        texto3.textContent = 'Campo obrigatório'
        texto3.style.color = 'red'

        texto4.textContent = 'Campo obrigatório'
        texto4.style.color = 'red'

        texto5.textContent = 'Campo obrigatório'
        texto5.style.color = 'red'

        text.textContent = 'Campos obrigatórios não registrados'
        text.style.color = 'red'
        event.preventDefault()
    }
    
 else {
    text.textContent = 'Sucesso'
    text.style.color = 'green'
}
}
    
    
    

