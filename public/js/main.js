/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/toggleMenu.js */ \"./src/js/module/toggleMenu.js\");\n/* harmony import */ var _module_priceTimeToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/priceTimeToggle.js */ \"./src/js/module/priceTimeToggle.js\");\n/* harmony import */ var _module_activeOfferToggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/activeOfferToggle.js */ \"./src/js/module/activeOfferToggle.js\");\n\n\n\n\nwindow.addEventListener('load', function(){\n\n  new _module_priceTimeToggle_js__WEBPACK_IMPORTED_MODULE_1__.PriceTimeToggle();\n  new _module_activeOfferToggle_js__WEBPACK_IMPORTED_MODULE_2__.ActiveOfferToggle();\n  new _module_toggleMenu_js__WEBPACK_IMPORTED_MODULE_0__.ToggleMenu();\n  \n});\n\n\n\n\n\n//# sourceURL=webpack://start-es/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/activeOfferToggle.js":
/*!********************************************!*\
  !*** ./src/js/module/activeOfferToggle.js ***!
  \********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ActiveOfferToggle: function() { return /* binding */ ActiveOfferToggle; }\n/* harmony export */ });\nclass ActiveOfferToggle{\n  constructor(){\n    this.item = document.querySelector('.offer-content__price');\n   let items = document.querySelectorAll('.offer-content__price-item');\n\n   this.item.addEventListener('click', function(e) {\n\n    items.forEach(el => el.classList.remove('price-toggle-active'));\n\n      if(e.target.classList.contains('offer-content__price-item')){\n        e.target.classList.add('price-toggle-active');\n      }\n    });\n\n  }\n}\n\n//# sourceURL=webpack://start-es/./src/js/module/activeOfferToggle.js?");

/***/ }),

/***/ "./src/js/module/priceTimeToggle.js":
/*!******************************************!*\
  !*** ./src/js/module/priceTimeToggle.js ***!
  \******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PriceTimeToggle: function() { return /* binding */ PriceTimeToggle; }\n/* harmony export */ });\nclass PriceTimeToggle{\n  constructor(){\n    this.btnYear = document.querySelector('.btn-year');\n    this.btnMonth = document.querySelector('.btn-month');\n\n    this.time = document.querySelectorAll('.offer-content__price .time');\n    this.pricePrem = document.querySelector('.offer-content__price .price-prem');\n    this.priceEnterprise = document.querySelector('.offer-content__price .price-enterprise');\n\n\n    this.btnYear.addEventListener('click', () => {\n      this.btnYear.classList.add('active-toggle');\n      this.btnMonth.classList.remove('active-toggle');\n\n      this.setArrHtmlContent(this.time, '/year');\n      this.setHtmlContent(this.pricePrem, '319');\n      this.setHtmlContent(this.priceEnterprise, '539');\n    });\n\n    this.btnMonth.addEventListener('click', () => {\n      this.btnMonth.classList.add('active-toggle');\n      this.btnYear.classList.remove('active-toggle');\n\n      this.setArrHtmlContent(this.time, '/month');\n      this.setHtmlContent(this.pricePrem, '29');\n      this.setHtmlContent(this.priceEnterprise, '49');\n    });\n  }\n  setArrHtmlContent(arr, content){\n    arr.forEach(el => el.textContent = content)\n  }\n  setHtmlContent(el, content){\n    el.textContent = content;\n  }\n}\n\n//# sourceURL=webpack://start-es/./src/js/module/priceTimeToggle.js?");

/***/ }),

/***/ "./src/js/module/toggleMenu.js":
/*!*************************************!*\
  !*** ./src/js/module/toggleMenu.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToggleMenu: function() { return /* binding */ ToggleMenu; }\n/* harmony export */ });\nclass ToggleMenu {\n  constructor(){\n    this.burger = document.querySelector('.header-menu .burger-wrap');\n    this.menu = document.querySelector('.header-menu .menu-list');\n\n    window.addEventListener('click', (e) => {\n      let isNotContains = !e.target.classList.contains('menu-link') && !e.target.classList.contains('burger-wrap') && !e.target.classList.contains('burger') && !e.target.classList.contains('menu-list');\n\n      if(e.target.classList.contains('burger-wrap') || e.target.classList.contains('burger')){\n        this.toggle();\n      }\n      \n      if(isNotContains || e.target.classList.contains('menu-link')){\n        this.reset();\n      }\n    });\n\n    window.addEventListener('resize', () => {this.reset();});\n  }\n\n  toggle(){\n    if(this.menu.classList.contains('menu-list-active')){\n      this.reset();\n    }\n    else {\n      this.menu.classList.add('menu-list-active');\n    }\n  }\n\n  reset(){\n    this.menu.classList.remove('menu-list-active');\n  }\n\n}\n\n\n\n//# sourceURL=webpack://start-es/./src/js/module/toggleMenu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;