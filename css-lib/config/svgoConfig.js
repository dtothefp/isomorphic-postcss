export default {
  plugins: [
    {
      convertStyleToAttrs: true,
    },
    {
      convertTransform: true,
    },
    {
      removeAttrs: {
        active: true,
        attrs: [`class`, `id`],
      },
    },
    {
      removeDesc: false,
    },
    {
      removeDimensions: true,
    },
    {
      removeStyleElement: true,
    },
    {
      removeTitle: false,
    },
    {
      removeViewBox: false,
    },
    {
      sortAttrs: true,
    },
  ],
};
