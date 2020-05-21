// - Add Feedback System
// -Add Table Creation Function
// MySQL used

var ops ={}
var mysql = require('mysql')
ops.insert = function(parms) {
    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'eceform'
    })

    con.connect((error) => {
        if (error) throw error
        console.log('Connected....')
    })
    
    insertQuery = 'INSERT INTO registrations(Name,Mobile_No,Fathers_Name,Address,Email_Id,Gender,Course,Course_Type) VALUE ?'

    con.query(insertQuery,[[parms]],(err,data) => {
        if (err) throw err;
        console.log("Number of records inserted: " + data.affectedRows);
    })
    
}

module.exports = ops




 
