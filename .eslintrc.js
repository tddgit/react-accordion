module.exports = {
    root: true,
    env: {
        commonjs: true,
        node: true,
        browser: true,
        es6: true,
        jest: true,
        mocha: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'react-app',
        'react-app/jest',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:json/recommended',
        'plugin:css-modules/recommended',
    ],
    ecmaFeatures: {
        modules: true,
        arrowFunctions: true,
        classes: true,
        spread: true,
    },
    //  "parser": "@typescript-eslint/parser",
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        'no-undef': 2,
        'no-plusplus': 0,
        camelcase: 0,
        'comma-dangle': 0,
        'no-unused-vars': 0,
        'no-useless-escape': 0,
        'guard-for-in': 1,
        //    "no-console": 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'import/default': 0,
        'import/extensions': 0,
        'import/no-duplicates': 0,
        'import/no-extraneous-dependencies': 0,
        'import/named': 0,
        'import/namespace': 0,
        'import/no-unresolved': 0,
        'import/no-named-as-default': 2,
        'no-param-reassign': 0,
        'no-lone-blocks': 0,
        'react/jsx-boolean-value': 0,
        'react/jsx-filename-extension': 0,
        'jsx-a11y/interactive-supports-focus': 1,
        'react/no-multi-comp': 0,
        'global-require': 0,
        'babel/new-cap': 1,
        'babel/camelcase': 1,
        'babel/no-invalid-this': 1,
        'babel/semi': 1,
        'babel/no-unused-expressions': 1,
        'babel/valid-typeof': 1,
        'new-cap': [
            2,
            {
                capIsNewExceptions: ['List', 'Map', 'Set'],
            },
        ],
        'no-use-before-define': [
            'error',
            {
                functions: false,
            },
        ],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-cond-assign': ['error', 'always'],
    },
    ignorePatterns: ['node_modules/', 'dist/', 'public/'],
    plugins: ['react', 'html', 'css-modules', 'import', 'babel'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    settings: {
        'import/parser': 'babel-eslint',
        'import/resolve': {
            moduleDirectory: ['node_modules', 'src'],
        },
        react: {
            version: 'detect',
        },
        'html/html-extensions': ['.html', '.we'],
        'html/xml-extensions': ['.html'],
        'html/report-bad-indent': 'error',
        'html/javascript-mime-types': '/^text\\/(javascript|jsx)$/',
        //    "html/indent": "0",
        //    // code should start at the beginning of the line (no initial indentation).
        //    "html/indent": "+4",
        //    // indentation is the <script> indentation plus two spaces.
        'html/indent': 'tab',
        // indentation is one tab at the beginning of the line.
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            env: {
                browser: true,
                es6: true,
                node: true,
            },
            extends: [
                'eslint:recommended',
                'airbnb-typescript',
                'plugin:react/recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
            ],
            globals: {
                Atomics: 'readonly',
                SharedArrayBuffer: 'readonly',
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2018,
                sourceType: 'module',
                project: './tsconfig.json',
            },
            plugins: ['react', '@typescript-eslint'],
            rules: {
                indent: [
                    'error',
                    4,
                    {
                        SwitchCase: 1,
                    },
                ],
                'linebreak-style': ['error', 'unix'],
                quotes: ['error', 'single'],
                'comma-dangle': ['error', 'always-multiline'],
                '@typescript-eslint/no-explicit-any': 0,
                'no-undef': 2,
                'no-unused-vars': 2,
                'no-useless-escape': 0,
                'no-console': 0,
                'no-use-before-define': 0,
                'no-param-reassign': 0,
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },
        },
        //    {
        //      "files": [
        //        "*.vue"
        //      ],
        //      "processor": "svelte3/svelte3",
        //      "parser": "@typescript-eslint/parser",
        //      // add the TypeScript parser
        //      "plugins": [
        //        "svelte3",
        //        "@typescript-eslint"
        //        // add the TypeScript plugin
        //      ],
        //      "parserOptions": {
        //        // add these parser options
        //        "tsconfigRootDir": "__dirname",
        //        "project": "./tsconfig.json",
        //        "sourceType": "module",
        //        "extraFileExtensions": [
        //          ".vue"
        //        ],
        //        "createDefaultProgram": true
        //      },
        //      "extends": [
        //        // then, enable whichever type-aware rules you want to use
        //        "plugin:vue/essential",
        //        // this is a default sub-set of rules for your .vue files
        //        "@vue/airbnb",
        //        // plug airbnb rules but made for .vue files
        //        "@vue/typescript"
        //        // default typescript related rules
        //      ],
        //      "rules": {
        //        "indent": [
        //          "error",
        //          4
        //        ],
        //        "linebreak-style": [
        //          "error",
        //          "unix"
        //        ],
        //        quotes: [
        //          "error",
        //          "single"
        //        ],
        //        semi: [
        //          "error",
        //          "always"
        //        ],
        //        'no-undef': 2,
        //        'no-cond-assign': [
        //          "error",
        //          "always"
        //        ],
        //        "no-console": "off"
        //      }
        //    },

        //    {
        //      "files": [
        //        "*.svelte"
        //      ],
        //      "processor": "svelte3/svelte3",
        //      "parser": "@typescript-eslint/parser",
        //      // add the TypeScript parser
        //      "plugins": [
        //        "svelte3",
        //        "@typescript-eslint"
        //        // add the TypeScript plugin
        //      ],
        //      "settings": {
        //        "svelte3/typescript": "require('typescript')"
        //        // pass the TypeScript package to the Sve lte plugin
        //        // ...
        //      },
        //      "parserOptions": {
        //        // add these parser options
        //        "tsconfigRootDir": "__dirname",
        //        "project": "./tsconfig.json",
        //        "sourceType": "module",
        //        "extraFileExtensions": [
        //          ".svelte"
        //        ],
        //        "createDefaultProgram": true
        //      },
        //      "extends": [
        //        // then, enable whichever type-aware rules you want to use
        //        "eslint:recommended",
        //        "airbnb-typescript",
        //        "plugin:@typescript-eslint/recommended",
        //        "plugin:@typescript-eslint/recommended-requiring-type-checking"
        //      ],
        //      "rules": {
        //        "@typesctipt-eslint/indent": [
        //          'error',
        //          4
        //        ],
        //        "linebreak-style": [
        //          'error',
        //          'unix'
        //        ],
        //        quotes: [
        //          'error',
        //          'single'
        //        ],
        //        semi: [
        //          'error',
        //          'always'
        //        ],
        //        'no-undef': 1,
        //        // override default options for rules from base configurations
        //        // 'comma-dangle': ['error', 'always'],npm install --global @vue/cli
        //        'no-cond-assign': [
        //          'error',
        //          'always'
        //        ],
        //        // disable rules from base configurations
        //        'no-console': 'off'
        //      }
        //    }
    ],
};

//  [
//    // then, enable whichever type-aware rules you want to use
//    //        "eslint:recommended",
////    "airbnb-typescript"
//    //    "plugin:@typescript-eslint/recommended",
//    //    "plugin:@typescript-eslint/recommended-requiring-type-checking"
//  ],
// parser: '@typescript-eslint/parser', // add the TypeScript parser
// plugins: ['@typescript-eslint'], // add the TypeScript plugin
// parserOptions: {
//     // add these parser options
//     tsconfigRootDir: __dirname,
//     project: './tsconfig.json',
//     sourceType: 'module',
//     createDefaultProgram: true,
// },
