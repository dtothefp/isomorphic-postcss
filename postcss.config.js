const path = require(`path`);

const cwd = (fp) => `${process.cwd()}/${fp}`;

module.exports = (ctx) => ({
  plugins: [
    require(`postcss-import`)({
      path: [
        `src/css/`,
        `node_modules/css-lib/lib/assets/css/`,
      ].map(cwd),
    }),
    require(`postcss-custom-properties`),
    require(`postcss-calc`),
    require(`postcss-custom-media`),
    require(`postcss-nested`),
    require(`autoprefixer`),
    require(`postcss-discard-comments`),
    require(`postcss-discard-empty`),
  ]
});
