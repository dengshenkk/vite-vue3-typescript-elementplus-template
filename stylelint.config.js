module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    // Property Order
    'order/properties-order': [[], { severity: 'error' }],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
        severity: 'warning'
      }
    ]
  }
}
