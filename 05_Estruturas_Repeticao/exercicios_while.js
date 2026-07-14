// =========================================================================
// SENAC CENTRO - PROGRAMADOR DE SISTEMAS
// EXERCÍCIOS - TÓPICO: ESTRUTURAS DE REPETIÇÃO (LOOP WHILE)
// =========================================================================
// COLINHA DE REFERÊNCIA RÁPIDA (CHEAT SHEET)
// -------------------------------------------------------------------------
// 
// 1. O QUE É O LOOP WHILE?
//    Executa um bloco de código repetidamente ENQUANTO uma condição for verdadeira (true).
//
// 2. ESTRUTURA BÁSICA:
//    let contador = 1; // 1. Inicialização
//    while (contador <= 5) { // 2. Condição
//        console.log(contador);
//        contador++; // 3. Incremento (Evita Loop Infinito!)
//    }
//
// 3. IMPORTAR A BIBLIOTECA PROMPT-SYNC (Para ler do terminal):
//    const prompt = require('prompt-sync')();
//
// =========================================================================

const prompt = require('prompt-sync')();

// ------------------------------------------
// EXERCÍCIO 1: Contagem Progressiva (while)
// ------------------------------------------
// Instruções:
// A) Crie uma variável "contador" iniciando em 1.
// B) Crie um loop "while" que conte e imprima de 1 até 5 no console.
// C) Lembre-se de fazer o incremento (+1) no contador dentro do loop para evitar loop infinito!
//
// Exemplo de saída:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5

console.log("--- EXERCÍCIO 1: CONTAGEM PROGRESSIVA ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 2: Somador Dinâmico (while)
// ------------------------------------------
// Instruções:
// A) Crie uma variável "soma" iniciando em 0.
// B) Crie um loop "while" que peça números ao usuário repetidamente via prompt.
// C) O loop deve continuar pedindo números e somando-os, parando apenas
//    quando o usuário digitar o número 0.
// D) Ao final, exiba o resultado da soma de todos os números digitados.

console.log("\n--- EXERCÍCIO 2: SOMADOR DINÂMICO ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 3: Validador de Acesso (while)
// ------------------------------------------
// Instruções:
// A) Crie um script que peça a senha do sistema repetidamente via prompt.
// B) Enquanto a senha informada for diferente da senha correta "1234",
//    exiba uma mensagem de erro ("Senha incorreta! Tente novamente.") e peça a senha de novo.
// C) Quando o usuário digitar a senha correta, saia do loop e exiba "Acesso Concedido!".

console.log("\n--- EXERCÍCIO 3: VALIDADOR DE ACESSO ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 4: Menu Interativo de Mensagens (while)
// ------------------------------------------
// Instruções:
// A) Crie um menu interativo dentro de um loop "while" que exiba as seguintes opções:
//    1 - Receber uma saudação de bom dia
//    2 - Receber uma saudação de boa tarde
//    3 - Sair do menu
// B) Peça para o usuário digitar a opção desejada.
// C) Utilize a estrutura switch/case ou if/else para exibir a resposta correta:
//    - Se digitar 1: exiba "Bom dia, aluno Senac!"
//    - Se digitar 2: exiba "Bom tarde, programador!"
//    - Se digitar 3: exiba "Saindo do programa..." e encerre o loop.
//    - Se digitar qualquer outro valor: exiba "Opção inválida!" e repita o menu.

console.log("\n--- EXERCÍCIO 4: MENU INTERATIVO ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 5: Desafio - Jogo de Adivinhação (while)
// ------------------------------------------
// Instruções:
// A) Defina um número secreto fixo no código (ex: 7).
// B) Crie uma variável "tentativas" para contar quantas vezes o usuário tentou adivinhar.
// C) Crie um loop "while" que peça um palpite ao usuário.
// D) A cada palpite incorreto, informe se o palpite foi muito alto ou muito baixo, 
//    incremente as tentativas e peça novamente.
// E) Ao acertar, exiba: "Parabéns! Você acertou o número secreto [X] em [Y] tentativas!".

console.log("\n--- EXERCÍCIO 5: JOGO DE ADIVINHAÇÃO ---");
// Escreva seu código abaixo:


