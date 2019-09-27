const livro = [
    1 [
        titulo = "O Senhor dos Aneis",
        autor = "J R R Tolkien" ,
        link = "https://www.saraiva.com.br/box-trilogia-o-senhor-dos-aneis-3-volumes-10607020/p",
    ]
    2 [
        titulo = Javascript Eloquente,
        autor = Marjn Heverbeke,
        link = ,
    ]
    3 [
        titulo =  
        autor =  
        link = 
    ]
    4 [
        titulo =  
        autor =  
        link = 
    ]
]

const meuLivro = document.createElement("li")
listaMae.appendChild(meuLivro)
meuLivro.classList.add("livro")

const tituloLivro = document.createElement("h3")
meuLivro.appendChild(tituloLivro)
tituloLivro.textContent = livros[propriedade]["titulo"]
tituloLivro.classList.add("livro__titulo")

const nomeAutor = document.createElement("p")
meuLivro.appendChild(nomeAutor)
nomeAutor.textContent = livros[propriedade]["autor"]
nomeAutor.classList.add("livro__autoria")

const linkLivro = document.createElement("a")
meuLivro.appendChild(linkLivro)
linkLivro.setAttribute("href", objeto.link)
linkLivro.setAttribute("target", "_blank")
linkLivro.textContent = "Acessar meu site"
linkLivro.classList.add("livro__link")

const botaoJaLi = document.createElement("button")
meuLivro.appendChild(botaoJaLi)
botaoJaLi.classList.add("botao-lido")

const botaoDesfazer = document.createElement("button")
meuLivro.appendChild(botaoDesfazer)
botaoDesfazer.textContent = "Desfazer"
botaoDesfazer.classList.add("botao-desfazer")

botaoJaLi.addEventListener("click", function(){
    botaoJaLi.classList.add("livro_titulo--lido")
})

botaoDesfazer.addEventListener("click", function(){
    botaoJaLi.classList.add("botao-desfazer")
})
botaoJaLi.addEventListener("click", function(){
    if(tituloLivro.classList.contains("livro__titulo--lido")){
        tituloLivro.classList.remove("livro__titulo--lido")
        botaoJaLi.textContent = "Marcar como lido"
    }else{
        tituloLivro.classList.add("livro__titulo--lido")
        botaoJaLi.textContent = "Marcar como não lido"
        botaoJaLi.classList.add("botao-lido--vermelho")
    }
})

