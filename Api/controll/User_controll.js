const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sahan',
    database: 'riyapola'
  })
  connection.connect()


const savepost = (req, res) => {
    connection.query('insert into coustomer values (?,?,?,?,?,?,?)', [req.body.id, req.body.name, req.body.email, req.body.location, req.body.start_date, req.body.end_date,req.body.vehicle], (err, rows) => {
        if (err) throw err
        res.send(rows)

    })
}
const getuser =(req,res)=>{
    connection.query('select * from coustomer', (err, rows) => {
        if (err) throw err
        res.send(rows)
      })
  }

module.exports={savepost ,getuser}