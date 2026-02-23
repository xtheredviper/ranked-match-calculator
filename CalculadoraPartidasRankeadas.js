let numeroPartidas = 200
let derrotas = 115
let vitorias = numeroPartidas - derrotas

let heroi = ["Doran", vitorias]

saldoDeVitorias()

function saldoDeVitorias(){
	let saldo = heroi[1];
    
	if(saldo < 10){
		return "Ferro";
	}

	else if(saldo >= 11 && saldo < 20){
		return "Bronze";

	}
	else if(saldo >= 21 && saldo < 50){
		return "Prata";

	}

	else if(saldo >= 51 && saldo < 80){
		return "Ouro";
	}

	else if(saldo >= 81 && saldo < 90){
		return "Diamante";
	}

	else if(saldo >= 91 && saldo < 100){
		return "Lendário";

	}

	else {
		return "Imortal";
	}


}


console.log(`O Herói tem de saldo de ${vitorias} e está no nível ${saldoDeVitorias()}`)