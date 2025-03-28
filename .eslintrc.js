module.exports = {
  root: true,
  globals: {
    defineEmits: "readonly",
    defineProps: "readonly",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },
  rules: {},
};
