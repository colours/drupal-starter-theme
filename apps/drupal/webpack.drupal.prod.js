/**
 * Drupal-specific webpack config
 * This is merged over top of webpack.shared.config.js
 */

// Library Imports
const merge = require('webpack-merge');

// Custom Imports
const starterTheme = require('../../webpack.starter_theme.prod');
const drupal = require('./webpack.drupal.shared');

const prod = {};

module.exports = merge(starterTheme, drupal, prod);
