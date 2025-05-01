// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // You can override any tag here; for now just pass through
  return { ...components }
}
