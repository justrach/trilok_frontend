import { ImageResponse } from 'next/og'

export const alt = 'trilok.ai - High Performance Open Source Libraries'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Reuse the same image generation logic
export default async function Image() {
  const res = await fetch('https://api.trilok.ai/api/og')
  const svg = await res.arrayBuffer()
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  })
} 