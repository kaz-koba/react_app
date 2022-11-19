// app.js
import { createConnection } from 'mysql';
const connection = createConnection({
  host: 'ホスト名',
  user: 'ユーザー名',
  password: 'パスワード',
  database: 'データベース名'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
 
connection.query('SELECT * FROM user', (err,rows) => {
  if(err) throw err;
 
  console.log('Data received from Db:\n');
  console.log(rows);
});
 