module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Content.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_xmlConverter__ = __webpack_require__("./lib/xmlConverter.js");
var _jsxFileName = '/Users/peterchang/Desktop/other/xml-generater/components/Content.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content(props) {
        _classCallCheck(this, Content);

        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

        _this.onChange = _this.onChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = {
            xmlString: props.xmlString || 'default'
        };
        return _this;
    }

    _createClass(Content, [{
        key: 'onChange',
        value: function onChange(field, val) {
            return this.setState(_defineProperty({}, field, val));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            this.props.updateXml(this.state);
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _onChange = function _onChange(field) {
                return function (e) {
                    return _this2.onChange(field, e.target.value);
                };
            };

            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                    className: 'jsx-2371788220' + ' ' + 'contentWrapper',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'form',
                    { onSubmit: this.handleSubmit, className: 'jsx-2371788220' + ' ' + 'pure-form',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 25
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'fieldset',
                        {
                            className: 'jsx-2371788220' + ' ' + 'pure-group',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        Object(__WEBPACK_IMPORTED_MODULE_2__lib_xmlConverter__["b" /* getFields */])().map(function (field, index) {
                            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', {
                                key: index,
                                type: 'text',

                                placeholder: field,
                                onChange: _onChange(field),
                                className: 'jsx-2371788220' + ' ' + 'pure-input-1',
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 28
                                }
                            });
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'button',
                        { type: 'submit', className: 'jsx-2371788220' + ' ' + 'pure-button pure-input-1 pure-button-primary',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        ' Submit'
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: '2371788220',
                    css: '.contentWrapper.jsx-2371788220{margin:20px;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udGVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzRCLEFBR2lDLFlBQ0MsYUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9Db250ZW50LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmNoYW5nL0Rlc2t0b3Avb3RoZXIveG1sLWdlbmVyYXRlciIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0RmllbGRzfSBmcm9tICcuLi9saWIveG1sQ29udmVydGVyJ1xuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB4bWxTdHJpbmc6IHByb3BzLnhtbFN0cmluZyB8fCAnZGVmYXVsdCdcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNoYW5nZSAoZmllbGQsIHZhbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7W2ZpZWxkXTogdmFsfSlcbiAgICB9XG4gICAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlWG1sKHRoaXMuc3RhdGUpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IF9vbkNoYW5nZSA9IChmaWVsZCkgPT4gZSA9PiB0aGlzLm9uQ2hhbmdlKGZpZWxkLCBlLnRhcmdldC52YWx1ZSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50V3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB1cmUtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJwdXJlLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGRzKCkubWFwKChmaWVsZCwgaW5kZXgpPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdXJlLWlucHV0LTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtfb25DaGFuZ2UoZmllbGQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwicHVyZS1idXR0b24gcHVyZS1pbnB1dC0xIHB1cmUtYnV0dG9uLXByaW1hcnlcIj4gU3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jb250ZW50V3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRcblxuIl19 */\n/*@ sourceURL=components/Content.js */'
                })
            );
        }
    }]);

    return Content;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "./components/XmlTextarea.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/peterchang/Desktop/other/xml-generater/components/XmlTextarea.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content(props) {
        _classCallCheck(this, Content);

        return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));
    }

    _createClass(Content, [{
        key: "componentDidMount",
        value: function componentDidMount() {}

        //suppressContentEditableWarning is as same as contentEditable

    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "div",
                {
                    className: "jsx-2235088303" + " " + "xmlWrapper",
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    "xmp",
                    {
                        className: "jsx-2235088303",
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    this.props.xmlString
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
                    styleId: "2235088303",
                    css: ".xmlWrapper.jsx-2235088303{margin:20px;padding:20px;border:1px solid #dddddd;background:#eeeeee;color:#555555;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvWG1sVGV4dGFyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUI0QixBQUdxQyxZQUNDLGFBQ1kseUJBQ04sbUJBQ0wsY0FDbEIiLCJmaWxlIjoiY29tcG9uZW50cy9YbWxUZXh0YXJlYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0ZXJjaGFuZy9EZXNrdG9wL290aGVyL3htbC1nZW5lcmF0ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuXG4gICAgLy9zdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgaXMgYXMgc2FtZSBhcyBjb250ZW50RWRpdGFibGVcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhtbFdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnhtbFN0cmluZ31cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgICAgICAgICA8eG1wPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy54bWxTdHJpbmd9XG4gICAgICAgICAgICAgICAgPC94bXA+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAueG1sV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NTU1NTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50XG5cbiJdfQ== */\n/*@ sourceURL=components/XmlTextarea.js */"
                })
            );
        }
    }]);

    return Content;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),

/***/ "./lib/xmlConverter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return converter; });
var fields = ['mainTitle', 'mainDes', 'title', 'link', 'date', 'guid', 'videoUrl', 'keyWord', 'thumbnail', 'category', 'subtitleUrl'];

var getFields = function getFields() {
    return fields;
};

var converter = function converter(payload) {
    var mainTitle = payload.mainTitle,
        mainDes = payload.mainDes,
        title = payload.title,
        link = payload.link,
        date = payload.date,
        guid = payload.guid,
        videoUrl = payload.videoUrl,
        keyWord = payload.keyWord,
        thumbnail = payload.thumbnail,
        category = payload.category,
        subtitleUrl = payload.subtitleUrl;

    // date=(new Date()).toGMTString()

    return '<?xml version="1.0" encoding="utf-8"?>\n        <rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/">\n            <channel>\n                <title>' + mainTitle + '</title>\n                <description>' + mainDes + '</description>\n                <item>\n                    <title>' + title + '</title>\n                    <link>//' + link + '</link>\n                    <pubDate>' + date + '</pubDate>\n                    <guid>' + guid + '</guid>\n                    <media:content url="' + videoUrl + '" type="video/mp4" expression="full" />\n                    <media:title type="plain">' + title + '</media:title>\n                    <media:description type="plain"><![CDATA[\n        13\u6B72\u6642\u7B2C\u4E00\u6B21\u62CD\u651DVogue\uFF0C15\u6B72\u6642\u548CVogue\u4E00\u8D77\u53BB\u5DF4\u9ECE\u770B\u79C0\uFF0C17\u6B72\uFF0C\u6B50\u967D\u5A1C\u5A1C\u7B2C\u4E00\u6B21\u767B\u4E0AVogue\u5C01\u9762\u3002 \u6211\u5011\u5728\u7D10\u7D04\u90CA\u5340\u4E00\u500B\u53E4\u8001\u7684\u904A\u6A02\u5834\u9032\u884C\u9019\u6B21\u7684\u62CD\u651D\uFF0C\u70BA\u4E86\u907F\u514D\u4EBA\u6F6E\uFF0C\u5929\u6FDB\u6FDB\u4EAE\u6642\uFF0C\u5C31\u5DF2\u7D93\u6574\u88DD\u51FA\u767C\uFF0C\u79C1\u5E95\u4E0B\u7684\u5A1C\u5A1C\u5927\u591A\u6578\u6642\u5019\u90FD\u986F\u5F97\u6C88\n        ]]><![CDATA[\n        \u975C\uFF0C\u6ED1\u6ED1\u624B\u6A5F\uFF0C\u6216\u8005\u548C\u5DE5\u4F5C\u4EBA\u54E1\u8AC7\u7B11\u5169\u53E5\uFF0C\u5076\u723E\u8208\u8D77\u6642\uFF0C\u53C8\u6703\u5F88\u5C0F\u5973\u5B69\u7684\u958B\u59CB\u8DF3\u6296\u80A9\u821E\uFF0C\u6216\u8005\u4E7E\u8106\u548C\u5ABD\u5ABD\u5085\u5A1F\u6492\u5B0C\uFF0C\u9762\u5C0D\u93E1\u982D\u6642\uFF0C\u8209\u624B\u6295\u8DB3\u9593\u662F\u6C92\u6709\u751F\u6F80\u7684\u5927\u6C23\uFF0C\u66FE\u7D93\u6642\u5C1A\u5C0D\u5979\u4F86\u8AAA\u53EA\u662F\u8863\u670D\uFF0C\u6162\u6162\u5728\u63A5\u89F8\u8D8A\u4F86\u8D8A\u591A\u4E4B\u5F8C\uFF0C\u767C\u73FE\u4E86\u5176\u4E2D\u7684\u5967\u5999\u8207\u6A02\u8DA3\u3002\u73FE\u5728\u7684\u5979\uFF0C\u8D8A\u4F86\u8D8A\u6E05\u695A\u81EA\u5DF1\u60F3\u8981\u7684\u662F\u4EC0\u9EBC\uFF0C17\u6B72\u7684\u5A1C\u5A1C\uFF0C\u671D\u8457\u81EA\u5DF1\u7684\u5922\u60F3\u5927\u6B65\u9081\u9032\u3002\u6B32\u770B\u66F4\u591A\u7CBE\u5F69\u5167\u5BB9\uFF0C\u8ACB\u4E0A  VOGUE \u5B98\u7DB2\uFF1A<a href=http://tw.rd.yahoo.com/referurl/SIG=10sjrlv5v/*http%3A//www.vogue.com.tw/ target=_blank>http://www.vogue.com.tw/</a>  VOGUE \u7C89\u7D72\u5718\uFF1A<a href=http://tw.rd.yahoo.com/referurl/SIG=11446ajrd/*https%3A//www.facebook.com/VogueTW target=_blank>https://www.facebook.com/VogueTW</a>  VOGUE Beauty\u7F8E\u4EBA\u6703\uFF1A<a href=http://tw.rd.yahoo.com/referurl/SIG=118np8vr8/*https%3A//www.facebook.com/Vbeautyclub target=_blank>https://www.facebook.com/Vbeautyclub</a>  GQ \u5B98\u7DB2\uFF1A<a href=http://tw.rd.yahoo.com/referurl/SIG=10p1tksib/*http%3A//www.gq.com.tw/ target=_blank>http://www.gq.com.tw/</a>  GQ \u7C89\u7D72\u5718\uFF1A<a href=http://tw.rd.yahoo.com/referurl/SIG=115frbhh7/*https%3A//www.facebook.com/GQTaiwan target=_blank>https://www.facebook.com/GQTaiwan</a>  GQ \u5FAE\u91BA\u4FF1\u6A02\u90E8\uFF1A<a href=http://tw.rd.yahoo.com/referurl/SIG=118qaa9b2/*https%3A//www.facebook.com/GQClub.Wine target=_blank>https://www.facebook.com/GQClub.Wine</a>\n        ]]></media:description>\n                    <media:keywords>' + keyWord + '</media:keywords>\n                    <media:thumbnail url="' + thumbnail + '" />\n                    <media:' + category + '></media:' + category + '>\n                    <media:subtitle type="application/ttml+xml" lang="zh-Hant-TW" href="' + subtitleUrl + '" />\n                </item>\n            </channel>\n        </rss>';
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Content__ = __webpack_require__("./components/Content.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_XmlTextarea__ = __webpack_require__("./components/XmlTextarea.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_xmlConverter__ = __webpack_require__("./lib/xmlConverter.js");
var _jsxFileName = '/Users/peterchang/Desktop/other/xml-generater/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container(props) {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));

        _this.updateXml = _this.updateXml.bind(_this);
        _this.state = { xmlString: '' };
        return _this;
    }

    _createClass(Container, [{
        key: 'updateXml',
        value: function updateXml(data) {
            console.log('-=-=-= updateXml -=-=-=');
            this.setState({ xmlString: Object(__WEBPACK_IMPORTED_MODULE_3__lib_xmlConverter__["a" /* converter */])(data) });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Content__["a" /* default */], { updateXml: this.updateXml, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_XmlTextarea__["a" /* default */], { xmlString: this.state.xmlString, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                })
            );
        }
    }]);

    return Container;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map