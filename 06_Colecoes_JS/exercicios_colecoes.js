// =========================================================================
// SENAC CENTRO - PROGRAMADOR DE SISTEMAS
// EXERCÍCIOS - TÓPICO: COLEÇÕES EM JAVASCRIPT (ARRAYS & OBJETOS)
// =========================================================================
// COLINHA DE REFERÊNCIA RÁPIDA (CHEAT SHEET)
// -------------------------------------------------------------------------
//
// 1. O QUE SÃO ARRAYS?
//    Listas ordenadas de elementos acessados por índices inteiros (começando em 0).
//    - Criação: let alunos = ["Ana", "Bruno"];
//    - Acesso normal: alunos[0] ou alunos.at(0) (Ana)
//    - Acesso reverso: alunos.at(-1) (Bruno - último item)
//    - Tamanho: alunos.length (quantidade de elementos)
//
// 2. MÉTODOS DE MANIPULAÇÃO DE ARRAYS:
//    - .push(item)       ➔ Adiciona no final da lista.
//    - .pop()            ➔ Remove e retorna o último item.
//    - .unshift(item)    ➔ Adiciona no início da lista.
//    - .shift()          ➔ Remove e retorna o primeiro item.
//    - .splice(i, q, ns) ➔ Adiciona/remove itens em qualquer posição do índice 'i'.
//    - .includes(item)   ➔ Verifica se o item existe na lista (retorna true ou false).
//
// 3. O QUE SÃO OBJETOS LITERAIS?
//    Coleções de dados descritivos formadas por chaves e valores (dicionários).
//    - Criação: let celular = { marca: "Apple", preco: 5000 };
//    - Acesso: celular.marca ou celular["marca"]
//    - Criar/Alterar propriedades: celular.preco = 4500; celular.desconto = true;
//
// 4. PERCORRENDO LISTAS (ITERANDO):
//    - Usando for...of para ler itens um por um:
//      for (let item of lista) {
//          console.log(item);
//      }
//
// =========================================================================

// -------------------------------------------------------------------------
// PARTE 1: ARRAYS (LISTAS)
// -------------------------------------------------------------------------

// ------------------------------------------
// EXERCÍCIO 1: Lista de Compras (Array Básico)
// ------------------------------------------
// Instruções:
// A) Crie um array chamado "compras" contendo três itens que você compraria no mercado.
// B) Imprima no console o primeiro item desse array.
// C) Adicione um novo item no final do array usando o método apropriado.
// D) Exiba no console o tamanho total do seu array (quantidade de itens).

console.log("--- EXERCÍCIO 1: LISTA DE COMPRAS ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 2: Fila de Atendimento (Extremidades)
// ------------------------------------------
// Instruções:
// A) Crie um array chamado "fila" contendo os nomes: "Ana", "Bruno", "Carlos".
// B) Adicione o nome "Juliana" no início da fila usando o método adequado.
// C) Atenda (remova) a última pessoa da fila e exiba o nome dela no console.
// D) Imprima a fila atualizada.

console.log("\n--- EXERCÍCIO 2: FILA DE ATENDIMENTO ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 3: Ajuste de Playlist (Splice & Includes)
// ------------------------------------------
// Instruções:
// A) Crie um array chamado "playlist" com as músicas: "Yesterday", "Bohemian Rhapsody", "Halo".
// B) Substitua a música na posição de índice 1 (Bohemian Rhapsody) por "Starboy" usando .splice().
// C) Utilizando a estrutura "if/else" e o método ".includes()", verifique se a música "Yesterday" 
//    está na sua playlist. Se estiver, exiba "Yesterday está na playlist!".

console.log("\n--- EXERCÍCIO 3: PLAYLIST ---");
// Escreva seu código abaixo:




// -------------------------------------------------------------------------
// PARTE 2: OBJETOS LITERAIS (DICIONÁRIOS)
// -------------------------------------------------------------------------

// ------------------------------------------
// EXERCÍCIO 4: Ficha de Aluno (Objeto Básico)
// ------------------------------------------
// Instruções:
// A) Crie um objeto chamado "aluno" com as propriedades: nome (string), idade (number) e curso (string).
// B) Imprima no console uma frase usando template literals no formato:
//    "O aluno [nome] tem [idade] anos e está matriculado no curso de [curso]."

console.log("\n--- EXERCÍCIO 4: FICHA DE ALUNO ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 5: Alterando Propriedades
// ------------------------------------------
// Instruções:
// A) Crie um objeto chamado "celular" com as propriedades: marca, modelo e preco (number).
// B) Altere o preço do celular para um novo valor (dando desconto).
// C) Crie dinamicamente uma propriedade chamada "emEstoque" com o valor booleano true.
// D) Imprima o objeto completo no console.

console.log("\n--- EXERCÍCIO 5: ALTERANDO PROPRIEDADES ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 6: Cadastro de Pet
// ------------------------------------------
// Instruções:
// A) Crie um objeto chamado "pet" com as chaves: nome, especie (ex: cão, gato) e idade.
// B) Imprima a espécie do pet no console acessando a propriedade.
// C) Adicione dinamicamente a propriedade "vacinado" (booleano) e exiba o pet atualizado.

console.log("\n--- EXERCÍCIO 6: CADASTRO DE PET ---");
// Escreva seu código abaixo:




// -------------------------------------------------------------------------
// PARTE 3: LOOPS, CONDICIONAIS E INTEGRAÇÃO
// -------------------------------------------------------------------------

// ------------------------------------------
// EXERCÍCIO 7: Boletim Escolar (for...of)
// ------------------------------------------
// Instruções:
// A) Crie um array chamado "notas" contendo as notas: 8.5, 6.0, 7.5, 9.0.
// B) Crie uma variável "soma" iniciando em 0.
// C) Use o loop "for...of" para percorrer o array de notas e somá-las na variável.
// D) Calcule a média. Utilizando if/else, se a média for maior ou igual a 7, 
//    exiba "Aprovado!", senão exiba "Recuperação!".

console.log("\n--- EXERCÍCIO 7: BOLETIM ESCOLAR ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 8: Filtro de Preços (for...of + objetos)
// ------------------------------------------
// Instruções:
// A) Crie um array chamado "produtos" contendo 3 objetos. Cada objeto deve ter: nome e preco.
// B) Crie pelo menos um produto com preço acima de 100 reais e outros abaixo.
// C) Utilizando "for...of" e "if", percorra a lista de produtos e imprima apenas
//    o nome e o preço dos produtos que custam mais de R$ 100.

console.log("\n--- EXERCÍCIO 8: FILTRO DE PREÇOS ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 9: Lista Dinâmica de Nomes (while + prompt)
// ------------------------------------------
// Instruções:
// A) IMPORTANTE: Declare a biblioteca prompt-sync para receber entradas no terminal (lembre como fazer!).
// B) Crie um array de "convidados" vazio.
// C) Crie um loop "while" que peça ao usuário para digitar nomes de convidados via prompt.
// D) O loop deve parar quando o usuário digitar a palavra "sair".
// E) Adicione cada nome inserido no array "convidados" (Dica: não adicione a palavra "sair" na lista!).
// F) Ao final do loop, exiba a lista de convidados finalizada.

console.log("\n--- EXERCÍCIO 9: CONVIDADOS DINÂMICOS ---");
// Escreva seu código abaixo:




// ------------------------------------------
// EXERCÍCIO 10: Desafio Carrinho de Compras (for...of + prompt + conditionals)
// ------------------------------------------
// Instruções:
// A) Crie um array chamado "carrinho" com 3 objetos de produtos.
//    Cada objeto deve ter: nome (string), preco (number) e quantidade (number).
// B) Utilizando o loop "for...of", percorra o carrinho de compras.
// C) Calcule e imprima o subtotal de cada produto (preco * quantidade) no formato:
//    "Produto: [nome] | Subtotal: R$ [subtotal]"
// D) Some todos os subtotais em uma variável "totalCompra".
// E) Regra de desconto: Se o "totalCompra" for maior que R$ 150.00, aplique 10% de
//    desconto no valor final. Exiba o total final da compra com clareza.

console.log("\n--- EXERCÍCIO 10: CARRINHO DE COMPRAS ---");
// Escreva seu código abaixo:


