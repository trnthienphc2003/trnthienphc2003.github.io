import withMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // → Tell Next.js to statically export on build
  output: 'export',
  // pick up .mdx in src/app/ and components/
  pageExtensions: ['ts','tsx','md','mdx'],
  // your GitHub Pages path
  basePath: process.env.NODE_ENV === 'production'
    ? '/trnthienphc2003.github.io'
    : '',
  assetPrefix: process.env.NODE_ENV === 'production'
    ? '/trnthienphc2003.github.io/'
    : '',
};

export default withMDX({
  output: 'export',
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})(nextConfig);
