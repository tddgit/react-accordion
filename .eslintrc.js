module.exports = {
    // parser: '@typescript-eslint/parser', // add the TypeScript parser
    // plugins: ['@typescript-eslint'], // add the TypeScript plugin
    // parserOptions: {
    //     // add these parser options
    //     tsconfigRootDir: __dirname,
    //     project: './tsconfig.json',
    //     sourceType: 'module',
    //     createDefaultProgram: true,
    // },
    rules: {
        "no-undef": 1,
    },
    extends: [
        // then, enable whichever type-aware rules you want to use
        'eslint:recommended',
        // 'airbnb-typescript',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
};
