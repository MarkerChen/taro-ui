(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"111":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),a=function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,o)}if("value"in n)return n.value;var r=n.get;return void 0!==r?r.call(o):void 0},r=_interopRequireDefault(o(1)),l=o(138),i=o(131),c=_interopRequireDefault(o(4)),u=_interopRequireDefault(o(133));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{"value":o,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=o,e}o(587);var p=function(e){function FloatLayoutPage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FloatLayoutPage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(FloatLayoutPage.__proto__||Object.getPrototypeOf(FloatLayoutPage)).apply(this,arguments));return e.config={"navigationBarTitleText":"Taro UI"},e.onScroll=function(e){console.log("onScroll",e)},e.onScrollToLower=function(e){console.log("onScrollToLower",e)},e.onScrollToUpper=function(e){console.log("onScrollToUpper",e)},e.handleClick=function(t){e.setState(_defineProperty({},"isOpened"+t,!0))},e.handleClose=function(t){console.log("handleClose"),e.setState(_defineProperty({},"isOpened"+t,!1))},e.state={"isOpened1":!1,"isOpened2":!1,"isOpened3":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FloatLayoutPage,c.default.Component),n(FloatLayoutPage,[{"key":"render","value":function render(){var e=this.state,t=e.isOpened1,o=e.isOpened2,n=e.isOpened3;return r.default.createElement(i.View,{"className":"page float-layout-page"},r.default.createElement(u.default,{"title":"Float Layout 浮动弹层"}),r.default.createElement(i.View,{"className":"doc-body"},r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"基本用法"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(l.AtButton,{"onClick":this.handleClick.bind(this,1)},"打开 Float Layout")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"最大高度"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(l.AtButton,{"onClick":this.handleClick.bind(this,2)},"打开 Float Layout")))),r.default.createElement(i.View,{"className":"panel"},r.default.createElement(i.View,{"className":"panel__title"},"监听事件"),r.default.createElement(i.View,{"className":"panel__content"},r.default.createElement(i.View,{"className":"example-item"},r.default.createElement(l.AtButton,{"onClick":this.handleClick.bind(this,3)},"打开 Float Layout"))))),r.default.createElement(l.AtFloatLayout,{"isOpened":t,"onClose":this.handleClose.bind(this,"1")},r.default.createElement(i.View,{"className":"content-wrapper"},"这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写")),r.default.createElement(l.AtFloatLayout,{"title":"这是个标题","isOpened":o,"onClose":this.handleClose.bind(this,"2")},r.default.createElement(i.View,{"className":"content-wrapper"},"《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生： 封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子 外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过 指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息 邻居当中有个永生不死的老头 … 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生： 封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子 外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过 指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息 邻居当中有个永生不死的老头 … 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。")),r.default.createElement(l.AtFloatLayout,{"title":"这是个标题","isOpened":n,"onScroll":this.onScroll,"onScrollToLower":this.onScrollToLower,"onScrollToUpper":this.onScrollToUpper,"onClose":this.handleClose.bind(this,"3")},r.default.createElement(i.View,{"className":"content-wrapper"},"《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生： 封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子 外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过 指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息 邻居当中有个永生不死的老头 … 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生： 封笔的诗人与智力障碍的儿子一起生活； 绝望的备胎照顾梦中情人与别人的孩子 外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过 指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息 邻居当中有个永生不死的老头 … 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。 然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。")))}},{"key":"componentDidMount","value":function componentDidMount(){a(FloatLayoutPage.prototype.__proto__||Object.getPrototypeOf(FloatLayoutPage.prototype),"componentDidMount",this)&&a(FloatLayoutPage.prototype.__proto__||Object.getPrototypeOf(FloatLayoutPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){a(FloatLayoutPage.prototype.__proto__||Object.getPrototypeOf(FloatLayoutPage.prototype),"componentDidShow",this)&&a(FloatLayoutPage.prototype.__proto__||Object.getPrototypeOf(FloatLayoutPage.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){a(FloatLayoutPage.prototype.__proto__||Object.getPrototypeOf(FloatLayoutPage.prototype),"componentDidHide",this)&&a(FloatLayoutPage.prototype.__proto__||Object.getPrototypeOf(FloatLayoutPage.prototype),"componentDidHide",this).call(this)}}]),FloatLayoutPage}();t.default=p},"133":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var n=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),a=_interopRequireDefault(o(1)),r=_interopRequireDefault(o(4)),l=_interopRequireDefault(o(132)),i=o(131);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}o(134);var c=function(e){function DocsHeader(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,DocsHeader),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(DocsHeader.__proto__||Object.getPrototypeOf(DocsHeader)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(DocsHeader,r.default.Component),n(DocsHeader,[{"key":"render","value":function render(){var e=this.props.title;return a.default.createElement(i.View,{"className":"doc-header"},a.default.createElement(i.View,{"className":"doc-header__title"},e))}}]),DocsHeader}();t.default=c,c.defaultProps={"title":"标题"},c.propTypes={"title":l.default.string}},"134":function(e,t,o){},"587":function(e,t,o){}}]);