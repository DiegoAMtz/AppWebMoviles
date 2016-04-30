function DataBase(request, name) {
    switch (request) {
    case 'create':
        {
            var db = Ti.DataBase.open('miBaseDeDatos');
            db.execute('CREATE TABLE IF NOT EXISTS data(id INTEGER PRIMARY KEY,name TEXT);');
            db.close();
            alert('Tabla creada');
        }
        break;
    case 'insert':
        {
            var db = Ti.DataBase.open('miBaseDeDatos');
            db.execute('INSERT INTO data(name) VALUES ("'+name+'");');
            db.close();
            alert('Se ha insertado un dato');
        }
        break;
    case 'delete':
        {
            var db = Ti.DataBase.open('miBaseDeDatos');
            db.execute('DELETE FROM TABLE data WHERE name = ?',name);
            db.close();
            alert('Se ha borrado un dato');
        }
        break;
    case 'querying':
        {
            var db = Ti.DataBase.open('miBaseDeDatos');
            var allData = db.execute('SELECT * FROM data');
            var data = [];
            while(allData.isValidRow()){
                data.push(allData.fieldByName('name'));
                allData.next();
            }
            db.close();
            return data;
        }
        break;
    }
}
module.exports = DataBase;