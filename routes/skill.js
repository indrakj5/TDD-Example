const express = require('express');
const res = require('express/lib/response');
const router = express.Router()

router.get('/list', function(req, res){
    let sql = `SELECT * FROM skill`;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Skill lists retrieved successfully"
        })
    })
})

router.get('/list/:id', function(req, res){
    let sql = `SELECT * FROM skill WHERE id = ('${req.params.id}') `;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Skill lists retrieved successfully"
        })
    })
})

router.post('/new', function(req, res){
    let sql = `INSERT INTO skill(id, name, level) VALUES (?)`;
    let values = [
        req.body.id,
        req.body.name,
        req.body.level
    ];
    db.query(sql, [values], function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "New Skill added successfully"
        })
    })
})

router.put('/update/:id', function(req, res){
    let sql = `UPDATE skill SET name = ('${req.body.name}'), level = ('${req.body.level}') WHERE id = ('${req.params.id}')`;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "Skill updated successfully"
        })
    })
})

router.delete('/delete/:id', function(req, res){
    let sql = `DELETE FROM skill WHERE id = ('${req.params.id}')`;
   db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "Skill deleted successfully"
        })
    })
})

module.exports = router