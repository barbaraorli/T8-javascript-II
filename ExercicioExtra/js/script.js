const formulario = document.getElementById("formulario-de-comentarios")
const myComment = document.getElementById("todos-os-comentarios")
const erro = document.querySelector(".mensagem-de-erro")


formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    let  inputUser = document.querySelector(".input-de-texto")

    let mensagem = inputUser.value
    console.log(mensagem)
    if(mensagem.trim() ===""){
        // alert("Preencha com um texto valido")
        erro.textContent = "Escreva algo válido"
    } else {
        let mensagemCopiada = document.createElement("p")
        mensagemCopiada.textContent = mensagem
        erro.textContent = null
        myComment.appendChild(mensagemCopiada)

        mensagemCopiada.classList.add("comentario")

        formulario.reset()
    }
})
