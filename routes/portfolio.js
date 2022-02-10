const express = require('express');
const res = require('express/lib/response');
const router = express.Router()

router.get('/list', function(req, res){
    let sql = `SELECT * FROM portfolio`;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            data,
            message: "Portfolio lists retrieved successfully"
        })
    })
})

router.post('/new', function(req, res){
    let sql = `INSERT INTO portfolio(id, name, description, github, thumbnail) VALUES (?)`;
    let values = [
        req.body.id,
        req.body.name,
        req.body.description,
        req.body.github,
        req.body.thumbnail
    ];
    db.query(sql, [values], function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "New Portfolio added successfully"
        })
    })
})

router.put('/update/:id', function(req, res){
    let sql = `UPDATE portfolio SET name = ('${req.body.name}'), description = ('${req.body.description}'), github = ('${req.body.github}'), thumbnail = ('${req.body.thumbnail}') WHERE id = ('${req.params.id}')`;
    db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "Portfolio updated successfully"
        })
    })
})

router.delete('/delete/:id', function(req, res){
    let sql = `DELETE FROM portfolio WHERE id = ('${req.params.id}')`;
   db.query(sql, function(err, data, fields){
        if (err) throw err;
        res.json({
            status: 200,
            message: "Portfolio deleted successfully"
        })
    })
})

module.exports = router