"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BaseInput(props) {
  var value = props.value;
  var readonly = props.readonly;
  var _onChange = props.onChange;

  return _react2.default.createElement("input", _extends({}, props, {
    className: "form-control",
    readOnly: readonly,
    value: typeof value === "undefined" ? "" : value,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    } }));
}

BaseInput.defaultProps = {
  type: "text",
  required: false,
  disabled: false,
  readonly: false
};

if (process.env.NODE_ENV !== "production") {
  BaseInput.propTypes = {
    id: _react.PropTypes.string.isRequired,
    placeholder: _react.PropTypes.string,
    value: _react.PropTypes.any,
    required: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    readonly: _react.PropTypes.bool,
    onChange: _react.PropTypes.func
  };
}

exports.default = BaseInput;