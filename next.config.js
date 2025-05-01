const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
    remarkPlugins: [require('remark-math')],
    rehypePlugins: [require('rehype-katex')],
    },
});
  
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    // later: basePath & assetPrefix for GitHub Pages…
});
  