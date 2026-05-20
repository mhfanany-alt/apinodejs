const mysql = require('mysql2/promise');
let sql;
const buatKoneksi = async () => {
    return await mysql.createConnection({
        host: 'hilal.co-id.id',
        user: 'u3cfe03y_hilal',
        password: 'QQSVGFay6m7_Jms',
        database: 'u3cfe03y_transaksi'
    })
}
const tambahBackup = async (id, nama, channel) => {
    const db = await buatKoneksi();
    sql = `INSERT INTO backup VALUES('${id}', '${nama}', '${channel}',NOW())`;
    try{
        await db.execute(sql);
        return "1";
    }catch(err){
        return "0";
    }
}
const tambahTransaksi = async (idx, id, waktux, nominalx, jenisx, deskripsix) => {
    const db = await buatKoneksi();
    sql = `INSERT INTO backup_transaksi VALUES('${idx}', '${id}', '${waktux}', '${nominalx}', '${jenisx}', '${deskripsix}')`;
    try{
        await db.execute(sql);
        return "1";
    }catch(err){
        return "0";
    }
}
module.exports = {buatKoneksi, tambahBackup, tambahTransaksi};
