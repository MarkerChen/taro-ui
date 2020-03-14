(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"133":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=_interopRequireDefault(a(1)),i=_interopRequireDefault(a(4)),o=_interopRequireDefault(a(132)),r=a(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(134);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,i.default.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return l.default.createElement(r.View,{"className":"doc-header"},l.default.createElement(r.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":o.default.string}},"134":function(e,t,a){},"530":function(e,t,a){},"85":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&defineProperties(e.prototype,t),a&&defineProperties(e,a),e}}(),l=function get(e,t,a){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var l=Object.getPrototypeOf(e);return null===l?void 0:get(l,t,a)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(a):void 0},i=_interopRequireDefault(a(1)),o=a(4),r=_interopRequireDefault(o),c=a(131),s=a(138),u=_interopRequireDefault(a(133));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}a(530);var m=function(e){function TagPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TagPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TagPage.__proto__||Object.getPrototypeOf(TagPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.state={"tagList":[{"name":"tag-1","active":!1},{"name":"tag-2","active":!1},{"name":"tag-3","active":!0},{"name":"tag-4","active":!0}],"hollowTagList":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"solidTagList":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"hollowTagList2":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"solidTagList2":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}]},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TagPage,r.default.Component),n(TagPage,[{"key":"onClick","value":function onClick(e){var t=this.state.tagList,a=t.findIndex(function(t){return t.name===e.name}),n=!t[a].active,l="您点击的 tag 标签名是："+e.name+"，点击前是否选中："+e.active+"，点击后："+n;t[a].active=n,this.setState({"tagList":t}),r.default.getEnv()===r.default.ENV_TYPE.WEB?alert(l):(0,o.showModal)({"content":l,"showCancel":!1}),console.log(e)}},{"key":"handleHollowClick","value":function handleHollowClick(e){var t=this.state.hollowTagList,a=t.findIndex(function(t){return t.name===e.name});t[a].active=!t[a].active,this.setState({"hollowTagList":t})}},{"key":"handleSolidClick","value":function handleSolidClick(e){var t=this.state.solidTagList,a=t.findIndex(function(t){return t.name===e.name});t[a].active=!t[a].active,this.setState({"solidTagList":t})}},{"key":"handleHollowSmallClick","value":function handleHollowSmallClick(e){var t=this.state.hollowTagList2,a=t.findIndex(function(t){return t.name===e.name});t[a].active=!t[a].active,this.setState({"hollowTagList2":t})}},{"key":"handleSolidSmallClick","value":function handleSolidSmallClick(e){var t=this.state.solidTagList2,a=t.findIndex(function(t){return t.name===e.name});t[a].active=!t[a].active,this.setState({"solidTagList2":t})}},{"key":"render","value":function render(){var e=this;return i.default.createElement(c.View,{"className":"page"},i.default.createElement(u.default,{"title":"Tag 标签"}),i.default.createElement(c.View,{"className":"doc-body"},i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"空心标签"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.hollowTagList.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":"at-tag-"+a},i.default.createElement(s.AtTag,{"name":t.name,"active":t.active,"circle":a%2==0,"onClick":e.handleHollowClick.bind(e)},"标签"))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"实心标签"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.solidTagList.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":"at-tag-"+a},i.default.createElement(s.AtTag,{"type":"primary","name":t.name,"active":t.active,"circle":a%2==0,"onClick":e.handleSolidClick.bind(e)},"标签"))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"点击事件"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.tagList.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":"at-tag-"+a},i.default.createElement(s.AtTag,{"name":t.name,"type":"primary","active":t.active,"circle":a%2==0,"onClick":e.onClick.bind(e)},"tag-",a+1))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"不可点击态"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},i.default.createElement(c.View,{"className":"subitem"},i.default.createElement(s.AtTag,{"type":"primary","circle":!0,"disabled":!0},"标签")),i.default.createElement(c.View,{"className":"subitem"},i.default.createElement(s.AtTag,{"type":"primary","disabled":!0},"标签"))))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"空心标签（小）"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.hollowTagList2.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":"at-tag-"+a},i.default.createElement(s.AtTag,{"size":"small","name":t.name,"active":t.active,"circle":a%2==0,"onClick":e.handleHollowSmallClick.bind(e)},"标签"))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"实心标签（小）"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},this.state.solidTagList2.map(function(t,a){return i.default.createElement(c.View,{"className":"subitem","key":"at-tag-"+a},i.default.createElement(s.AtTag,{"size":"small","type":"primary","name":t.name,"active":t.active,"circle":a%2==0,"onClick":e.handleSolidSmallClick.bind(e)},"标签"))})))),i.default.createElement(c.View,{"className":"panel"},i.default.createElement(c.View,{"className":"panel__title"},"不可点击态（小）"),i.default.createElement(c.View,{"className":"panel__content"},i.default.createElement(c.View,{"className":"example-item"},i.default.createElement(c.View,{"className":"subitem"},i.default.createElement(s.AtTag,{"size":"small","type":"primary","circle":!0,"disabled":!0},"标签")),i.default.createElement(c.View,{"className":"subitem"},i.default.createElement(s.AtTag,{"size":"small","type":"primary","disabled":!0},"标签")))))))}},{"key":"componentDidMount","value":function componentDidMount(){l(TagPage.prototype.__proto__||Object.getPrototypeOf(TagPage.prototype),"componentDidMount",this)&&l(TagPage.prototype.__proto__||Object.getPrototypeOf(TagPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){l(TagPage.prototype.__proto__||Object.getPrototypeOf(TagPage.prototype),"componentDidShow",this)&&l(TagPage.prototype.__proto__||Object.getPrototypeOf(TagPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){l(TagPage.prototype.__proto__||Object.getPrototypeOf(TagPage.prototype),"componentDidHide",this)&&l(TagPage.prototype.__proto__||Object.getPrototypeOf(TagPage.prototype),"componentDidHide",this).call(this)}}]),TagPage}();t.default=m}}]);