const path = require('path');

module.exports = {
    // Source files
    src: path.resolve(__dirname, './src'),

    // Entry points
    entryJS: path.resolve(__dirname, './src/index.js'),
    entryTS: path.resolve(__dirname, './src/index.ts'),

    // Production build files
    build: path.resolve(__dirname, './dist'),

    // public path
    public: path.resolve(__dirname, './dist'),

    // images path
    images: path.resolve(__dirname, './src/images'),

    // assets path
    assets: path.resolve(__dirname, './src/assets'),

    // static path
    static: path.resolve(__dirname, './src/static'),
};
