// ==========================================================================
// Project:   Image
// Copyright: @2016 My Company, Inc.
// ==========================================================================
/*globals Image */

/** @namespace

  My cool new app.  Describe your application.

  @extends SC.Object
*/
Image = SC.Application.create(
  /** @scope Image.prototype */ {

  NAMESPACE: 'Image',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),

      
      scaleObserver:function(){
        var scaleValue = this.get('scaleValue');
        switch(scaleValue){
          case SC.FILL:
            this.set('alignValue',null);
            break;
          case SC.BEST_FILL:
          case SC.BEST_FIT:
          case SC.SCALE_NONE:
          this.set('alignValue',SC.ALIGN_CENTER);
          break;
        }
        }.observes('scaleValue')
});
