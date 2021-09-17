const { commitTypes, modules } = require('./project')
module.exports = {
  types: commitTypes.map(({ name, value }) => {
    return {
      value,
      name: `${value.padEnd(20)} ${name}`
    }
  }),

  scopes: [
    ...modules,
    ['utils', 'utils 相关'],
    ['styles', '样式相关'],
    ['deps', '项目依赖'],
    ['other', '其他修改'],
    // 如果选择 custom ,后面会让你再输入一个自定义的 scope , 也可以不设置此项， 把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义并报告新增']
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(20)} (${description})`
    }
  }),
  messages: {
    type: '请确保你的提交遵循了原子提交规范！\n选择你要提交的类型:',
    scope: '\n选择一个 scope (可选):',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope:',
    subject: '删除下一行并填写一个简短精炼的描述语句:\n',
    body: '删除下一行并添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)。使用 "|" 换行:\n',
    breaking: '删除下一行并列举非兼容性重大的变更 (可选):\n',
    footer:
      '删除下一行并列举出所有变更的 ISSUES CLOSED  (可选)。 例如.: 31, 34:\n',
    confirmCommit: '确认提交?'
  },
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
  footerPrefix: 'Closes'
  // askForBreakingChangeFirst : true,
}
