(function(){
    var app =  angular.module('store-products',[]);
    
    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/product-title.html'
        };
    });

    app.directive('productDescription',function(){
        return{
            restrict:'E',
            templateUrl:'template/product-description.html'
        };
    });
    
    app.directive('productSpecifications',function(){
        return{
            restrict:'E',
            templateUrl:'template/product-specifications.html'
        };
    });
    
    app.directive("productReviews", function () {
        return {
            restrict: 'E',
            templateUrl: "template/product-reviews.html",
            controller:function(){
                this.review = {};

                this.addReview = function (product) {
                this.review.createdOn = Date.now();
                product.reviews.push(this.review);
                this.review = {};
                };
            },
            controllerAs:'reviewCtrl'
        };
    });

    app.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/product-tabs.html',
            controller: function () {
                this.tab = 1;
                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
                this.selectedTab = function (setTab) {
                    this.tab = setTab;
                };
            },
            controllerAs: 'panel'
        };
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'template/product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
})();