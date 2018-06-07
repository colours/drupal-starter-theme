/**
 * Pattern Lab-specific webpack config.
 * This is merged over top of webpack.starter_theme.prod.js and
 * outputs compiled bundles to starter_theme/dist/assets.
 */

// Library Imports
const merge = require('webpack-merge');

// Custom Imports
const starterTheme = require('../../webpack.starter_theme.prod');
const pl = require('./webpack.pl.shared');

const prod = {};

module.exports = merge(starterTheme, pl, prod);
