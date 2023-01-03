module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  public: 'public',
  themeConfig: {
    navbar: false
  },
  output: {
    path: path.resolve(__dirname, 'docs')
  },
  patterns: [
    'docs/*.md',
    'docs/**/*.md',
    '.vupress/**/*.vue',
    '!amplify/**',
    '!tools/**'
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ],
  }
}
