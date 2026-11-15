import { loadArchivedPage } from '@/lib/archived-pages'

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pageUrl = new URL(request.url).href
  const html = await loadArchivedPage('projects', slug, pageUrl)

  if (!html) return new Response('Project not found', { status: 404 })

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
