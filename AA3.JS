const form = document.getElementById('formCadastro');
const tabelaUsuarios = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];
function adicionarUsuario(nome, email) {
    const novaLinha = tabelaUsuarios.insertRow();
    const colunaNome = novaLinha.insertCell(0);
    const colunaEmail = novaLinha.insertCell(1);
    colunaNome.textContent = nome;
    colunaEmail.textContent = email;}
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    adicionarUsuario(nome, email);
    form.reset();
});
