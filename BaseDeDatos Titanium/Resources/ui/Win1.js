function Win1(){
    var win = Ti.UI.cretaeWindow({
       backgroundColor: 'White'
    }),
    dataBase = require('ui/DataBase'),
    buttonCreate = Ti.UI.createButton({
        title: 'create',
        width: 80,
        height: 50,
        top: 0
    }),
    textField = Ti.UI.createTextFile({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: 'black',
        width: 200,
        top: 35
    }),
    buttonInsert = Ti.UI.creatteButton({
        title: 'insert',
        width: 80,
        height: 50,
        left: 50,
        top: 70
    }),
    buttonDelete = Ti.UI.creatteButton({
        title: 'delete',
        width: 80,
        height: 50,
        right: 50,
        top: 70
    });
    win.add(buttonCreate);
    win.add(textField);
    win.add(buttonInsert);
    win.add(buttonDelete);
    
    buttonCreate.addEventListener('click',function(e){
        dataBase('create',null);
    });
    buttonCreate.addEventListener('click',function(e){
        dataBase('insert', textField.value);
    });
    buttonCreate.addEventListener('click',function(e){
        dataBase('delete',textField.value);
    });
    return win;
}
module.exports = Win1;