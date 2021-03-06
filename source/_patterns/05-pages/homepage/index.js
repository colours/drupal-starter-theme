/**
 * Full Page Demos
 *
 * This file is NOT imported by design-system.js, but is included as part of
 * particle/apps/pl/index.js
 */

import $ from 'jquery';

// Ensure all assets required by demos are present.
import 'protons';
import 'templates/site-container.twig';
import 'templates/basic-page';

// Demo templates.
import './article.twig';
import './homepage.twig';

export const name = 'demoPages';

export function disable() {}

export function enable(context = $(document), settings) {
  $('.homepage__header', context).css('color', settings.color);
  $('.homepage__text', context).html(
    'the header color should be overwritten by settings in pl/index.js. this text was overwritten from js in 05-pages/demo/index.js.',
  );
}

export default enable;
