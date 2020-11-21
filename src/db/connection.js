let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '48Shira!16',
    database: 'batalhaNavaDB'

});

export default connection;

