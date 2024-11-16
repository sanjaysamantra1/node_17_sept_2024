module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "google"
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        'prefer-template': 2,
        'eqeqeq': 2,
        'max-params' : ["error", 5],
        'require-jsdoc' : 0,
       'no-unused-vars': ['error', { args: 'after-used', argsIgnorePattern: '^_' }],
    }
}
