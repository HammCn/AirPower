import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'
import globals from 'globals'

export default tseslint.config(
  // 基础配置
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // 集成 Prettier
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      'prettier/prettier': 'error', // 启用 Prettier 格式化检查
      '@typescript-eslint/no-unused-vars': 'warn', // 自定义规则示例
      eqeqeq: 'warn',
    },
  },
  // 解析选项
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      parser: tseslint.parser,
      globals: { ...globals.browser, ...globals.node },
    },
    ignores: ['dist/**', 'node_modules/**'], // 忽略目录
  },
)
