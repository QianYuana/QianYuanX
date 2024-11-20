module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  rules: {
    '@typescript-eslint/no-unused-vars': 'off', // 禁用未使用变量的检测
    eqeqeq: 'off', // 禁用严格 == 的检查，允许使用 ==
    '@typescript-eslint/no-unused-expressions': 'off', // 禁用此规则，允许存在未用作赋值或函数调用的表达式
    'no-param-reassign': 'off', // 禁用此规则，允许在函数体内重新赋值给参数
    '@typescript-eslint/no-use-before-define': 'off', // 禁用此规则，允许在变量或函数被定义之前使用它们
  },
};
