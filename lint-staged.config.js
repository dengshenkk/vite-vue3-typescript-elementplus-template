// lint-staged.config.js
module.exports = {
  'src/**/*.{js,vue}': ['npm run lint:js', 'git add'],
  'src/**/*.{vue,html,css,scss,sass}': ['npm run lint:css', 'git add'],
  'src/**/*.{js,vue,html,css,scss,sass}': ['npm run prettier', 'git add']
}
