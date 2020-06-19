function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["studetails-studetails-module"], {
  /***/
  "./src/app/studetails/studetails-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/studetails/studetails-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: StudetailsPageRoutingModule */

  /***/
  function srcAppStudetailsStudetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudetailsPageRoutingModule", function () {
      return StudetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _studetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./studetails.page */
    "./src/app/studetails/studetails.page.ts");

    var routes = [{
      path: '',
      component: _studetails_page__WEBPACK_IMPORTED_MODULE_3__["StudetailsPage"]
    }];

    var StudetailsPageRoutingModule = function StudetailsPageRoutingModule() {
      _classCallCheck(this, StudetailsPageRoutingModule);
    };

    StudetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StudetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/studetails/studetails.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/studetails/studetails.module.ts ***!
    \*************************************************/

  /*! exports provided: StudetailsPageModule */

  /***/
  function srcAppStudetailsStudetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudetailsPageModule", function () {
      return StudetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _studetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./studetails-routing.module */
    "./src/app/studetails/studetails-routing.module.ts");
    /* harmony import */


    var _studetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./studetails.page */
    "./src/app/studetails/studetails.page.ts");

    var StudetailsPageModule = function StudetailsPageModule() {
      _classCallCheck(this, StudetailsPageModule);
    };

    StudetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _studetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["StudetailsPageRoutingModule"]],
      declarations: [_studetails_page__WEBPACK_IMPORTED_MODULE_6__["StudetailsPage"]]
    })], StudetailsPageModule);
    /***/
  }
}]);
//# sourceMappingURL=studetails-studetails-module-es5.js.map