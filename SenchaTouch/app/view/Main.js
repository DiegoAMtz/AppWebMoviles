Ext.define('menu.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: ['Ext.Menu'],
    config: {

        layout: {
            type: 'card'
        },

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Sliding Menu',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'list',
                        ui: 'plain',
                        handler: function(){
                            if(Ext.Viewport.getMenus().left.isHidden()){
                                Ext.Viewport.showMenu('left');
                            }
                            else
                            {
                                Ext.Viewport.hideMenu('left');
                            }
                        }
                    }
                ]
            }
        ],

        listeners: {
            initialize: function(){
                Ext.Viewport.setMenu(this.createMenu(),{
                    side: 'left',
                    reveal: true
                });
            }
        }
    },

    createMenu: function(){

        var items = [
            {
                xtype: 'button',
                text: 'button1',
                iconCls: 'user',
                cls: 'menu-button'
            },
            {
                xtype: 'button',
                text: 'button2',
                iconCls: 'user',
                cls: 'menu-button'
            }
        ];

        return Ext.create('Ext.Menu', {
            style: 'padding: 0',
            id: 'menu',
            width: 200,
            scrollable: 'vertical',
            items: items
        });
    }
});   