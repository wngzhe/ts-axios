module.exports = {
  // parser: "@typescript-eslint/parser", //定义ESLint的解析器
  extends: ["alloy", "alloy/typescript"], //定义文件继承的子规范
  // plugins: ["@typescript-eslint"], //定义了该eslint文件所依赖的插件
  env: {
    // 您的环境变量（包含多个预定义的全局变量）
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 您的全局变量（设置为 false 表示它不允许被重新赋值）
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // 禁止使用 var
    // "no-var": "error",
    // 优先使用 interface 而不是 type
    // "@typescript-eslint/consistent-type-definitions": ["error", "interface"]
  }
};
