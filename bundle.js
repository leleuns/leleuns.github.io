/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * This is the main entry point for Webpack, the compiler & dependency loader.\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\n */\n\n// HTML Files\n\n\n// Stylesheets\n\n\n// Scripts\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size\nwindow.onscroll = function () {\n  scrollFunction();\n};\nfunction scrollFunction() {\n  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {\n    document.getElementById(\"main-nav\").style.padding = \"14px 5px\";\n    document.getElementById(\"main-nav\").style.fontSize = \"14px\";\n  } else {\n    document.getElementById(\"main-nav\").style.padding = \"18px 10px\";\n    document.getElementById(\"main-nav\").style.fontSize = \"18px\";\n  }\n}\n\n//sets navbar equal to main-nav\nvar navbar = document.getElementById(\"main-nav\");\n//tells position of user\nvar navPos = navbar.getBoundingClientRect().top;\n//links for each nav bar section\nvar navbarLinks = document.querySelectorAll(\"nav a\");\n\n//detects scrolling\nwindow.addEventListener(\"scroll\", function (e) {\n  var scrollPos = window.scrollY;\n  //if the scrolling is greater than the navbar's postion, add sticky element and offset margin\n  if (scrollPos > navPos) {\n    navbar.classList.add('sticky');\n    home.classList.add('navbarOffsetMargin');\n  } else {\n    navbar.classList.remove('sticky');\n    home.classList.remove('navbarOffsetMargin');\n  }\n  //loops through each link\n  navbarLinks.forEach(function (link) {\n    //creates a section for each part of navbar\n    var section = document.querySelector(link.hash);\n    //checks if the section is on the screen\n    if (scrollPos + 120 > section.offsetTop && scrollPos + 120 < section.offsetTop + section.offsetHeight) {\n      link.classList.add(\"active\");\n    } else {\n      link.classList.remove(\"active\");\n    }\n  });\n});\nvar carouselSlide = document.querySelector('.carousel-slide');\nvar carouselImages = document.querySelectorAll('.carousel-slide img');\n//Buttons\nvar previousBtn = document.querySelector('#previousBtn');\nvar nextBtn = document.querySelector('#nextBtn');\n//Counter\nvar counter = 1;\nvar size = carouselImages[0].clientWidth;\ncarouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';\nnextBtn.addEventListener('click', function () {\n  if (counter >= carouselImages.length - 1) return;\n  carouselSlide.style.transition = 'transform 0.3s ease-in-out';\n  counter++;\n  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';\n});\npreviousBtn.addEventListener('click', function () {\n  if (counter <= 0) return;\n  carouselSlide.style.transition = 'transform 0.3s ease-in-out';\n  counter--;\n  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';\n});\ncarouselSlide.addEventListener('transitionend', function () {\n  if (carouselImages[counter].id === 'lastClone') {\n    carouselSlide.style.transition = 'none';\n    counter = carouselImages.length - 2;\n    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';\n  }\n  if (carouselImages[counter].id === 'firstClone') {\n    carouselSlide.style.transition = 'none';\n    counter = carouselImages.length - counter;\n    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';\n  }\n});\nvar open = document.getElementById('open');\nvar modal_container = document.getElementById('modal_container');\nvar close = document.getElementById('close');\nopen.addEventListener('click', function () {\n  modal_container.classList.add('show');\n});\nclose.addEventListener('click', function () {\n  modal_container.classList.remove('show');\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Your SCSS here. */\\nbody {\\n  margin: 0;\\n  width: 100%;\\n}\\n\\n#main-nav {\\n  background-color: #88B04B;\\n  padding: 15px 10px;\\n  text-align: left;\\n  width: 100%;\\n  position: absolute;\\n  box-sizing: border-box;\\n  transition: 0.5s;\\n  margin: 0;\\n  font-family: monospace;\\n  font-size: 18px;\\n  z-index: 1000;\\n}\\n\\nnav a {\\n  color: white;\\n  text-decoration: none;\\n  margin: 0px 10px;\\n  padding: 5px;\\n  line-height: 20px;\\n}\\n\\n#main-nav.sticky {\\n  position: fixed;\\n  top: 0;\\n}\\n\\n.navbarOffsetMargin {\\n  padding-top: 110px;\\n}\\n\\nnav a.active {\\n  color: black;\\n  background: white;\\n  border-radius: 5px;\\n}\\n\\nnav a:hover {\\n  text-decoration: underline;\\n}\\n\\nimg.portrait {\\n  margin-top: 80px;\\n  width: 300px;\\n  border-radius: 10px;\\n}\\n\\nsection#home {\\n  background-color: #798EA4;\\n  text-align: center;\\n  color: white;\\n  font-family: monospace;\\n  height: 900px;\\n  font-size: 18px;\\n  transition: 0.5s;\\n}\\n\\nsection#portfolio {\\n  background-color: #34568B;\\n  text-align: center;\\n  color: white;\\n  font-family: monospace;\\n  height: 1000px;\\n  transition: 1s;\\n}\\n\\nsection#about_me {\\n  background-color: #6B5B95;\\n  text-align: center;\\n  height: 600px;\\n  font-size: 20px;\\n  font-family: monospace;\\n  transition: 1s;\\n}\\n\\nsection#contact {\\n  background-color: #92A8D1;\\n  text-align: center;\\n  height: 100px;\\n  transition: 1s;\\n  margin-bottom: 0;\\n}\\n\\nsection {\\n  margin: 0;\\n}\\n\\np {\\n  margin: 0;\\n  color: black;\\n  font-family: monospace;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.carousel-container {\\n  width: 46.611%;\\n  margin: auto;\\n  overflow: hidden;\\n  padding-top: 40px;\\n}\\n\\n.carousel-slide {\\n  display: flex;\\n  width: 100%;\\n  transform-style: preserve-3d;\\n  -webkit-backface-visibility: hidden;\\n          backface-visibility: hidden;\\n  position: relative;\\n}\\n\\n.buttons {\\n  position: relative;\\n}\\n\\n.prev, .next {\\n  cursor: pointer;\\n  position: absolute;\\n  top: 45%;\\n  z-index: 1;\\n  width: auto;\\n  margin-top: 0px;\\n  padding: 16px;\\n  color: white;\\n  border: none;\\n  font-weight: bold;\\n  font-size: 18px;\\n  transition: 0.6s ease;\\n  border-radius: 0 3px 3px 0;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n          user-select: none;\\n  background-color: rgba(0, 0, 0, 0.2);\\n}\\n\\n/* Position the \\\"next button\\\" to the right */\\n.next {\\n  right: 0;\\n  border-radius: 3px 0 0 3px;\\n  right: 1rem;\\n}\\n\\n.prev {\\n  left: 0;\\n  border-radius: 3px 0 0 3px;\\n  left: 1rem;\\n}\\n\\n/* On hover, add a black background color with a little bit see-through */\\n.prev:hover, .next:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n}\\n\\n.three_column {\\n  -moz-column-count: 3;\\n       column-count: 3;\\n  -moz-column-gap: 10px;\\n       column-gap: 10px;\\n  -moz-column-rule-style: solid;\\n       column-rule-style: solid;\\n  -moz-column-rule-color: white;\\n       column-rule-color: white;\\n  padding-top: 150px;\\n}\\n\\nh2 {\\n  color: white;\\n  margin: 0;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  max-height: 100%;\\n}\\n\\n.image-fixer {\\n  background-color: #798EA4;\\n  background-repeat: no-repeat;\\n  background-attachment: fixed;\\n}\\n\\n/* Three image containers (use 25% for four, and 50% for two, etc) */\\n.column {\\n  float: left;\\n  width: 33.33%;\\n  padding: 0px;\\n}\\n\\n/* Clear floats after image containers */\\n.row::after {\\n  content: \\\"\\\";\\n  clear: both;\\n  display: table;\\n}\\n\\n.modal_container {\\n  background-color: rgba(0, 0, 0, 0.6);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  pointer-events: none;\\n  opacity: 0;\\n  height: 100vh;\\n  width: 100%;\\n}\\n\\n.modal {\\n  background-color: #34568B;\\n  width: 600px;\\n  maX-width: 100%;\\n  padding: 30px 50px;\\n  border-radius: 5px;\\n  text-align: center;\\n  z-index: 2000;\\n  overflow: initial;\\n}\\n\\n.modal_container.show {\\n  pointer-events: auto;\\n  opacity: 1;\\n}\\n\\n@media (prefers-reduced-motion: no-preference) {\\n  html {\\n    scroll-behavior: smooth;\\n  }\\n}\\n@media screen and (max-width: 800px) {\\n  body {\\n    font-size: 14px;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  body {\\n    font-size: 11px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/profile_pic.png */ \"./assets/profile_pic.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/purdue.jpg */ \"./assets/purdue.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/new_mountain.jpg */ \"./assets/new_mountain.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/lake.jpg */ \"./assets/lake.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/europe lake.jpg */ \"./assets/europe lake.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sweden.jpg */ \"./assets/sweden.jpg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"utf-8\\\" />\\n        <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <title>Lawrence Smith</title>\\n    </head>\\n\\n    <body>\\n \\n\\n       \\n       <nav id = \\\"main-nav\\\" >\\n       \\n       <a href = \\\"#home\\\" class= \\\"active\\\" >Home</a>\\n      \\n       <a href = \\\"#about_me\\\">Projects</a>\\n        <a href = \\\"#portfolio\\\">Pictures & contact</a>\\n       <!-- <a href = \\\"#contact\\\" >Contact</a>     -->\\n       </nav>\\n\\n       <section id = \\\"home\\\" class = \\\"image-fixer\\\">\\n       \\n         <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" class = \\\"portrait\\\">\\n       \\n        <!-- <p style=\\\" color: #D2386C; font-size: 25px; background-color: rgba(0,0,0,0.5);\\\">Hello! I am a sophomore who goes to Purdue University currently pursuing Computer Engineering!           -->\\n        </p>\\n\\n        <p style=\\\"padding-top: 10px; color: white;\\\">\\n          <p style=\\\"font-size: 25px; color: white\\\">\\n          Hello! My name is Lawrence Smith and I am a sophomore studying Computer Engineering at Purdue University.\\n          </p>\\n          <br>\\n          I am constantly intrigued by the endless possibilities and challenges of software development, and I find <br>great joy in solving problems and striving to improve my skills and knowledge in the field. \\n          <br>I aspire to join an ambitious company that is innovating and creating impactful software solutions.\\n          <br><br>\\n          In my free time, I enjoy going on hikes, playing basketball, and going to the gym. \\n          <br>\\n        \\n          <br>Towards the bottom are some of my favorite pcitures I've taken.\\n        </p>  \\n        <!-- <button id = \\\"open\\\" style=\\\" margin-top: 100px; \\\">\\n                About Me\\n                </button>\\n                <div class = \\\"modal_container\\\" id = \\\"modal_container\\\">\\n                <div class = \\\"modal\\\">\\n                    <h1> hanson is awesome</h1>\\n                    <p>I am a current freshman at UC Davis \\n                        pursuing a Bachelor's Degree in Computer Engineering with a minor in Technology Management. I'm passionate about the world of technology and where it will take us in the future.\\n                         I enjoy working out and going on bike rides in my spare time..\\n                        </p> \\n             <button id = \\\"close\\\">\\n                    Close me\\n                </button> -->\\n       </section>\\n       <section id = \\\"about_me\\\">\\n        <div>\\n          <h2><br><br>Projects <br></h2>\\n            <a target = \\\"_blank\\\" href = \\\"https://nba-api-app-kappa.vercel.app/\\\">\\n            <img src = \\\"https://www.logodesignlove.com/images/classic/nba-logo.jpg\\\" alt = \\\"NBA logo\\\" style=\\\"width: 300px; margin-top: 10px; border-radius: 30px;\\\">\\n            </a>\\n            <header style=\\\"color: white; font-size: 20px; margin-top: 20px;\\\">\\n              NBA API App\\n            </header>\\n            <p style=\\\"font-size: 17px; color: white;\\\"><br>Developed a front-end interface with React, Typescript, Axios, CSS, and a Basketball API.\\n              <br>\\n              \\n              Implemented player search functionality by connecting an input that calls the name search API endpoint on change.\\n              <br>\\n              Added a modal window that displays detailed player statistics upon user interaction.\\n              </p>\\n            <!-- <h2>Hobbies</h2>\\n            <p> Yeah yeah andaklj;ksflgsagj nd kjsadklja nadjktg the onylnsam n lkgds kaseaukwlutla tyhaerl aasn alrlurthrl;ikurjyhlaikjh</p> -->\\n            <!-- <h2>Dream Job</h2>\\n            <p> Yeah yeahsdl;kgaoi;gerhoreihgopihohgeoiy[ojhwqeryoiyrtj rojhgqoep;ihgrangoreihyr;aoiknfdl;kng;lkjng fv jvbnafdjkgah; </p> -->\\n        </div>\\n       </section>\\n      \\n       <section id = \\\"portfolio\\\" >\\n        <br>\\n        <div class=\\\"carousel-container\\\">\\n            <div class = \\\"buttons\\\">\\n            <button id = \\\"previousBtn\\\" class=\\\"prev\\\">&#10094;</button>\\n            <button id = \\\"nextBtn\\\" class=\\\"next\\\">&#10095;</button>\\n            <div class=\\\"carousel-slide\\\">\\n              <img src =\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" id = \\\"lastClone\\\"  >\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" >\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" >\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" >\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\">\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" >\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" id = \\\"firstClone\\\" >\\n            </div>\\n            </div>\\n            </div>\\n            <div style=\\\"font-size: 25px; margin-top: 10px;\\\">\\n              Some of my favorite pictures I've taken!\\n            </div>\\n          <div style=\\\"margin-top: 100px;\\\">\\n            <div style=\\\"margin-bottom: 20px; font-size: 30px;\\\">Contact Me!</div>\\n            <div class=\\\"row \\\">\\n              <div class=\\\"column\\\">\\n                <a target = \\\"_blank\\\" href=\\\"https://github.com/leleuns\\\">\\n                  <img src=\\\"https://cdn-icons-png.flaticon.com/512/25/25231.png\\\" alt=\\\"Git Hub\\\" style=\\\"width:10%\\\">\\n                </a>\\n              </div> \\n            <div class=\\\"column\\\" >\\n              <a target = \\\"_blank\\\" href=\\\" https://www.linkedin.com/in/lawrencefsmith/\\\">\\n                <img src=\\\"https://cdn-icons-png.flaticon.com/512/174/174857.png\\\" alt=\\\"LinkedIn\\\" style=\\\"width:10%; \\\">\\n              </a> \\n            </div>\\n             <div  class=\\\"column\\\">\\n              <a target = \\\"_blank\\\" href=\\\"mailto: smit4407@purdue.edu\\\">\\n                <img src=\\\"https://logos-world.net/wp-content/uploads/2021/02/Outlook-Logo.png\\\" alt=\\\"Outlook\\\" style=\\\"width:20%\\\">\\n              </a>\\n            </div>\\n          </div>\\n        </div> \\n </section>\\n\\n</body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/europe lake.jpg":
/*!********************************!*\
  !*** ./assets/europe lake.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"114d893acf4e3a070ae9.jpg\";\n\n//# sourceURL=webpack:///./assets/europe_lake.jpg?");

/***/ }),

/***/ "./assets/lake.jpg":
/*!*************************!*\
  !*** ./assets/lake.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b4a885ae7a8cf1d3a0d7.jpg\";\n\n//# sourceURL=webpack:///./assets/lake.jpg?");

/***/ }),

/***/ "./assets/new_mountain.jpg":
/*!*********************************!*\
  !*** ./assets/new_mountain.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d249f5f899874f826bdc.jpg\";\n\n//# sourceURL=webpack:///./assets/new_mountain.jpg?");

/***/ }),

/***/ "./assets/profile_pic.png":
/*!********************************!*\
  !*** ./assets/profile_pic.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"fba77d8c71616278e0f1.png\";\n\n//# sourceURL=webpack:///./assets/profile_pic.png?");

/***/ }),

/***/ "./assets/purdue.jpg":
/*!***************************!*\
  !*** ./assets/purdue.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e61bfc5aaab4a820c73f.jpg\";\n\n//# sourceURL=webpack:///./assets/purdue.jpg?");

/***/ }),

/***/ "./assets/sweden.jpg":
/*!***************************!*\
  !*** ./assets/sweden.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e677faa6994eaaae53e9.jpg\";\n\n//# sourceURL=webpack:///./assets/sweden.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;