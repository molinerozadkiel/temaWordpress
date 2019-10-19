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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, __webpack_exports__) {

"use strict";
eval("/**\n * BLOCK: bannersbuild\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n// import './editor.scss';\n// import './style.scss';\n\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload,\n    InnerBlocks = _wp$editor.InnerBlocks,\n    InspectorControls = _wp$editor.InspectorControls;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow,\n    ToggleControl = _wp$components.ToggleControl,\n    ColorPicker = _wp$components.ColorPicker;\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-bannersbuild', {\n\ttitle: 'Mega',\n\ticon: 'heart',\n\tcategory: 'common',\n\tattributes: {\n\t\tbannerLink: { type: 'array', source: 'children', selector: '.bannerLink' },\n\t\tbannerTxt: { type: 'array', source: 'children', selector: '.bannerTxt' },\n\t\tcardImg: { attribute: 'src', selector: '.bannerImg' },\n\t\tcardAlt: { attribute: 'alt', selector: '.bannerImg' },\n\t\t// To storage background colour of the div\n\t\tbackground: {\n\t\t\ttype: 'string',\n\t\t\tdefault: 'blue' // Default value for newly added block\n\t\t},\n\n\t\taltStyle: { type: 'array' }\n\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\t\tvar getImgButton = function getImgButton(openEvent) {\n\t\t\treturn attributes.cardImg ? wp.element.createElement('img', { src: attributes.cardImg, onClick: openEvent, className: 'bannerImg', alt: 'si' }) : wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'bannerImg' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tButton,\n\t\t\t\t\t{ onClick: openEvent, className: 'button button-large' },\n\t\t\t\t\t'Pick an image'\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\t\tvar estilo = { backgroundColor: attributes.background };\n\n\t\treturn [wp.element.createElement(\n\t\t\tInspectorControls,\n\t\t\t{ key: 'inspector' },\n\t\t\twp.element.createElement(PanelRow, null),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelRow,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\t{ 'class': 'blocks-base-control__label' },\n\t\t\t\t\t'background color'\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\tPanelRow,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(ColorPicker, {\n\t\t\t\t\tcolor: attributes.background,\n\t\t\t\t\tonChangeComplete: function onChangeComplete(value) {\n\t\t\t\t\t\treturn setAttributes({ background: value.hex });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t), wp.element.createElement(\n\t\t\t'figure',\n\t\t\t{ className: 'banner' },\n\t\t\twp.element.createElement(MediaUpload, {\n\t\t\t\tonSelect: function onSelect(media) {\n\t\t\t\t\tsetAttributes({ cardImg: media.url, cardAlt: media.alt });\n\t\t\t\t},\n\t\t\t\ttype: 'image',\n\t\t\t\tvalue: attributes.cardImg,\n\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\treturn getImgButton(open);\n\t\t\t\t}\n\t\t\t}),\n\t\t\twp.element.createElement(\n\t\t\t\t'figcaption',\n\t\t\t\t{ className: 'bannerCaption' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'bannerTxt', style: estilo },\n\t\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\t\t\treturn setAttributes({ bannerTxt: content });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tvalue: attributes.bannerTxt,\n\t\t\t\t\t\tplaceholder: 'contenido'\n\t\t\t\t\t})\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'bannerLink', style: estilo },\n\t\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\t\t\treturn setAttributes({ bannerLink: content });\n\t\t\t\t\t\t},\n\t\t\t\t\t\tvalue: attributes.bannerLink,\n\t\t\t\t\t\tplaceholder: 'contenido'\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t)];\n\t},\n\tsave: function save(_ref3) {\n\t\tvar attributes = _ref3.attributes;\n\n\t\tvar image = function image(src, alt, className) {\n\t\t\treturn src ? wp.element.createElement('img', { src: src, className: className, alt: alt }) : null;\n\t\t};\n\t\tvar estilo = { backgroundColor: attributes.background };\n\n\t\treturn wp.element.createElement(\n\t\t\t'figure',\n\t\t\t{ className: 'banner' },\n\t\t\timage(attributes.cardImg, attributes.cardAlt, 'bannerImg'),\n\t\t\twp.element.createElement(\n\t\t\t\t'figcaption',\n\t\t\t\t{ className: 'bannerCaption' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'bannerTxt', style: estilo },\n\t\t\t\t\tattributes.bannerTxt\n\t\t\t\t),\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'p',\n\t\t\t\t\t{ className: 'bannerLink', style: estilo },\n\t\t\t\t\tattributes.bannerLink\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGJhbm5lcnNidWlsZFxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbi8vIGltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG4vLyBpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIFJpY2hUZXh0ID0gX3dwJGVkaXRvci5SaWNoVGV4dCxcbiAgICBNZWRpYVVwbG9hZCA9IF93cCRlZGl0b3IuTWVkaWFVcGxvYWQsXG4gICAgSW5uZXJCbG9ja3MgPSBfd3AkZWRpdG9yLklubmVyQmxvY2tzLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgQnV0dG9uID0gX3dwJGNvbXBvbmVudHMuQnV0dG9uLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBQYW5lbFJvdyA9IF93cCRjb21wb25lbnRzLlBhbmVsUm93LFxuICAgIFRvZ2dsZUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5Ub2dnbGVDb250cm9sLFxuICAgIENvbG9yUGlja2VyID0gX3dwJGNvbXBvbmVudHMuQ29sb3JQaWNrZXI7XG5cbi8qKlxuICogUmVnaXN0ZXI6IGFhIEd1dGVuYmVyZyBCbG9jay5cbiAqXG4gKiBSZWdpc3RlcnMgYSBuZXcgYmxvY2sgcHJvdmlkZWQgYSB1bmlxdWUgbmFtZSBhbmQgYW4gb2JqZWN0IGRlZmluaW5nIGl0c1xuICogYmVoYXZpb3IuIE9uY2UgcmVnaXN0ZXJlZCwgdGhlIGJsb2NrIGlzIG1hZGUgZWRpdG9yIGFzIGFuIG9wdGlvbiB0byBhbnlcbiAqIGVkaXRvciBpbnRlcmZhY2Ugd2hlcmUgYmxvY2tzIGFyZSBpbXBsZW1lbnRlZC5cbiAqXG4gKiBAbGluayBodHRwczovL3dvcmRwcmVzcy5vcmcvZ3V0ZW5iZXJnL2hhbmRib29rL2Jsb2NrLWFwaS9cbiAqIEBwYXJhbSAge3N0cmluZ30gICBuYW1lICAgICBCbG9jayBuYW1lLlxuICogQHBhcmFtICB7T2JqZWN0fSAgIHNldHRpbmdzIEJsb2NrIHNldHRpbmdzLlxuICogQHJldHVybiB7P1dQQmxvY2t9ICAgICAgICAgIFRoZSBibG9jaywgaWYgaXQgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJlZDsgb3RoZXJ3aXNlIGB1bmRlZmluZWRgLlxuICovXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stYmFubmVyc2J1aWxkJywge1xuXHR0aXRsZTogJ01lZ2EnLFxuXHRpY29uOiAnaGVhcnQnLFxuXHRjYXRlZ29yeTogJ2NvbW1vbicsXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRiYW5uZXJMaW5rOiB7IHR5cGU6ICdhcnJheScsIHNvdXJjZTogJ2NoaWxkcmVuJywgc2VsZWN0b3I6ICcuYmFubmVyTGluaycgfSxcblx0XHRiYW5uZXJUeHQ6IHsgdHlwZTogJ2FycmF5Jywgc291cmNlOiAnY2hpbGRyZW4nLCBzZWxlY3RvcjogJy5iYW5uZXJUeHQnIH0sXG5cdFx0Y2FyZEltZzogeyBhdHRyaWJ1dGU6ICdzcmMnLCBzZWxlY3RvcjogJy5iYW5uZXJJbWcnIH0sXG5cdFx0Y2FyZEFsdDogeyBhdHRyaWJ1dGU6ICdhbHQnLCBzZWxlY3RvcjogJy5iYW5uZXJJbWcnIH0sXG5cdFx0Ly8gVG8gc3RvcmFnZSBiYWNrZ3JvdW5kIGNvbG91ciBvZiB0aGUgZGl2XG5cdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnYmx1ZScgLy8gRGVmYXVsdCB2YWx1ZSBmb3IgbmV3bHkgYWRkZWQgYmxvY2tcblx0XHR9LFxuXG5cdFx0YWx0U3R5bGU6IHsgdHlwZTogJ2FycmF5JyB9XG5cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KF9yZWYpIHtcblx0XHR2YXIgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IF9yZWYuc2V0QXR0cmlidXRlcztcblxuXHRcdHZhciBnZXRJbWdCdXR0b24gPSBmdW5jdGlvbiBnZXRJbWdCdXR0b24ob3BlbkV2ZW50KSB7XG5cdFx0XHRyZXR1cm4gYXR0cmlidXRlcy5jYXJkSW1nID8gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogYXR0cmlidXRlcy5jYXJkSW1nLCBvbkNsaWNrOiBvcGVuRXZlbnQsIGNsYXNzTmFtZTogJ2Jhbm5lckltZycsIGFsdDogJ3NpJyB9KSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnYmFubmVySW1nJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0QnV0dG9uLFxuXHRcdFx0XHRcdHsgb25DbGljazogb3BlbkV2ZW50LCBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLWxhcmdlJyB9LFxuXHRcdFx0XHRcdCdQaWNrIGFuIGltYWdlJ1xuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXHRcdH07XG5cdFx0dmFyIGVzdGlsbyA9IHsgYmFja2dyb3VuZENvbG9yOiBhdHRyaWJ1dGVzLmJhY2tncm91bmQgfTtcblxuXHRcdHJldHVybiBbd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFx0XHR7IGtleTogJ2luc3BlY3RvcicgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQYW5lbFJvdywgbnVsbCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFBhbmVsUm93LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J2xhYmVsJyxcblx0XHRcdFx0XHR7ICdjbGFzcyc6ICdibG9ja3MtYmFzZS1jb250cm9sX19sYWJlbCcgfSxcblx0XHRcdFx0XHQnYmFja2dyb3VuZCBjb2xvcidcblx0XHRcdFx0KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0UGFuZWxSb3csXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChDb2xvclBpY2tlciwge1xuXHRcdFx0XHRcdGNvbG9yOiBhdHRyaWJ1dGVzLmJhY2tncm91bmQsXG5cdFx0XHRcdFx0b25DaGFuZ2VDb21wbGV0ZTogZnVuY3Rpb24gb25DaGFuZ2VDb21wbGV0ZSh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kOiB2YWx1ZS5oZXggfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCksIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdmaWd1cmUnLFxuXHRcdFx0eyBjbGFzc05hbWU6ICdiYW5uZXInIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoTWVkaWFVcGxvYWQsIHtcblx0XHRcdFx0b25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KG1lZGlhKSB7XG5cdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IGNhcmRJbWc6IG1lZGlhLnVybCwgY2FyZEFsdDogbWVkaWEuYWx0IH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0eXBlOiAnaW1hZ2UnLFxuXHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5jYXJkSW1nLFxuXHRcdFx0XHRyZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmMikge1xuXHRcdFx0XHRcdHZhciBvcGVuID0gX3JlZjIub3Blbjtcblx0XHRcdFx0XHRyZXR1cm4gZ2V0SW1nQnV0dG9uKG9wZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2ZpZ2NhcHRpb24nLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2Jhbm5lckNhcHRpb24nIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncCcsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdiYW5uZXJUeHQnLCBzdHlsZTogZXN0aWxvIH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG5cdFx0XHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gc2V0QXR0cmlidXRlcyh7IGJhbm5lclR4dDogY29udGVudCB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5iYW5uZXJUeHQsXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcjogJ2NvbnRlbmlkbydcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnYmFubmVyTGluaycsIHN0eWxlOiBlc3RpbG8gfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShjb250ZW50KSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYmFubmVyTGluazogY29udGVudCB9KTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5iYW5uZXJMaW5rLFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6ICdjb250ZW5pZG8nXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdCldO1xuXHR9LFxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMy5hdHRyaWJ1dGVzO1xuXG5cdFx0dmFyIGltYWdlID0gZnVuY3Rpb24gaW1hZ2Uoc3JjLCBhbHQsIGNsYXNzTmFtZSkge1xuXHRcdFx0cmV0dXJuIHNyYyA/IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IHNyYywgY2xhc3NOYW1lOiBjbGFzc05hbWUsIGFsdDogYWx0IH0pIDogbnVsbDtcblx0XHR9O1xuXHRcdHZhciBlc3RpbG8gPSB7IGJhY2tncm91bmRDb2xvcjogYXR0cmlidXRlcy5iYWNrZ3JvdW5kIH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2ZpZ3VyZScsXG5cdFx0XHR7IGNsYXNzTmFtZTogJ2Jhbm5lcicgfSxcblx0XHRcdGltYWdlKGF0dHJpYnV0ZXMuY2FyZEltZywgYXR0cmlidXRlcy5jYXJkQWx0LCAnYmFubmVySW1nJyksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdmaWdjYXB0aW9uJyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdiYW5uZXJDYXB0aW9uJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0J3AnLFxuXHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnYmFubmVyVHh0Jywgc3R5bGU6IGVzdGlsbyB9LFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuYmFubmVyVHh0XG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQncCcsXG5cdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdiYW5uZXJMaW5rJywgc3R5bGU6IGVzdGlsbyB9LFxuXHRcdFx0XHRcdGF0dHJpYnV0ZXMuYmFubmVyTGlua1xuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);