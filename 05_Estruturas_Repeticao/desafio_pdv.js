// =========================================================================
// DESAFIO EXTRA: SIMULADOR DE MINI-PDV (PONTO DE VENDA)
// Curso: Programador de Sistemas - Senac Centro
// =========================================================================
//
// CONTEXTO:
// Você foi contratado para desenvolver a lógica de fechamento de vendas de
// uma mercearia de bairro. O sistema interativo rodará no terminal e
// processará o carrinho de compras do cliente, aplicando descontos de
// fidelidade progressivos e formas de pagamento flexíveis.
//
// REQUISITOS E DIVISÃO DO PROBLEMA EM PARTES:
//
// -------------------------------------------------------------------------
// PARTE 1: Loop de Compra (Entrada de Dados)
// -------------------------------------------------------------------------
// 1. O programa deve iniciar exibindo uma mensagem de boas-vindas.
// 2. Utilizando uma estrutura de repetição "while", peça repetidamente para
//    o usuário digitar o preço dos produtos adquiridos (use prompt-sync).
// 3. A inserção de valores deve continuar até que o usuário informe um
//    valor menor ou igual a zero (ex: 0 ou -5), o que indica que a lista de
//    compras foi finalizada.
// 4. Conforme os produtos são inseridos, o programa deve ir somando seus
//    valores em uma variável acumuladora chamada "totalBruto".
//
// -------------------------------------------------------------------------
// PARTE 2: Cálculo de Desconto Progressivo
// -------------------------------------------------------------------------
// Depois que o loop terminar, aplique as seguintes regras de desconto sobre
// o "totalBruto" utilizando estruturas condicionais encadeadas (if/else if):
// - Compras abaixo de R$ 50.00: Sem desconto (0%).
// - Compras de R$ 50.00 até R$ 100.00: Ganha 5% de desconto.
// - Compras acima de R$ 100.00: Ganha 10% de desconto.
//
// Imprima de forma organizada no terminal:
// - O Total Bruto: R$ X
// - O Valor de Desconto aplicado: R$ Y
// - O Total Líquido (Total Bruto - Desconto): R$ Z
//
// -------------------------------------------------------------------------
// PARTE 3: Escolha da Forma de Pagamento
// -------------------------------------------------------------------------
// Apresente na tela o seguinte menu de opções de pagamento:
//   "Selecione a forma de pagamento:"
//   "1 - Dinheiro"
//   "2 - Pix"
//   "3 - Cartão de Crédito"
//
// Peça a entrada do usuário e processe-a utilizando a estrutura "switch/case":
// - Se a opção for 1 (Dinheiro) ou 2 (Pix):
//   O cliente ganha um desconto adicional de 5% sobre o "totalLiquido" calculado na Parte 2.
//   Exiba: "Pagamento em Dinheiro/Pix confirmado. Desconto de 5% aplicado!"
// - Se a opção for 3 (Cartão de Crédito):
//   Não há desconto adicional.
//   Exiba: "Pagamento em Cartão de Crédito confirmado."
// - Caso seja digitada qualquer outra opção inválida:
//   Exiba: "Opção inválida. Pagamento padrão no Cartão sem desconto adicional."
//
// No final do programa, exiba com clareza o valor final a ser pago pelo cliente.
//
// =========================================================================

const prompt = require('prompt-sync')();

console.log("=== BEM-VINDO AO MINI-PDV SENAC ===");
// Escreva o código do desafio abaixo seguindo as partes instruídas:


