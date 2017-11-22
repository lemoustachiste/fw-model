"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.required = required;
exports.isEmail = isEmail;
exports.isNumber = isNumber;
exports.isInteger = isInteger;
exports.inRange = inRange;
exports.isUrl = isUrl;
exports.isMinLength = isMinLength;
exports.isChecked = isChecked;
exports.isLength = isLength;

var _templateObject = _taggedTemplateLiteral(["^((https", ")://)", "(www.)?[a-z0-9]+(.[a-z]+)+(/?[-a-zA-Z0-9@:%_+.~#?&//=]+/?)*$"], ["^((https", "):\\/\\/)", "(www.)?[a-z0-9]+(\\.[a-z]+)+(\\/?[-a-zA-Z0-9@:%_\\+.~#?&\\/\\/=]+\\/?)*$"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var trimInput = function trimInput(input) {
    if (input != null && input.trim && typeof input.trim == "function") return input.trim();
    return input;
};

function required(input) {
    if (input == null || input.length == 0) return "Required";
    var hasValue = input.toString().replace(/^\s+/, "").replace(/\s+$/, "").length > 0;
    return hasValue ? null : "Required";
}

var emailRegEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/i;

function isEmail(input) {
    if (input == null || input.length == 0) return null;
    input = trimInput(input);
    return emailRegEx.test(input) ? null : "Not a valid Email Address";
}

function isNumber(input) {
    if (input == null || input.length == 0) return null;
    input = trimInput(input);
    var isNumeric = !isNaN(input - parseFloat(input));
    return isNumeric ? null : "Not a valid number";
}

function isInteger(input) {
    if (input == null || input.length == 0) return null;
    input = trimInput(input);
    var isInt = parseFloat(input) - parseInt(input) === 0;
    return isInt ? null : "Not a valid integer";
}

function inRange(min, max) {
    return function (input) {
        if (input == null || input.length == 0) return null;
        input = trimInput(input);
        var num = parseFloat(input);
        if (isNumber(input) != null) return null;
        if (min != null && max != null) {
            return num >= min && num <= max ? null : "Must be between " + min + " and " + max;
        } else if (min != null) {
            return num >= min ? null : "Must be at least " + min;
        } else if (max != null) {
            return num <= max ? null : "Must be at most " + max;
        } else {
            return null;
        }
    };
}

function isUrl() {
    var enforceSSL = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var enforceProtocol = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    return function (input) {
        if (input == null || input.length == 0) return null;
        input = trimInput(input);
        var urlRegEx = new RegExp(String.raw(_templateObject, enforceSSL ? '' : '?', enforceSSL || enforceProtocol ? '' : '?'));
        return urlRegEx.test(input) ? null : "Not a valid " + (enforceSSL ? 'SSL ' : '') + "URL";
    };
}

function isMinLength(num) {
    return function (input) {
        if (input == null || input.length == 0) return null;
        input = trimInput(input);
        return input.length >= num ? null : "Must be at least " + num + " characters";
    };
}

function isChecked(input) {
    if (input == null) return null;
    return input === true ? null : "Required";
}

function isLength(num) {
    return function (input) {
        input = trimInput(input);
        if (input.length < num) {
            return "Must be at least ${num} characters";
        }
        return null;
    };
}