const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "db4free.net",
    user: "pr_dmozolins",
    password: 'LNSWDr*G#2ip5dar',
    database: 'pr_prakse'
})
console.log("DB connected!")
module.exports = db

