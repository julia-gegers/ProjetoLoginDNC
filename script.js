function check()
{
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let cpf = document.getElementById('cpf').value
    let phone = document.getElementById('phone').value
    let password = document.getElementById('password').value 

    let avisoName = document.getElementById('avisoName')
    let avisoEmail = document.getElementById('avisoEmail')
    let avisoCpf = document.getElementById('avisoCpf')
    let avisoPhone = document.getElementById('avisoPhone')
    let avisoPassword = document.getElementById('avisoPassword')
    let mensagem = document.getElementById('mensagem')
	
    let isErro = false;
	avisoName.textContent = '';
	avisoEmail.textContent = '';
	avisoCpf.textContent = '';
	avisoPhone.textContent = '';
	avisoPassword.textContent = '';
	mensagem.textContent = '';
	
    if( name == '' )
	{
        avisoName.textContent = 'Campo obrigatório'
        isErro = true;
    }

    if( email == '' )
    {
        avisoEmail.textContent = 'Campo obrigatório'
        isErro = true;
    }

    if( phone == '' )
    {
        avisoPhone.textContent = 'Campo obrigatório'
        isErro = true;
    }

    if( cpf == '' )
    {
        avisoCpf.textContent = 'Campo obrigatório'
        isErro = true;
    }

    if( password == '' )
    {
        avisoPassword.textContent = 'Campo obrigatório'
        isErro = true;
    }

    if( isErro == true )
    {
        mensagem.textContent = 'Campos obrigatórios não registrados';
		mensagem.style.color = 'red';
        event.preventDefault();
		return;
    }

	mensagem.textContent = 'Sucesso';
	mensagem.style.color = 'green';
}