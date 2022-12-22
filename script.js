let notas = []; //criamos um array vazio 
let saida = ''; // e saida


// nesse for vamos fazser 5 loop em cada array
// nos mandando 5 pronpt para digitarmos as notas 
for (let index = 0; index < 5; index++) {
    notas[index] = prompt ('Informe a Nota Do ' + (index + 1) + "º Aluno"); // (index + 1) para abrir contagem começando de 1
    console.log (notas);
}

// aqui é para sair as 5 notas que nos informamos 
for (let index = 0; index < 5; index++)  {
    saida += "<br> A nota do " + (index + 1) + "º é:" + notas[index]; //sair cada array ... contagem do index ... e cada nota que colocamos 
}

document.write(saida); // saida para exibir na tela 