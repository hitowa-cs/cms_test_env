module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  dest: 'dist',
  public: 'public',
  themeConfig: {
    navbar: false
  },
  output: {
    path: path.resolve(__docs, 'build')
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
