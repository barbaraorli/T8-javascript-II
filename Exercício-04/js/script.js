let pinguim = {
    "nome":"Pingo",
    "idade": 39,
    "estado civil": "divorciado", 
    "origem": "Fernado de Noronha",
    fazerBarulho: function()
}
pinguim.andar = function() {
    console.log("Andou")
}
pinguim.podeVoar = false

pinguim.voar = function() {
    if(this.podeVoar) {
        console.log("Só voa Pingo");
    }else{
        console.log("Fica quieto ai mano");
    }
}
