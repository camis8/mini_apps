/**
 * Validação da maioridade
 * @author Camila
 * 
 */

// Função para validação de maioridade
function validar(event) {
    // a linha abaixo anula o comportamento padrao de envio do formulário
    //alert("teste de envio") (trava)
    event.preventDefault()
    let nome = document.getElementById('nome').value
    //alert(nome)
    //console.log(nome)
    let idade = document.getElementById('idade').value
    
    // Saída
    document.getElementById('aluno').value = `Aluno: ${nome}`

    if (idade<18) {
    
        document.getElementById('status').value = "menor de idade"
    }else {
        document.getElementById('status').value = "maior de idade"
    }
}