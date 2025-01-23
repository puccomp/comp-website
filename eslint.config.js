import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-no-target-blank': 'off',
      eqeqeq: 'warn',
      curly: ['warn', 'multi-or-nest', 'consistent'],
      semi: ['warn', 'never'],
      quotes: ['warn', 'single'],
      'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...Object.keys(react.configs.recommended.rules).reduce(
        (acc, rule) => ({ ...acc, [rule]: 'off' }),
        {}
      ),
    },
  },
]
