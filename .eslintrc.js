module.exports = {
  "env": {"browser": true, "commonjs": true, "es6": true},
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "plugins": ["react", "node",],
  "rules": {
    "indent": ["error", 2, {SwitchCase: 1}],
    "no-console": "off",
    "linebreak-style": 0,
    "quotes": ["error", "double"],
    "jsx-quotes": [1, "prefer-single"],
    "semi": ["error", "always"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-no-undef": "error",
  },
};
