import { ImageResponse } from 'next/og'

export default async function Image() {
  const res = await fetch('https://api.trilok.ai/api/og')
  const svg = await res.arrayBuffer()
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  })
} 