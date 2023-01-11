module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  themeConfig: {
    nav:[
      {text:'Home', link:'/'},
      {text:'categories', link:'/categories/'}
  ],
  patterns: [
    'docs/*.md',
    'docs/**/*.md',
    '.vupress/**/*.vue',
    '!amplify/**',
    '!tools/**'
  ],
}
