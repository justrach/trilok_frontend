import { LibraryCard } from "@/components/LibraryCard";
import { Inter, Playfair_Display, DM_Sans } from 'next/font/google'

// Initialize fonts at module scope
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
})
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700']
})
const inter = Inter({ subsets: ['latin'] })

const libraries = [
  {
    name: "Bhumi",
    description: "High-performance async Python client for LLM APIs, powered by Rust. Supports OpenAI, Anthropic, Google Gemini, Groq, and SambaNova.",
    tagline: "AI Client Framework",
    color: "bg-[#FF6F61]",
    hoverColor: "hover:bg-[#E5625A]",
    textColor: "text-[#FF6F61]",
    borderColor: "border-[#FF6F61]/20",
    gradientFrom: "from-[#FF6F61]",
    gradientTo: "to-[#E5625A]",
    stats: ["2-3x Faster", "60% Less Memory", "Apache 2.0"],
    url: "https://github.com/justrach/bhumi",
    enabled: true,
  },
  {
    name: "Swarg",
    description: "Advanced UI component system for next-generation web applications. Currently under development.",
    tagline: "UI Framework",
    color: "bg-[#FF8B7E]",
    hoverColor: "hover:bg-[#E57A6E]",
    textColor: "text-[#FF8B7E]",
    borderColor: "border-[#FF8B7E]/20",
    gradientFrom: "from-[#FF8B7E]",
    gradientTo: "to-[#E57A6E]",
    stats: ["Coming Soon"],
    enabled: false,
  },
  {
    name: "Dhi",
    description: "High-performance TypeScript validation library powered by WebAssembly, offering 2x faster validation than alternatives.",
    tagline: "TypeScript Validation",
    color: "bg-[#FF6F61]",
    hoverColor: "hover:bg-[#E5625A]",
    textColor: "text-[#FF6F61]",
    borderColor: "border-[#FF6F61]/20",
    gradientFrom: "from-[#FF6F61]",
    gradientTo: "to-[#E5625A]",
    stats: ["375k val/sec", "WebAssembly", "Apache 2.0"],
    url: "https://github.com/justrach/dhi",
    enabled: true,
  },
  {
    name: "Satya",
    description: "Blazingly fast data validation for Python, powered by Rust. Up to 134x faster than Pydantic for large-scale validation.",
    tagline: "Python Validation",
    color: "bg-[#FF8B7E]",
    hoverColor: "hover:bg-[#E57A6E]",
    textColor: "text-[#FF8B7E]",
    borderColor: "border-[#FF8B7E]/20",
    gradientFrom: "from-[#FF8B7E]",
    gradientTo: "to-[#E57A6E]",
    stats: ["134x Faster", "Rust-powered", "Apache 2.0"],
    url: "https://github.com/rachpradhan/satya",
    enabled: true,
  },
  {
    name: "Patal",
    description: "Advanced database and storage solutions. Work in progress.",
    tagline: "Database Framework",
    color: "bg-[#FF6F61]",
    hoverColor: "hover:bg-[#E5625A]",
    textColor: "text-[#FF6F61]",
    borderColor: "border-[#FF6F61]/20",
    gradientFrom: "from-[#FF6F61]",
    gradientTo: "to-[#E5625A]",
    stats: ["Coming Soon"],
    enabled: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F3] via-white to-[#FFF5F3] dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto px-6 py-24 max-w-7xl">
        <header className="text-center mb-32">
          <div className="mb-4">
            <span className={`
              text-sm tracking-widest uppercase text-[#FF6F61]/70
              ${inter.className} font-medium
            `}>
              Open Source Libraries
            </span>
          </div>
          <h1 className={`
            text-8xl font-extrabold mb-8
            bg-gradient-to-r from-[#FF6F61] via-[#FF8B7E] to-[#FF6F61]
            inline-block text-transparent bg-clip-text
            tracking-tight leading-tight ${playfair.className}
          `}>
            trilok<span className="font-light">.ai</span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className={`
              text-[#2A2A2A] dark:text-zinc-400
              text-xl leading-relaxed ${dmSans.className}
              mb-6
            `}>
              A suite of high-performance libraries crafted with precision,
              <span className="block">bridging ancient wisdom with modern engineering.</span>
            </p>
            <p className={`
              text-[#2A2A2A]/60 dark:text-zinc-400/60
              text-base ${dmSans.className}
            `}>
              Powered by Rust & WebAssembly • Apache 2.0 Licensed • Production Ready
            </p>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {libraries.map((lib) => (
            <LibraryCard key={lib.name} library={lib} />
          ))}
        </main>

        <footer className="text-center space-y-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center gap-4">
              {libraries.map((lib) => (
                <div
                  key={lib.name}
                  className={`w-2 h-2 rounded-full ${lib.color} ${!lib.enabled && 'opacity-50'}`}
                />
              ))}
            </div>
            <div className="space-y-3">
              <p className={`
                text-sm text-[#2A2A2A] dark:text-zinc-400
                tracking-wide uppercase ${inter.className}
              `}>
                Built with precision. Powered by innovation.
              </p>
              <p className={`
                text-xs text-[#2A2A2A]/60 dark:text-zinc-400/60
                ${dmSans.className}
              `}>
                © 2024 trilok.ai • All rights reserved
              </p>
            </div>
          </div>
          
          <div className={`
            flex justify-center gap-8 text-sm text-[#2A2A2A]/60 
            dark:text-zinc-400/60 ${inter.className}
          `}>
            <a href="#" className="hover:text-[#FF6F61] transition-colors">Documentation</a>
            <a href="#" className="hover:text-[#FF6F61] transition-colors">GitHub</a>
            <a href="#" className="hover:text-[#FF6F61] transition-colors">Community</a>
            <a href="#" className="hover:text-[#FF6F61] transition-colors">Blog</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
