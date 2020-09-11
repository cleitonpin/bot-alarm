module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'linebreak-style': 0,
        'global-require': 0,
        'eslint linebreak-style': [0, 'error', 'windows'],
        'no-console': 'off',
        'no-unused-vars': 'off',
        'no-trailing-spaces': 'off',
        indent: ['error', 4],
        quotes: 'off',
    },
};
