const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sahan',
    database: 'riyapola'
  })
  connection.connect()


  const postsave =(req,res)=>{
    connection.query('insert into post values(?,?,?)',[ req.body.description,req.file.filename,req.body.id], (err, rows) => {
         if (err) throw err
        res.send(rows)
      })
  }

  const updatepost =(req,res)=>{
    connection.query('update post set description=? , image=? where id=?',[req.body.description,req.file.filename, req.params.id], (err, rows) => {
        if (err) throw err
        res.send(rows)
      })
  }

  const deletepost =(req,res)=>{
    connection.query('delete from  post where id=?',[ req.params.id], (err, rows) => {
        if (err) throw err
        res.send(rows)
      })
  }

  const getpost =(req,res)=>{
    connection.query('select * from post', (err, rows) => {
        if (err) throw err
        res.send(rows)
      })
  }

  // const uplodeimg =(req,res)=>{
  //   connection.query('update post set Img =?    where id =?', [req.file.filename, req.params.id], (err, rows) => {
  //     if (err) throw err
  //     res.send(rows)
  //   })
  
  // } 

  module.exports={postsave,updatepost,deletepost,getpost}