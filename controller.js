'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok('Applisi REST API berjalan!', res);
}

// get mahasiswa
exports.getMahasiswa = function (req, res) {
    connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
}

// get mahasiswa where id
exports.getMahasiswaID = function (req, res) {
    let id = req.params.id
    connection.query(`SELECT * FROM mahasiswa WHERE id = ?`, [id], function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}

// post mahasiswa
exports.postMahasiswa = function (req, res) {
    let nim = req.body.nim
    let nama = req.body.nama
    let jurusan = req.body.jurusan

    connection.query('INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)', [nim, nama, jurusan], function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok('Data send Successfull!', res)
        }
    })
}

// put mahasiswa
exports.putMahasiswa = function (req, res) {
    let id = req.params.id
    let nim = req.body.nim
    let nama = req.body.nama
    let jurusan = req.body.nama

    connection.query("UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE id = ?", [
        nim, nama, jurusan, id
    ], function (error, rows, fields){
        if(error){
            console.log(error)
        }else{
            response.ok(`Update data where id ${id} successfull!`, res)
        }
    })
}