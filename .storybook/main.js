module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "typescript": {
    files: [
      // Enable importing SVG as a React component in Storybook
      // Source: https://github.com/storybookjs/storybook/issues/8961#issuecomment-558856137
      "../src/custom.d.ts",
    ]
  },
  "webpackFinal": configWithSVGRLoader
}

// Enable importing SVG as a React component in Storybook.
//
// In Storybook, by default, SVG imports will result in an SVG file path instead of a React component.
// Storybook has a default webpack config which specifies `file-loader` for SVG assets which is the cause of the incorrectly imported SVGs.
// A custom webpack config for Storybook needs to be set up to specify `@svgr/webpack` as a webpack loader for `.svg` assets.
//
// Sources:
// - https://duncanleung.com/import-svg-storybook-webpack-loader/
// - https://stackoverflow.com/a/61706308
function configWithSVGRLoader(config) {
  // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
  const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;

  config.module.rules.push({
    test: /\.svg$/,
    enforce: 'pre',
    loader: '@svgr/webpack',
  });

  return config;
}
