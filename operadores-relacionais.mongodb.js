// TESTE DE CONEXÃO

use('BD3-AULA');
// db['Livraria'].find();


/*SELECIONE LIVROS EM UM INTERVALO DE VALORES:
ENTRE 100 E 150
USO DOS OPERADORES RELACIONAIS $gte(maior ou igual) $lte(menor ou igual)*/

// db['Livraria'].find({
//     valor : {$gte:100, $lte:150 }
// });




/*SELECIONE APENAS LIVROS DA CATEGORIA "FANTASIA HEROICA":
E COM VALORES MENOR OU IGUAL A 100
OPERADOR LÓGICO: $and
OPERADOR RELACIONAL: $eq
OPERADOR RELACIONAL: $lte
*/

//  db['Livraria'].find({
//     $and: [
//         {categoria:{$eq: 'Fantasia Heroica'}},
//         {valor:{$lte:100}}
//     ]
// });




/*SELECIONE APENAS LIVROS DA CATEGORIA "FANTASIA HEROICA":
E COM VALORES MENOR OU IGUAL A 100
OPERADOR LÓGICO: $or
OPERADOR RELACIONAL: $eq
OPERADOR RELACIONAL: $lte
*/

//  


/*SELECIONA LIVROS COM VALOR MAIOR QUE 150 OU CUJO NOME DO AUTOR POSSUIA A PALAVRA TOLKIEN SEM DIFERENCIAR MAIUSCULAS DE MINUSCULAS
OPERADOR LÓGICO:$or
OPERADOR RELACIONAL:$glt
E O USO DO REGEX INSENTIVO DO MONGODB    */

// db['Livraria'].find({
//     $or: [
//          {valor:{$lte:150}}, 
//          {autor:/tolkien/i}
//         ]
//     });


/*SELECIONE TODOS OS LIVROS DO AUTOR TOLKIEN E ORDENA DE FORMA ASCENDENTE.
USO DA FUNÇÃO sort:
1 - PARA ASCENDENTE
-1 - PARA DESCENDENTE
  */

// db['Livraria'].find({
    
//          autor: 'J.R.R Tolkien'
//     }).sort({valor:1});



/*LISTAGEM ASCENDENTE*/
// db['Livraria'].find({
    
//          autor: 'J.R.R Tolkien'
//     }).sort({valor:1});





/*LISTAGEM DESCENDENTE*/
// db['Livraria'].find({
    
//          autor: 'J.R.R Tolkien'
//     }).sort({valor:-1});



/* *SELECIONE  OS LIVROS QUE CONTENHA O NOME DE AUTOR Isaac Asimov.
OPERADOR RELACIONAL: $in  */


 db['Livraria'].find({
    autor: {
  $in : ['Isaac Asimov']
    }
},{
    _id:0,
    codigo:0 
});



