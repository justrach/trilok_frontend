
export async function GET() {
  const res = await fetch('https://api.trilok.ai/api/og')
  const svg = await res.arrayBuffer()
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  })
} 