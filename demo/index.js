import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import '../less/index.less';
import { App } from '../test/test-app/app-config';


$(document.body).append('<div id="root"></dvi>');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
