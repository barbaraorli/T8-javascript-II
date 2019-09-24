const muitosGatos = document.querySelectorAll(".item__imagem")

// muitosGatos.forEach(function(gato) {
//     gato.addEventListener("click", function(evento){
//         evento.target.classList.add("invisivel");
//     })
// })

muitosGatos.forEach(function(gato) {
    gato.addEventListener("click", function(evento) {
        if(gato.classList.contains("invisivel")) {
            gato.classList.remove("invisivel")
        }else{
            gato.classList.add("invisivel")
        }
    })
})



// const imagemGatinho = document.querySelectorAll(".item__imagem")

// for (let i = 0; i < imagemGatinho.length; i++){
//     imagemGatinho[i].addEventListener("click", function(){
//         if (imagemGatinho[i].classList.contains("remover")){
//             imagemGatinho[i].classList.remove("remover")
//         } else{
//             imagemGatinho[i].classList.add("remover")
//         }
//     })
// }