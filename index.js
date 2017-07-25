'use strict';

var isArray = require('isarray');
var isObject = require('isobject');

var hasOwnProperty = function (obj, key) {
  return Object.hasOwnProperty.call(obj, key);
};

var isFunction = function (value) {
  return typeof value === 'function';
};

var arrayIncludes = function (arr, value) {
  if (!isArray(arr)) return false;

  return arr.indexOf(value) >= 0;
};

module.exports = function (obj, fn) {
  if (!isObject(obj)) return {};
  if (!fn) return obj;

  var key, item, result = {};

  for (key in obj) {
    if (hasOwnProperty(obj, key)) {
      item = obj[key];

      if (isFunction(fn)) {
        if (fn(item, key, obj)) {
          result[key] = item;
        }
      } else {
        if (fn !== key && !arrayIncludes(fn, key)) {
          result[key] = item;
        }
      }
    }
  }

  return result;
};
