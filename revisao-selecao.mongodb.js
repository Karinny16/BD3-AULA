/*Seleciona o banco de dados no atlas Mongodb: */
use('BD3-AULA');

/*Exemplo de seleção de livros sem critério de busca: */
db['LIVRARIA'].find();

/*Exemplo de seleção de livros com critério de busca */
// db['LIVRARIA'].find({'categoria' : 'Fantasia Heroica'});

/*Exemplo de seleção de livros com critério de busca e exclusão de campos de dados: */
// db['LIVRARIA'].find({'categoria' : 'Ficção Científica'}, {'_id':0, 'codigo':0, 'descricao':0});

/*Seleciona dados a partir de incidencias de textos: */
// db['LIVRARIA'].find({'descricao':/Robôs/i})