'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok('Applisi REST API berjalan!', res);
}

exports.getMahasiswa = function(req, res){
    connection.query("SELECT * FROM mahasiswa", function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
}

exports.getMahasiswaID = function(req, res){
    let id = req.params.id
    connection.query(`SELECT * FROM mahasiswa WHERE id = ?`,[id], function(error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(rows, res)
        }
    })
}