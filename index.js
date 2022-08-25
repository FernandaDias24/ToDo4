// ToDO 4  -  

const ent = require ('prompt-sync')({sigint: true});

let respostaUm;
let respostaDois;
let respostaTres;

respostaUm = ent ("Quem? ");
respostaDois = ent ("O que deseja? ");
respostaTres = ent ("Para que? ");

console.log ( 'Como' + " " + `${respostaUm}` + " " + 'deseja um' + " " + `${respostaDois}` + " " + 'para' + " " + `${respostaTres}`)
