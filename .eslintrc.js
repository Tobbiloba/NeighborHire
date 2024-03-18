module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        // 'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
        'plugin:@next/next/recommended', // Adjusted to use @next/next
        // 'google',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', '@next/next'],
    rules: {
        // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'no-unused-vars': 'error',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        // 'react-hooks/rules-of-hooks': 'error',

        'no-unused-expressions': 'error',
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
        'no-restricted-imports': ['error', 'import1', 'import2'],
        'no-restricted-modules': ['error', 'module1', 'module2'],
        'no-restricted-properties': ['error', { object: 'Math', property: 'pow' }],
        'no-restricted-syntax': ['error', 'FunctionDeclaration'],
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-undef': ['error', { allowGlobals: true }],
    },
}
