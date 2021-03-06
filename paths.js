const path = require('path');

module.exports = {
    // Source files
    src: path.resolve(__dirname, '../src'),

    // Production build files
    build: path.resolve(__dirname, '../dist'),

    // public path
    public: path.resolve(__dirname, '../public/'),
};
