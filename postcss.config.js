/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-import'),
    require('postcss-url'),
    require('postcss-cssnext'),
    require('postcss-mixins')
  ]
}

module.exports = config
