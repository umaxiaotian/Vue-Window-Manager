import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
export default {
  input: 'src/index.js', // Vue.js 3 のエントリーポイント
  output: {
    file: 'dist/bundle.esm.js', // 出力ファイル名
    format: 'es' // ES モジュールとして出力
  },
  plugins: [
    vue(), // Vue.js 3 を処理するために rollup-plugin-vue を使用
    postcss() // rollup-plugin-postcssを使用してCSSファイルを処理
  ]
}