/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylus_app_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylus/app.styl */ \"./src/stylus/app.styl\");\n/* harmony import */ var _stylus_app_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylus_app_styl__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pug_index_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pug/index.pug */ \"./src/pug/index.pug\");\n/* harmony import */ var _pug_index_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pug_index_pug__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/pug/index.pug":
/*!***************************!*\
  !*** ./src/pug/index.pug ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<!DOCTYPE html><html><head><meta charset=\\\"utf-8\\\"><meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=no\\\"><title>Abdelrahman</title></head><body><main class=\\\"main\\\"><header><nav class=\\\"navbar\\\"><a class=\\\"navbar-brand\\\"><span class=\\\"brand-letter\\\">A</span><span class=\\\"brand-dash\\\">_</span></a><div class=\\\"navbar-end\\\"><ul class=\\\"navbar-menu\\\"><li><a class=\\\"navbar-item\\\" href=\\\"#working\\\">working</a></li><li><a class=\\\"navbar-item\\\" href=\\\"#projects\\\">projects</a></li><li><a class=\\\"navbar-item\\\" href=\\\"#writings\\\">writings</a></li><li><a class=\\\"navbar-item\\\" href=\\\"#contact\\\">contact</a></li></ul></div></nav></header><section class=\\\"intro\\\"><div class=\\\"intro-info\\\"><h1 class=\\\"intro-title\\\">Hello world, I'm Abdelrahman a Web Developer, writer, and a good father.</h1><h2 class=\\\"intro-subtitle\\\">I’m obsessed with performance and design patterns, I also love to add life to any project using SVG web animation.</h2></div><div class=\\\"intro-figure\\\"><img src=\\\"assets/figure.svg\\\" alt=\\\"just programing\\\"></div></section><section class=\\\"section\\\" id=\\\"working\\\"><div class=\\\"section-info\\\"><div class=\\\"section-sticky\\\"><h2 class=\\\"section-title\\\">Wor-\\nking</h2><p class=\\\"section-description\\\">Throw the past four years, I've worked on a wide variety of projects, providing front-end development. also an open source maintainer. </p></div></div><div class=\\\"section-elements\\\"><div class=\\\"card\\\"><h3 class=\\\"card-title\\\">I work on</h3><p class=\\\"card-description\\\">Design systems and many open-source tools that aim to introduce new better solutions for both the end-users and developers, I’m obsessed with performance and design patterns, I also love to add life to any project using SVG web animation.\\n</p><h4 class=\\\"card-subtitle\\\">Preferred Technologies</h4><div class=\\\"card-description\\\"><ul><li>Vue.js</li><li>JavaScript (ES6)</li><li>Html (via Pug.js)</li><li>CSS (via Stylus or Sass)</li><li>Webpack</li><li>Rollup</li><li>Node.js</li><li>Version control (Git)</li><li>Adobe Illustrator</li></ul></div><h4 class=\\\"card-subtitle\\\">Other Skills</h4><div class=\\\"card-description\\\"><ul><li>SVG Animation</li><li>Design Patterns<li>Digital illustration</li><li>Best Practices</li><li>Performance</li><li>Leadership</li><li>53 words per minute</li><li>WCAG</li></li></ul></div></div></div></section><section class=\\\"section\\\" id=\\\"projects\\\"><div class=\\\"section-info\\\"><div class=\\\"section-sticky\\\"><h2 class=\\\"section-title\\\">Pro-\\njects</h2><p class=\\\"section-description\\\">I'm glad being part of this awesome project, this projects aim to give better experience for both developer and end-user.</p></div></div><div class=\\\"section-elements\\\"><div class=\\\"card\\\"><a href=\\\"https://github.com/baianat/blexar\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><h3 class=\\\"card-title\\\">Blexar</h3></a><h4 class=\\\"card-subtitle\\\">CSS design system</h4><p class=\\\"card-description\\\">Blexar built to give maximin usability in small places, Blexar built to give maximin usability in small places.\\n</p></div><div class=\\\"card\\\"><a href=\\\"https://github.com/baianat/vuse\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><h3 class=\\\"card-title\\\">Vuse</h3></a><h4 class=\\\"card-subtitle\\\">Vuejs plugin component</h4><p class=\\\"card-description\\\">Vuse provides the necessary tools to easily create an interactive page builder powered with Vuejs framework.</p></div><div class=\\\"card\\\"><a href=\\\"https://github.com/baianat/align\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><h3 class=\\\"card-title\\\">Align</h3></a><h4 class=\\\"card-subtitle\\\">Advanced text-editor</h4><p class=\\\"card-description\\\">Align offers a unique and rich post building experience. Align offers a unique and rich post building experience.\\n</p></div></div></section><section class=\\\"section\\\" id=\\\"writings\\\"><div class=\\\"section-info\\\"><div class=\\\"section-sticky\\\"><h2 class=\\\"section-title\\\">Wri-\\ntings</h2><p class=\\\"section-description\\\">I write generally about front-end development techniques and tips, I also famous for the “Quick CSS Quiz” series.</p></div></div><div class=\\\"section-elements\\\"><div class=\\\"card\\\"><a href=\\\"https://dev.to/abdelrahman3d/quick-css-quiz-1-47i4\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><h3 class=\\\"card-title\\\">Quick CSS Quiz Series</h3></a><p class=\\\"card-description\\\">CSS might be a total mystery to you or a topic that’s near and dear to your heart. Whether you think of CSS as a \\\"necessary evil\\\" or think of it as the power to control the world of technology, CSS is a must-have for anyone working on web applications. </p><a class=\\\"card-button\\\" href=\\\"https://dev.to/abdelrahman3d/quick-css-quiz-1-47i4\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">read more</a></div><div class=\\\"card\\\"><a href=\\\"https://dev.to/abdelrahman3d/css-abuse-31gp\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><h3 class=\\\"card-title\\\">CSS Abuse</h3></a><p class=\\\"card-description\\\">It’s all about CSS. All authors here either forgot to use JavaScript or they had disabled it in their browser and can not enable it back again; so they had to finish the job using only pure CSS.</p><a class=\\\"card-button\\\" href=\\\"https://dev.to/abdelrahman3d/css-abuse-31gp\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">read more</a></div><div class=\\\"card\\\"><a href=\\\"https://dev.to/abdelrahman3d/css-percentage-unit-the-evil-parts-1g29\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><h3 class=\\\"card-title\\\">CSS percentage unit, the evil parts</h3></a><p class=\\\"card-description\\\">It should be one of the easiest CSS concepts to understand, the percentage CSS data type represents a percentage value, a percentage is a ratio expressed as a fraction of 100, so it has to do some calculations to get the final computed(absolute) value. </p><a class=\\\"card-button\\\" href=\\\"https://dev.to/abdelrahman3d/css-percentage-unit-the-evil-parts-1g29\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">read more</a></div></div></section><section class=\\\"section is-center\\\" id=\\\"contact\\\"><div class=\\\"section-info\\\"><div class=\\\"section-sticky\\\"><h2 class=\\\"section-title\\\">Con-\\ntact</h2><p class=\\\"section-description\\\">Get in touch now. Tell me about your self and how I can help you.</p></div></div><div class=\\\"section-elements\\\"><a class=\\\"contact-button\\\" href=\\\"mailto:abdelrahman3d@gmail.com?Subject=Hello\\\">Let's chat together</a></div></section></main><footer class=\\\"footer\\\"><ul class=\\\"footer-list\\\"><li><a class=\\\"footer-item\\\" href=\\\"//facebook.com/Abdelrahman3D\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><svg class=\\\"icon\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\\\"></path></svg></a></li><li><a class=\\\"footer-item\\\" href=\\\"//twitter.com/Abdelrahman3D\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><svg class=\\\"icon\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z\\\"></path></svg></a></li><li><a class=\\\"footer-item\\\" href=\\\"//github.com/Abdelrahman3D\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><svg class=\\\"icon\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z\\\"></path></svg></a></li><li><a class=\\\"footer-item\\\" href=\\\"//medium.com/@Abdelrahman3D\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><svg class=\\\"icon\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M4.37,7.3C4.4,7.05 4.3,6.81 4.12,6.65L2.25,4.4V4.06H8.05L12.53,13.89L16.47,4.06H22V4.4L20.4,5.93C20.27,6.03 20.2,6.21 20.23,6.38V17.62C20.2,17.79 20.27,17.97 20.4,18.07L21.96,19.6V19.94H14.12V19.6L15.73,18.03C15.89,17.88 15.89,17.83 15.89,17.59V8.5L11.4,19.9H10.8L5.57,8.5V16.14C5.5,16.46 5.63,16.78 5.86,17L7.96,19.57V19.9H2V19.57L4.1,17C4.33,16.78 4.43,16.46 4.37,16.14V7.3Z\\\"></path></svg></a></li><li><a class=\\\"footer-item\\\" href=\\\"//linkedin.com/in/abdelrahman3d/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><svg class=\\\"icon\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z\\\"></path></svg></a></li><li><a class=\\\"footer-item\\\" href=\\\"//behance.net/Abdelrahman3D\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><svg class=\\\"icon\\\" viewBox=\\\"0 0 24 24\\\"><path d=\\\"M19.58,12.27C19.54,11.65 19.33,11.18 18.96,10.86C18.59,10.54 18.13,10.38 17.58,10.38C17,10.38 16.5,10.55 16.19,10.89C15.86,11.23 15.65,11.69 15.57,12.27M21.92,12.04C22,12.45 22,13.04 22,13.81H15.5C15.55,14.71 15.85,15.33 16.44,15.69C16.79,15.92 17.22,16.03 17.73,16.03C18.26,16.03 18.69,15.89 19,15.62C19.2,15.47 19.36,15.27 19.5,15H21.88C21.82,15.54 21.53,16.07 21,16.62C20.22,17.5 19.1,17.92 17.66,17.92C16.47,17.92 15.43,17.55 14.5,16.82C13.62,16.09 13.16,14.9 13.16,13.25C13.16,11.7 13.57,10.5 14.39,9.7C15.21,8.87 16.27,8.46 17.58,8.46C18.35,8.46 19.05,8.6 19.67,8.88C20.29,9.16 20.81,9.59 21.21,10.2C21.58,10.73 21.81,11.34 21.92,12.04M9.58,14.07C9.58,13.42 9.31,12.97 8.79,12.73C8.5,12.6 8.08,12.53 7.54,12.5H4.87V15.84H7.5C8.04,15.84 8.46,15.77 8.76,15.62C9.31,15.35 9.58,14.83 9.58,14.07M4.87,10.46H7.5C8.04,10.46 8.5,10.36 8.82,10.15C9.16,9.95 9.32,9.58 9.32,9.06C9.32,8.5 9.1,8.1 8.66,7.91C8.27,7.78 7.78,7.72 7.19,7.72H4.87M11.72,12.42C12.04,12.92 12.2,13.53 12.2,14.24C12.2,15 12,15.64 11.65,16.23C11.41,16.62 11.12,16.94 10.77,17.21C10.37,17.5 9.9,17.72 9.36,17.83C8.82,17.94 8.24,18 7.61,18H2V5.55H8C9.53,5.58 10.6,6 11.23,6.88C11.61,7.41 11.8,8.04 11.8,8.78C11.8,9.54 11.61,10.15 11.23,10.61C11,10.87 10.7,11.11 10.28,11.32C10.91,11.55 11.39,11.92 11.72,12.42M20.06,7.32H15.05V6.07H20.06V7.32Z\\\"></path></svg></a></li></ul></footer></body></html>\"\n\n//# sourceURL=webpack:///./src/pug/index.pug?");

/***/ }),

/***/ "./src/stylus/app.styl":
/*!*****************************!*\
  !*** ./src/stylus/app.styl ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/stylus/app.styl?");

/***/ })

/******/ });