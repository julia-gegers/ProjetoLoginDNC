function check(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let cpf = document.getElementById('cpf').value
    let phone = document.getElementById('phone').value
    let password = document.getElementById('password').value 
    let form = document.getElementById('form')
    let texto1 = document.getElementById('texto1')
    let texto2 = document.getElementById('texto2')
    let texto3 = document.getElementById('texto3')
    let texto4 = document.getElementById('texto4')
    let texto5 = document.getElementById('texto5')
    

    let text = document.getElementById('text')

    if(form != ''){
        text.textContent = 'Sucesso'
        text.style.color = 'green'
    }

    
       
       
    
}