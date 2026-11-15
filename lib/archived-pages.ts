import { readFile } from 'node:fs/promises'
import path from 'node:path'

const pageSlugs = {
  projects: ['aeris', 'echomind', 'fabrica', 'luma-skin', 'redshift', 'trendloop'],
  journal: [
    'designing-for-deep-space-how-we-built-a-satellite-command-ui',
    'framer-vs-webflow-what-we-use-and-why',
    'how-we-build-adaptive-brand-systems-with-ai',
    'inside-our-ai-enhanced-design-stack',
    'the-future-of-branding-in-an-ai-first-world',
    'why-designers-should-think-like-strategists',
  ],
} as const

export type ArchivedPageGroup = keyof typeof pageSlugs

export async function loadArchivedPage(
  group: ArchivedPageGroup,
  slug: string,
  pageUrl: string,
) {
  if (!(pageSlugs[group] as readonly string[]).includes(slug)) return null

  const filePath = path.join(process.cwd(), 'public', 'imported-pages', group, `${slug}.html`)
  const html = await readFile(filePath, 'utf8')

  return html
    .replace(/(<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["'])[^"']+(["'][^>]*>)/i, `$1${pageUrl}$2`)
    .replace(/(<meta\b[^>]*\bproperty=["']og:url["'][^>]*\bcontent=["'])[^"']+(["'][^>]*>)/i, `$1${pageUrl}$2`)
}
