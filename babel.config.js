module.exports = {
    presets: [
        '@babel/preset-env',
        //
        '@babel/preset-typescript',
        //
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        'transform-remove-debugger',
        ['transform-remove-console', { exclude: ['error', 'warn'] }],
    ],
};
