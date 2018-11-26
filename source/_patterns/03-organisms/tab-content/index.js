/**
 * tabContent
 */

// Module dependencies
import $ from 'jquery';
import 'protons';

// Module styles
import './_tab-content.scss';

// Module template
import './_tab-content.twig';

import tabContent from './src';

export const name = 'tabContent';

export function disable() {}

export function enable($context) {
  // We have to glue this app to some piece of DOM
  tabContent($('#js-tab-content', $context));
}

export default enable;
