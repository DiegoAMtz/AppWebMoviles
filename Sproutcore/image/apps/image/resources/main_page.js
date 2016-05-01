// ==========================================================================
// Project:   Image - mainPage
// Copyright: @2016 My Company, Inc.
// ==========================================================================
/*globals Image */

// This page describes the main user interface for your application.
Image.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['normalImage', 'arrowView', 'controlView', 'scaleButton', 'scaleShadowImage', 'scaleImage'],

    normalImage: SC.ImageView.extend({
      classNames: ['welcome-label'],
      layout: { centerX: 0, centerY: 0, width: 300, height: 24 },
      tagName: "h1",
      value: "Welcome to SproutCore!"
    })
  })

});
