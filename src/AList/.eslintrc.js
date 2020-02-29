module.exports = {
    extends: [
      'airbnb',
      'plugin:prettier/recommended',
      'prettier/babel',
      'prettier/standard',
    ],
    plugins: ['babel', 'prettier'],
    parser: 'babel-eslint',
    env: {
      mocha: true,
      jest: true,
      browser: true,
      node: true,
      es6: true,
    },
    globals: {
      benchmark: true,
      expect: true,
      suite: true,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: true,
          jsxBracketSameLine: false,
          jsxSingleQuote: false,
          printWidth: 100,
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'all',
          useTabs: false,
          endOfLine: 'lf',
        },
      ],
      'class-methods-use-this': 'off',
      'import/prefer-default-export': 'off',
      'no-underscore-dangle': 'off',
      'default-case': 'off',
      'func-names': 'off',
      'function-paren-newline': 'off',
      'no-param-reassign': 'off',
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      'no-shadow': 'off',
      'no-unused-expressions': 'error',
      'prefer-arrow-callback': 'off',
      'prefer-const': 'warn',
      'jsx-a11y/href-no-hash': 'off',
      'jsx-a11y/anchor-is-valid': [
        'warn',
        {
          aspects: ['invalidHref'],
        },
      ],
      'no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
      'import/no-extraneous-dependencies': 'warn',
      "no-console": ["error", { "allow": ["error"] }],
      "import/no-extraneous-dependencies": "warn",
      "import/no-cycle": "warn",
      "no-bitwise": "warn",
    },
  };