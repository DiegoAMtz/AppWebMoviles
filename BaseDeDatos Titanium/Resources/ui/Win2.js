function Win2(){
    var win = Ti.UI.createWindow({
        backgroundColor: '#000'
    }),
    dataBase = require('ui/DataBase'),
    table = Ti.UI.crateTableView({
        
    });
    win.add(table);

	win.addEventListener('focus',function(e){
		var dataBaseObj = new dataBase('querying',null);
		data = [];
		for (var i in dataBaseObj) {
			var row = Ti.UI.createTableViewRow({
				title: dataBaseObj[i]
			});
			data.push(row);
		};
		table.data = data;
	});
	return win;
}
module.exports = Win2;