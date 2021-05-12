const mysql = require('mysql');

const con = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6403915",
    password: "7IgJp4J9b7",
    database: "sql6403915",
});
con.query('Select * from Satellites', (err, res) => {
    if (err) { console.log(err); }
    console.log(res);
})
export function Hello() {
    console.log('run');
}