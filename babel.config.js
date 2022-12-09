module.exports = {
  presets: [
    "@babel/typescript",
    "@babel/react",
    [
      "@babel/preset-env",
      {
        modules: "commonjs",
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
  sourceMaps: true,
  plugins: [],
};
