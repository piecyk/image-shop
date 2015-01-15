/**
 * @fileOverview
 * @name ImageHelper.js
 * @author
 * @license
 */
'use strict';

var R = require('ramda');
var Type = require('./type');

/**
 *
 * @param {} type
 */
var ImageHelper = function(options) {
  this.map = {};
  this.options = R.mixin({
    removeFromMap: false,
    addIfNotInMap: false
  }, options);
};

ImageHelper.prototype.addToMap = function(array) {
  function updateObj(el) {
    el.price = Math.random() * (20 - 1) + 1;
    el.count = 0;

    return el;
  }
  function createHashMap(obj, el) {
    var typeRegex = /jpeg|png/;

    if (typeRegex.test(el.mime)) {
      obj[el.sha1] = updateObj(el);
    }
    return obj;
  }
  this.map = R.reduce(createHashMap, this.map, Type.set(array || [], 'array'));
  return this;
};

ImageHelper.prototype.clearMap = function() {
  for (var el in this.map) { delete this.map[el]; }
  return this;
};

ImageHelper.prototype.addMapToMap = function(map) {
  for (var el in map) { this.map[el] = map[el]; }
  return this;
};

//TODO: don;t like this ;/ to much if... re-factor
ImageHelper.prototype.add = function(image) {
  if (this.map[image.sha1]) {
    this.map[image.sha1].count++;
  } else if (this.options.addIfNotInMap) {
    this.map[image.sha1] = image;
    this.map[image.sha1].count++;
  }
  return this;
};

//TODO: don;t like this ;/ to much if... re-factor
ImageHelper.prototype.remove = function(image) {
  if (this.map[image.sha1]) {
    if (this.options.removeFromMap && this.map[image.sha1].count === 1) {
      delete this.map[image.sha1];
    } else if (this.map[image.sha1].count > 0){
      this.map[image.sha1].count--;
    }
  }
  return this;
};

ImageHelper.prototype.count = function() {
  return R.keys(this.map).length;
};

ImageHelper.prototype.getPrice = function() {
  return R.reduce(function(value, el) {
       return value + (el.price * el.count);
  }, 0, R.values(this.map));
};

var build = function(options) {
  return new ImageHelper(options);
};

exports.build = build;
