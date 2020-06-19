(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addstud-addstud-module"],{

/***/ "./src/app/addstud/addstud-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/addstud/addstud-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AddstudPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstudPageRoutingModule", function() { return AddstudPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addstud_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addstud.page */ "./src/app/addstud/addstud.page.ts");




const routes = [
    {
        path: '',
        component: _addstud_page__WEBPACK_IMPORTED_MODULE_3__["AddstudPage"]
    }
];
let AddstudPageRoutingModule = class AddstudPageRoutingModule {
};
AddstudPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddstudPageRoutingModule);



/***/ }),

/***/ "./src/app/addstud/addstud.module.ts":
/*!*******************************************!*\
  !*** ./src/app/addstud/addstud.module.ts ***!
  \*******************************************/
/*! exports provided: AddstudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddstudPageModule", function() { return AddstudPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addstud_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addstud-routing.module */ "./src/app/addstud/addstud-routing.module.ts");
/* harmony import */ var _addstud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addstud.page */ "./src/app/addstud/addstud.page.ts");







let AddstudPageModule = class AddstudPageModule {
};
AddstudPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addstud_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddstudPageRoutingModule"]
        ],
        declarations: [_addstud_page__WEBPACK_IMPORTED_MODULE_6__["AddstudPage"]]
    })
], AddstudPageModule);



/***/ })

}]);
//# sourceMappingURL=addstud-addstud-module-es2015.js.map