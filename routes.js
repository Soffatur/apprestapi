'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);
    app.route('/mahasiswa').get(jsonku.getMahasiswa); //get mahasiswa
    app.route('/mahasiswa/:id').get(jsonku.getMahasiswaID); //get mahasiswa where id
    app.route('/mahasiswa').post(jsonku.postMahasiswa); //post mahasiswa
    app.route('/mahasiswa/:id').put(jsonku.putMahasiswa); //put
}