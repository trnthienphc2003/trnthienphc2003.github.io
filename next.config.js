/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    // options can be an async function returning the plugin array
    options: async () => {
        const [{ default: remarkMath }] = await Promise.all([
            import('remark-math'),
        ]);
        const [{ default: rehypeKatex }] = await Promise.all([
            import('rehype-katex'),
        ]);
        return {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        };
    },
});
  
module.exports = withMDX({
    pageExtensions: ['ts','tsx','md','mdx'],
    basePath:
    process.env.NODE_ENV === 'production'
        ? '/username.github.io'
        : '',
    assetPrefix:
    process.env.NODE_ENV === 'production'
        ? '/username.github.io/'
        : '',
});