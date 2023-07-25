
const config = {
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],


  rules: {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    // '@typescript-eslint/no-unused-vars': [
    //   2,
    //   {
    //     argsIgnorePattern: '^_',
    //   },
    // ],
     "no-unused-vars": "off",
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
}

module.exports = config
