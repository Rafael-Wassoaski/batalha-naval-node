import connection from './connection';

function createTableTabuleiro(){
    connection.connect();
    connection.query('CREATE TABLE Tabuleiro ')
}
