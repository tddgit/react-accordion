import * as $ from 'jquery';

import Vue from 'vue';

import React from 'react';
import ReactDOM from 'react-dom';
import Post from './models/Post';

// import { enableProdMode } from '@angular/core';

import 'core-js/es6';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import App from './App.vue';

import Webpacklogo from './assets/img.png';
import xml from './assets/books.xml';
import json from './assets/json.json';
import './styles/styles.css';
import csv from './assets/sample2.csv';
import './styles/less.less';
import './styles/scss.scss';

import Counter from './components/counter';

// import html from './index.html';

// require('babel-plugin-runtime');
// require('babel-plugin-runtime/regenerator');
require('webpack-hot-middleware/client?reload=true');
require('./styles/main.css');
require('./images/link.jpg');

const post = new Post('Webpack Post Title', Webpacklogo);

$('pre').addClass('code').html(post.toString());

ReactDOM.render(<Counter />, document.getElementById('react-root'));

new Vue({
    el: '#appVue',
    render: (h) => h(App),
});

// createApp(App).mount('#appVue'); TOTO: Уточнить есть
// ли третья версия Vue  для установки

console.log(post.toString());
console.log('JSON', json);
console.log('XML', xml);
console.log('CSV', csv);
