module.exports = {
  title: 'HITOWA',
  description:'HITOWA GROUP MESSAGE',
  dest: 'dist',
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ],
  }
}
