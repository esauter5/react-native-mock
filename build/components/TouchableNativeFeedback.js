var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);

var _TouchableWithoutFeedback=require('./TouchableWithoutFeedback');var _TouchableWithoutFeedback2=_interopRequireDefault(_TouchableWithoutFeedback);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var TouchableNativeFeedback=_react2['default'].createClass({displayName:'TouchableNativeFeedback',
propTypes:_extends({},
_TouchableWithoutFeedback2['default'].propTypes,{

background:_propTypes2['default'].object}),

statics:{
SelectableBackground:function(){function SelectableBackground(){}return SelectableBackground;}(),
SelectableBackgroundBorderless:function(){function SelectableBackgroundBorderless(){}return SelectableBackgroundBorderless;}(),
Ripple:function(){function Ripple(color,borderless){}return Ripple;}()},

render:function(){function render(){
return null;
}return render;}()});


module.exports=TouchableNativeFeedback;