const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin").default;
const webpack = require("webpack");

module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: true,
  },
  webpackFinal: async (config) => {
    config.plugins = [
      ...(config.plugins || []),
      new TsconfigPathsPlugin(),
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ];

    return config;
  },
};
