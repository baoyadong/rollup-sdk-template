import resolve from "rollup-plugin-node-resolve";
import typescript from '@rollup/plugin-typescript'
import babel from "rollup-plugin-babel";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { eslint } from 'rollup-plugin-eslint'
// import sassLint from 'rollup-plugin-sass-lint';
// import postcssModules from 'rollup-plugin-postcss-modules'
// import autoprefixer from 'autoprefixer'
// import scss from 'rollup-plugin-scss' // Rollup multiple .scss, .sass and .css imports

export default {
  input: "src/main.tsx", //webpack entry
  output: {
    //webpack output
    file: "dist/bundle.js", //output filename
    format: "umd",//common.js   module.exports = ?
    sourcemap: true
  },
  plugins: [
    resolve(),
    typescript({
      sourceMap: true,
    }),
    commonjs(),
    eslint(),
    babel({//babel-loader
      presets: ["@babel/preset-env"],
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
    livereload(),
    serve({
      open: true, // 是否打开浏览器
      contentBase: '', // 入口html的文件位置
      historyApiFallback: true, // Set to true to return index.html instead of 404
      host: 'localhost',
      port: 8080
    }),
    // scss(), // will output compiled styles to output.css
    postcss({
      modules: true,
      use: ['sass'],
      plugins: [
        // autoprefixer()
      ]
    }),
  ],
};
