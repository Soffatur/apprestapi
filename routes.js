'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);
    app.route('/mahasiswa').get(jsonku.getMahasiswa);
    app.route('/mahasiswa/:id').get(jsonku.getMahasiswaID);
}