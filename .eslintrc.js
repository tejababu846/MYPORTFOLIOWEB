module.exports = {
  extends: ['react-app'],
  rules: {
    // Enforce 2-space indentation
    indent: ['error', 2],

    // Enforce the use of single quotes for strings
    quotes: ['error', 'single'],

    // Enforce semicolons at the end of statements
    semi: ['error', 'always'],

    // Disallow the use of console.log statements in production code
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

    // Enforce consistent naming conventions (customize as needed)
    camelcase: 'off', // Allow both camelCase and snake_case
    'react/prop-types': 'off', // If you're using TypeScript or PropTypes

    // Allow JSX in .js files (customize as needed)
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],

    // Enforce a blank line after imports
    'import/newline-after-import': ['error', { count: 1 }],

    // Enforce consistent line breaks in your files
    'linebreak-style': ['error', 'unix'],

    // Add more rules as needed
  },
};
