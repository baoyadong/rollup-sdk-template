import resolve from "rollup-plugin-node-resolve";
import typescript from '@rollup/plugin-typescript'
import babel from "rollup-plugin-babel";
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
// import scss from 'rollup-plugin-scss' // Rollup multiple .scss, .sass and .css imports
import { terser } from 'rollup-plugin-terser'
// terser它是适用于ES6 +的JavaScript解析器，mangler和压缩器工具包

export default {
  input: "src/main.tsx", //webpack entry
  output: {
    //webpack output
    file: "dist/bundle.min.js", //output filename
    format: "umd", //common.js   module.exports = ?
  },
  plugins: [
    resolve(),
    typescript({
      "sourceMap": false,
    }),
    commonjs(),
    babel({//babel-loader
      presets: ["@babel/preset-env"],
      exclude: "node_modules/**", // 只编译我们的源代码
    }),
    terser(),
    // scss(), // will output compiled styles to output.css
    postcss({
      modules: true,
      plugins: []
    }),
  ],
};
