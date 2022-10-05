const nome = prompt("come ti chiami?");
const cognome = prompt("qual'è il tuo cognome?");
const colore = prompt("qual'è il tuo colore preferito?");
const eta = prompt("quanti anni hai?");
console.log(document.getElementById("testo") )
document.getElementById("testo").innerHTML = nome + " " +cognome + " " + colore + " " + eta;