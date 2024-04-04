const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sahan',
    database: 'riyapola'
})
connection.connect()


const saveposts = (req, res) => {

    connection.query('insert into Coustomer_details values (?,?,?,?,?)',[req.body.id,req.body.name, req.body.email, req.body.contact_number, req.body.address], (err, rows) => {
        if (err) throw err
        res.send(rows)
      })

}

const showpost = (req, res) => {

    connection.query('select * from Coustomer_details ', (err, rows) => {
        if (err) throw err
        res.send(rows)
      })

}


module.exports ={saveposts,showpost};