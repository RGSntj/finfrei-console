import { exibirMenu } from "./menu.js";
import {
  depositar,
  sacar,
  simularInvestimento,
  verSaldo,
} from "./financeiro.js";
import { ALERTA, ERRO, SUCESSO } from "./cores.js";
import { limparTerminal } from "./exibicao.js";

import prompt from "prompt-sync";

let ler = prompt();

let continuar = true;

let saldo = 0;

while (continuar) {
  // console.clear();
  let opcao = exibirMenu();

  if (opcao == 1) {
    let deposito = Number(ler("Digite a quantia do deposito > "));

    let novoSaldo = depositar(saldo, deposito);

    saldo = novoSaldo;
    limparTerminal(SUCESSO, "Deposito realizado com sucesso !!");
  } else if (opcao == 2) {
    let novoSaque = sacar(saldo);
    saldo = novoSaque;
    limparTerminal(SUCESSO, "Saque realizado com sucesso !!");
  } else if (opcao == 3) {
    let saldoAtual = verSaldo(saldo);
    limparTerminal(ALERTA, saldoAtual);
  } else if (opcao == 4) {
    // Simular Investimento
    let capitalInicial = Number(
      ler("Informe a capital inicial para simular o juros > ")
    );

    let tempo = Number(ler("Digite o tempo de investimento > "));

    let juros = Number(ler("Digite o juros > "));

    let investimentoTotal = simularInvestimento(capitalInicial, tempo, juros);

    limparTerminal(SUCESSO, `O investimento total é de ${investimentoTotal}`);
  } else if (opcao == 5) {
    continuar = false;

    limparTerminal(ALERTA, "Operação encerrada !!");
  }
}

// console.log(saldo);
