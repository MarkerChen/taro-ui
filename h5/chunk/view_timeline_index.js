(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"133":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=_interopRequireDefault(n(1)),l=_interopRequireDefault(n(4)),a=_interopRequireDefault(n(132)),r=n(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(134);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,l.default.Component),o(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return i.default.createElement(r.View,{"className":"doc-header"},i.default.createElement(r.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":a.default.string}},"134":function(e,t,n){},"538":function(e,t,n){},"88":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:get(i,t,n)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(n):void 0},l=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(4)),r=n(131),c=n(138),u=_interopRequireDefault(n(133));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(538);var p=function(e){function TimelinePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TimelinePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TimelinePage.__proto__||Object.getPrototypeOf(TimelinePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TimelinePage,a.default.Component),o(TimelinePage,[{"key":"render","value":function render(){return l.default.createElement(r.View,{"className":"page"},l.default.createElement(u.default,{"title":"Timeline 时间轴"}),l.default.createElement(r.View,{"className":"doc-body"},l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"基础用法"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(c.AtTimeline,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"自定义颜色"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(c.AtTimeline,{"items":[{"title":"刷牙洗脸"},{"title":"吃早餐","color":"green"},{"title":"上班","color":"red"},{"title":"睡觉","color":"yellow"}]})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"自定义图标"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(c.AtTimeline,{"items":[{"title":"刷牙洗脸","icon":"check-circle"},{"title":"吃早餐","icon":"clock"},{"title":"上班","icon":"clock"},{"title":"睡觉","icon":"clock"}]})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"幽灵节点"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(c.AtTimeline,{"pending":!0,"items":[{"title":"刷牙洗脸"},{"title":"吃早餐"},{"title":"上班"},{"title":"睡觉"}]})))),l.default.createElement(r.View,{"className":"panel"},l.default.createElement(r.View,{"className":"panel__title"},"丰富内容"),l.default.createElement(r.View,{"className":"panel__content"},l.default.createElement(r.View,{"className":"example-item"},l.default.createElement(c.AtTimeline,{"pending":!0,"items":[{"title":"刷牙洗脸","content":["大概8:00"],"icon":"check-circle"},{"title":"吃早餐","content":["牛奶+面包","餐后记得吃药"],"icon":"clock"},{"title":"上班","content":["查看邮件","写PPT","发送PPT给领导"],"icon":"clock"},{"title":"睡觉","content":["不超过23:00"],"icon":"clock"}]}))))))}},{"key":"componentDidMount","value":function componentDidMount(){i(TimelinePage.prototype.__proto__||Object.getPrototypeOf(TimelinePage.prototype),"componentDidMount",this)&&i(TimelinePage.prototype.__proto__||Object.getPrototypeOf(TimelinePage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){i(TimelinePage.prototype.__proto__||Object.getPrototypeOf(TimelinePage.prototype),"componentDidShow",this)&&i(TimelinePage.prototype.__proto__||Object.getPrototypeOf(TimelinePage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){i(TimelinePage.prototype.__proto__||Object.getPrototypeOf(TimelinePage.prototype),"componentDidHide",this)&&i(TimelinePage.prototype.__proto__||Object.getPrototypeOf(TimelinePage.prototype),"componentDidHide",this).call(this)}}]),TimelinePage}();t.default=p}}]);