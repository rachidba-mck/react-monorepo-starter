import babel from "rollup-plugin-babel";
import typescript from 'rollup-plugin-typescript2';

const plugins = [babel({ exclude: "node_modules/**" })];

export default [
  {
    input: "src/index.tsx",
    plugins: [
      typescript({
          tsconfig: "tsconfig.json"
      }),
    ],
    output: {
      file: `dist/index.js`,
      format: 'esm',
    },
  },
];