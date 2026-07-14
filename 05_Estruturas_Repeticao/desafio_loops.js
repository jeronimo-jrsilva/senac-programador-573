// =========================================================================
// SENAC CENTRO - PROGRAMADOR DE SISTEMAS
// DESAFIO INTEGRADOR - SISTEMA DE CAIXA REGISTRADORA
// =========================================================================
// OBJETIVO:
// Este desafio reúne todos os tópicos estudados até o momento:
// - Variáveis e tipos de dados (String, Number, Boolean)
// - Operadores (Aritméticos, Relacionais, Lógicos)
// - Estruturas Condicionais (if/else, switch/case)
// - Estruturas de Repetição (while, for)
//
// REQUISITO:
// NÃO utilizar coleções ou arrays (como colchetes [] ou listas), pois
// ainda não cobrimos esse conteúdo. Use acumuladores simples!
// =========================================================================

const prompt = require('prompt-sync')();

console.log("=================================================");
console.log("       🛒 SISTEMA DE CAIXA REGISTRADORA          ");
console.log("               SENAC CENTRO                      ");
console.log("=================================================");

// ---------------------------------------------------------
// PASSO 1: Configuração Inicial
// ---------------------------------------------------------
// Peça para o usuário digitar o nome do operador do caixa e exiba uma
// saudação de boas-vindas para iniciar o turno de trabalho.

let operador = prompt("Digite o nome do operador de caixa: ");
console.log(`\n🔋 Turno iniciado! Bom trabalho, ${operador}.\n`);

// ---------------------------------------------------------
// PASSO 2: Loop de Registro de Produtos (while)
// ---------------------------------------------------------
// Regras de negócio:
// A) Crie variáveis para:
//    - "totalGeral" (acumulador para o preço total da compra)
//    - "totalItens" (acumulador para a quantidade total de itens registrados)
//    - "continuarCompra" (boolean que controla a repetição do loop, iniciando em true)
//
// B) O loop deve rodar enquanto "continuarCompra" for true.
// C) A cada ciclo do loop, solicite:
//    - Nome do produto (String)
//    - Preço unitário (Number)
//    - Quantidade comprada (Number)
//
// D) Calcule o subtotal deste produto (preco * quantidade).
// E) Atualize os acumuladores "totalGeral" e "totalItens".
// F) Exiba no console o subtotal do item atual de forma legível.
// G) Pergunte ao usuário se ele quer adicionar mais produtos (s/n).
//    - Se a resposta for "n" ou "N", mude "continuarCompra" para false.

let totalGeral = 0;
let totalItens = 0;
let continuarCompra = true;

console.log("--- INICIANDO REGISTRO DE COMPRA ---");

// Escreva o loop de compras abaixo:




// ---------------------------------------------------------
// PASSO 3: Resumo da Compra e Escolha de Pagamento
// ---------------------------------------------------------
// Se nenhum item foi registrado (totalGeral === 0), encerre o programa.
// Caso contrário, exiba o total acumulado e a quantidade total de itens,
// e solicite a forma de pagamento com o seguinte menu:
//
// 1 - Dinheiro
// 2 - Cartão (Débito ou Crédito)
// 3 - Pix (Ganhe 5% de Desconto!)
//
// Use um switch/case para tratar a escolha do usuário.

// Escreva o menu de escolha de pagamento abaixo:




// ---------------------------------------------------------
// PASSO 4: Regras de Pagamento (switch/case)
// ---------------------------------------------------------
// Implemente as regras de negócio para cada caso do switch:
//
// --- CASO 1 (Dinheiro):
// A) Solicite ao usuário o valor pago pelo cliente (Number).
// B) Se o valor pago for MENOR que o "totalGeral", use um loop "while" para
//    exigir o valor restante. O loop deve continuar pedindo dinheiro complementar
//    até que a soma dos pagamentos seja maior ou igual ao total.
// C) Calcule e exiba o troco a ser entregue ao cliente.
//
// --- CASO 2 (Cartão):
// A) Pergunte em quantas parcelas deseja pagar (de 1 a 3 vezes sem juros).
// B) Valide a entrada das parcelas (deve ser 1, 2 ou 3). Se for inválida, considere 1 parcela.
// C) Calcule o valor de cada parcela e exiba na tela de forma amigável.
// D) Simule o pagamento imprimindo "Aguardando aprovação do cartão..." e depois "Aprovado!".
//
// --- CASO 3 (Pix):
// A) Aplique um desconto de 5% sobre o valor "totalGeral".
// B) Exiba o valor com desconto e imprima um QR Code fictício ou chave Pix.
// C) Exiba a confirmação do pagamento recebido.
//
// --- CASO DEFAULT:
// A) Informe que a opção de pagamento é inválida. O pagamento deve ser processado
//    como Cartão em 1x (à vista) por segurança.

// Escreva as regras de cada forma de pagamento abaixo:




// ---------------------------------------------------------
// PASSO 5: Emissão de Cupom Fiscal Fictício
// ---------------------------------------------------------
// Ao final de todo o processamento de pagamento, imprima um cupom fiscal
// formatado no console contendo:
// - Nome da loja (ex: SUPERMERCADO SENAC CENTRO)
// - Nome do Operador
// - Quantidade total de itens comprados
// - Valor Final Pago
// - Mensagem final de agradecimento ("Volte Sempre!")

console.log("\n=================================================");
console.log("           CUPOM FISCAL EMITIDO                  ");
console.log("=================================================");
// Escreva seu código de impressão do cupom abaixo:


