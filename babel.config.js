module.exports = {
    presets: ['@babel/preset-typescript', '@vue/cli-plugin-babel/preset'],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
    ],
};
