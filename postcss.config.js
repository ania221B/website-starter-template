// postcss.config.js
import purgecss from '@fullhuman/postcss-purgecss'

export default {
  plugins: [
    purgecss({
      content: [
        './index.html',
        './src/**/*.js',
        './src/**/*.scss',
        './src/**/*.ts'
      ],
      safelist: ['flow'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
