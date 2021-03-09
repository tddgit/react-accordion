// ========================REACT==================
import React from 'react';
import ReactDOM from 'react-dom';
import { createApp } from 'vue';
import App from './App.vue';
import './styles/less.less';
import './styles/main.css';
import './styles/scss.scss';

// ========================STYLES==================
import './styles/styles.css';

createApp(App).mount('#app');
// ========================GENERAL==================

ReactDOM.render(
    <Counter />,
    document.getElementById('react-root'),
);

const graphql = require('graphql');

// ========================VUE==================
