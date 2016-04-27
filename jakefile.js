/*global desc, task*/

const fs = require('fs')
const uglify = require('uglify-js')
const stylus = require('stylus')
const nib = require('nib')
const Console = require('console').Console
const log = new Console(process.stdout, process.stderr)

function buildMinifiedCss (string) {

  let cssString = ''

  stylus(string)
    .set('compress', true)
    .use(nib())
    .import('nib')
    .define('url', stylus.url())
    .render((err, css) => {
      if (err) throw err
      cssString = css.replace(/\n/g, '')
    })

  return cssString
}

function buildMinifiedJs (string) {

  const compressor = uglify.Compressor()
  const ast = uglify.parse(string)

  ast.figure_out_scope()
  ast.transform(compressor)
  ast.figure_out_scope()
  ast.compute_char_frequency()
  ast.mangle_names()

  return ast.print_to_string({
    'comments': /bitcoinate/
  })
}


desc('Default build process')
task('default', ['bitcoinate.min.js'], () => {})


desc('Compile bitcoinate.min.js')
task('bitcoinate.min.js', [], () => {

  let jsString = fs
    .readFileSync('src/bitcoinate.js')
    .toString()

  const stylString = fs
    .readFileSync('src/bitcoinate.styl')
    .toString()

  const file = fs.openSync('bitcoinate.min.js', 'w+')

  const version = JSON
    .parse(fs.readFileSync('package.json'))
    .version

  const cssString = buildMinifiedCss(stylString)

  jsString = buildMinifiedJs(
    jsString
      .replace('{{ CSS }}', cssString)
      .replace('{{ VERSION }}', version)
  )

  fs.writeSync(file, jsString)

  log.info('Building ' + this.name + ' succeeded')
})


desc('Compile bitcoinate.min.css')
task('bitcoinate.min.css', [], () => {

  const stylString = fs
    .readFileSync('src/bitcoinate.styl')
    .toString()
  const file = fs.openSync('bitcoinate.min.css', 'w+')

  fs.writeSync(file, buildMinifiedCss(stylString))

  log.info('Building ' + this.name + ' succeeded')
})


desc('Remove compiled files')
task('clean', [], () => {

  fs.unlink('bitcoinate.min.js', err => {
    if (err) log.error(err)
  })

  fs.unlink('bitcoinate.min.css', err => {
    if (err) log.error(err)
  })
})
