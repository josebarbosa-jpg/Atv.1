let titulo = document.getElementById("titulo");
// console.log(titulo);

// let esport = document.getElementsByClassName("esport");
// console.log(esport[0]);

// let lista = document.getElementsByTagName("ul");
// console.log(lista[0]);

// let tituloQS = document.querySelector("#titulo");
// let listaQS = document.querySelector(".ul");
// console.log("Exibindo com Query Selector"+ tituloQS.textContent);
// console.log("Exibindo com QS a lista" + listaQS[0].textContent);

titulo.innerHTML = "<span style='color:blue'> Meus esportes favoritos </span>";

//Pegou o local da lista
let lista = document.getElementById("esport");

let novoItem = document.createElement("li");
novoItem.innerText = "Beach Tennis";
lista.appendChild(novoItem);

let novoItens = document.createElement("li");
novoItens.innerText = "Natação";
lista.appendChild(novoItens);