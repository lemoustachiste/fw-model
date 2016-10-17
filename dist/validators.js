"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.required = required;
exports.isEmail = isEmail;
exports.isNumber = isNumber;
exports.isInteger = isInteger;
exports.isUrl = isUrl;

function required(input) {
    if (input == null || input.length == 0) return "Required";
    var hasValue = input.toString().replace(/^\s+/, "").replace(/\s+$/, "").length > 0;
    return hasValue ? null : "Required";
}

var emailRegEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/i;

function isEmail(input) {
    return emailRegEx.test(input) ? null : "Not a valid Email Address";
}

function isNumber(input) {
    var isNumeric = !isNaN(input - parseFloat(input));
    return isNumeric ? null : "Not a valid number";
}

function isInteger(input) {
    var isInt = parseFloat(input) - parseInt(input) === 0;
    return isInt ? null : "Not a valid integer";
}

var urlRegEx = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/;

function isUrl(input) {
    return urlRegEx.test(input) ? null : "Not a valid URL";
}