const alunas = ["Bárbara Silva", "Manu Maia", "Simara Conceição", "Lia Lobo", "Talita Barbosa", "Thais Aquino", "Aline Borges", "Angelica Garcia"]

const lista = document.getElementById("lista-alunas")

for(let i = 0; i < alunas.length; i++){
    let item = document.createElement("li");
    item.textContent = alunas[i];

    lista.appendChild(item);
}

let soma = 0

const meuTitulo = document.querySelector(."titulo")

meuTitulo.addEventListener("click", function logar)