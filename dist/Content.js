/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
dojoWebpackJsonp_hnpwa([0],{

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WidgetBase_1 = __webpack_require__(7);
var d_1 = __webpack_require__(1);
var Themeable_1 = __webpack_require__(22);
var Article_1 = __webpack_require__(73);
var css = __webpack_require__(72);
var Content = (function (_super) {
    __extends(Content, _super);
    function Content() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Content.prototype.render = function () {
        var data = this.properties.data;
        return d_1.v('main', { classes: this.classes(css.root) }, data.map(function (item, index) {
            return d_1.w(Article_1.Article, { key: index, index: index, item: item, pageNumber: 1 });
        }));
    };
    Content = __decorate([
        Themeable_1.theme(css)
    ], Content);
    return Content;
}(Themeable_1.ThemeableMixin(WidgetBase_1.WidgetBase)));
exports.Content = Content;


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {" _key":"article","root":"_25Pck9HL","pageNumber":"_2w4AqmJQ","post":"_3XB5fE0_","title":"_3LLrYYZ1","details":"_1V_edkRC","link":"_2iNp8P4w","comments":"_2cpI_Mjd"};

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {" _key":"content","root":"_2JwAJ3_m"};

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WidgetBase_1 = __webpack_require__(7);
var d_1 = __webpack_require__(1);
var Themeable_1 = __webpack_require__(22);
var css = __webpack_require__(71);
var Article = (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Article.prototype.render = function () {
        var _a = this.properties, item = _a.item, index = _a.index, pageNumber = _a.pageNumber;
        return d_1.v('article', { classes: this.classes(css.root) }, [
            d_1.v('span', { classes: this.classes(css.pageNumber) }, ["" + index * pageNumber]),
            d_1.v('div', { classes: this.classes(css.post) }, [
                d_1.v('h2', [
                    d_1.v('a', { href: item.url, target: 'none', classes: this.classes(css.title) }, [item.title])
                ]),
                d_1.v('p', { classes: this.classes(css.details) }, [
                    item.points + " points by ",
                    d_1.v('a', { classes: this.classes(css.link) }, [item.user]),
                    " " + item.time_ago + " ",
                    d_1.v('a', { classes: this.classes(css.link, css.comments) }, [item.comments_count + " comments"])
                ])
            ]),
        ]);
    };
    Article = __decorate([
        Themeable_1.theme(css)
    ], Article);
    return Article;
}(Themeable_1.ThemeableMixin(WidgetBase_1.WidgetBase)));
exports.Article = Article;


/***/ })

});
//# sourceMappingURL=Content.js.map