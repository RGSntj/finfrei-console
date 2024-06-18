import prompt from "prompt-sync";
import { limparTerminal } from "./exibicao.js";
import { ERRO } from "./cores.js";

let ler = prompt();

function depositar(saldo, deposito) {
  // let deposito = Number(ler("Digite a quantia que deseja depositar > "));

  while (deposito <= 0) {
    limparTerminal(ERRO, "Valor de deposito tem que ser maior que 0");
    deposito = Number(ler("Digite a quantia que deseja depositar > "));
  }

  let novoSaldo = saldo + deposito;

  return novoSaldo;
}

function simularInvestimento(capitalInicial, tempo, juros) {
  let jurosDecimal = juros / 100 + 1;

  let totalFinal = capitalInicial * jurosDecimal ** tempo;

  return totalFinal.toFixed(2);
}

function verSaldo(saldo) {
  return `Seu saldo atual é de R$ ${saldo.toFixed(2)}`;
}

function sacar(saldo, saque) {
  while (saque > saldo) {
    limparTerminal(ERRO, "Quantia invalida !!");
    saque = Number(ler("Digite a quantia que deseja sacar > "));
  }

  let novoSaldo = saldo - saque;

  return novoSaldo;
}

export { depositar, verSaldo, sacar, simularInvestimento };
