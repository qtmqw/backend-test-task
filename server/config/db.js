const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "sql7.freesqldatabase.com",
    user: "sql7588516",
    password: 'IKfsvFeUpC',
    database: 'sql7588516'
})
console.log("DB connected!")
module.exports = db

