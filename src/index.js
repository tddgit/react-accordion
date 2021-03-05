import * as $ from 'jquery';
import Post from '@models/Post';

import Webpacklogo from './assets/img.png';
import xml from './assets/books.xml';
import json from './assets/json.json';
import './styles/styles.css';
import csv from './assets/sample2.csv';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('Webpack Post Title', Webpacklogo);

$('pre').addClass('code').html(post.toString());

console.log(post.toString());
console.log('JSON', json);
console.log('XML', xml);
console.log('CSV', csv);
