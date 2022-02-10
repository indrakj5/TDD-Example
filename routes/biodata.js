const express = require('express');
const res = require('express/lib/response');
const router = express.Router()

router.get('/list', function(req, res){
    let sql = `SELECT * FROM biodata`;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "User lists retrieved successfully"
        })
    })
})

router.post('/new', function(req, res){
    let sql = `INSERT INTO biodata(id, nama, umur, email, phone, about, title, foto) VALUES (?)`;
    let values = [
        req.body.id,
        req.body.nama,
        req.body.umur,
        req.body.email,
        req.body.phone,
        req.body.about,
        req.body.title,
        req.body.foto
    ];
    db.query(sql, [values], function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "New user added successfully"
        })
    })
})

router.put('/update/:id', function(req, res){
    let sql = `UPDATE biodata SET nama = ('${req.body.nama}'), umur = ('${req.body.umur}'), email = ('${req.body.email}'), phone = ('${req.body.phone}'), about = ('${req.body.about}'), title = ('${req.body.title}'), foto = ('${req.body.foto}') WHERE id = ('${req.params.id}')`;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "User updated successfully"
        })
    })
})

router.delete('/delete/:id', function(req, res){
    let sql = `DELETE FROM biodata WHERE id = ('${req.params.id}')`;
   db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "User deleted successfully"
        })
    })
})

module.exports = router