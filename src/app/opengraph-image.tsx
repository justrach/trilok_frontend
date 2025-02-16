import { ImageResponse } from 'next/og'
import { Playfair_Display } from 'next/font/google'

export const runtime = 'edge'
export const alt = 'trilok.ai - High Performance Open Source Libraries'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #FFF5F3, white)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '300px',
            height: '300px',
            background: 'linear-gradient(45deg, #FF6F61 0%, #FF8B7E 100%)',
            borderRadius: '0 0 0 100%',
            opacity: 0.1,
          }}
        />
        
        {/* Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Label */}
          <div
            style={{
              color: '#FF6F61',
              fontSize: '24px',
              opacity: 0.8,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            Open Source Libraries
          </div>

          {/* Title */}
          <div
            style={{
              background: 'linear-gradient(to right, #FF6F61, #FF8B7E)',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: '96px',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            trilok<span style={{ fontWeight: 300 }}>.ai</span>
          </div>

          {/* Description */}
          <div
            style={{
              color: '#2A2A2A',
              fontSize: '32px',
              maxWidth: '800px',
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            A suite of high-performance libraries crafted with precision
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '32px',
            }}
          >
            {['Rust Powered', 'WebAssembly', 'Apache 2.0'].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: '#FF6F61',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontSize: '20px',
                }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '300px',
            height: '300px',
            background: 'linear-gradient(45deg, #FF8B7E 0%, #FF6F61 100%)',
            borderRadius: '0 100% 0 0',
            opacity: 0.1,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
} 