'use strict'

exports.ok = function(values, res){
    var data = {
        'status': 200,
        'values': values
    }

     res.json(data);
     res.end();
}

exports.groupMahasiswa = function(values, res){
    const hasil = values.reduce((akumulasi, item) => {
        if(akumulasi[item.nama]){
            const group = akumulasi[item.nama]

            if(Array.isArray(group.matakuliah)){
                group.matakuliah.push(item.matakuliah)
            }else{
                group.matakuliah = [group.matakuliah, item.matakuliah]
            }
        }else{
            akumulasi[item.nama] = item
        }
        return akumulasi
    },{});
    var data = {
        'status': 200,
        'values': hasil
    }

     res.json(data);
     res.end();
}