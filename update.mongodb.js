/*Seleciona o banco de dados: */
use('BD3-AULA');

/*Seleção de livro para teste de alteração: */
// db['LIVRARIA'].updateOne(
//     {'codigo':'1'},
//     {$set:{'valor':200}}
// );

/*Seleção de livro para teste de alteração: */
// db['LIVRARIA'].find({'titulo' : 'As Cavernas de Aço'});

/*Seleção de livro para teste de alteração: */
db['LIVRARIA'].find({'autor':'Isaac Asimov'});