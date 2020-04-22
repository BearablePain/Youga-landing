window.addEventListener('DOMContentLoaded', function () {
  "use strict";

let createCalculator = require('./parts/calculator.js'),
    createTabs = require('./parts/createTab'),
    sendFormContact = require('./parts/formContact'),
    sendFormMore = require('./parts/formMore'),
    createModal = require('./parts/modal'),
    createSlider = require('./parts/slider'),
    createTimer = require('./parts/timer');

createCalculator();
createTabs();
sendFormContact();
sendFormMore();
createModal();
createSlider();
createTimer();

});