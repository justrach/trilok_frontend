'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Playfair_Display, DM_Sans, Inter } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

interface LibraryCardProps {
  library: {
    name: string;
    description: string;
    tagline: string;
    color: string;
    hoverColor: string;
    textColor: string;
    borderColor: string;
    gradientFrom: string;
    gradientTo: string;
    stats: string[];
    url?: string;
    enabled: boolean;
  };
}

export function LibraryCard({ library: lib }: LibraryCardProps) {
  return (
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger>
        <Card className={`
          group relative overflow-hidden
          transition-all duration-300 ease-out
          ${lib.enabled ? 'hover:scale-102 hover:shadow-lg' : 'opacity-50 cursor-not-allowed'}
          hover:shadow-[#FF6F61]/5
          border border-[#FF6F61]/10 dark:border-zinc-800
          bg-white dark:bg-zinc-900
        `}>
          <div className={`
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-br ${lib.gradientFrom} ${lib.gradientTo}
            transition-opacity duration-300 ease-out -z-10 opacity-[0.03]
          `} />
          <CardHeader className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className={`
                  text-xs font-medium px-2 py-1
                  bg-[#FFF5F3] dark:bg-zinc-800
                  text-[#2A2A2A] dark:text-zinc-400
                  tracking-wide uppercase ${inter.className}
                `}>
                  {lib.tagline}
                </Badge>
                <Badge className={`${lib.color} text-white ${inter.className}`}>
                  {lib.enabled ? 'Available' : 'Coming Soon'}
                </Badge>
              </div>
              <CardTitle className={`
                text-3xl font-bold ${lib.textColor}
                transition-colors duration-300
                ${playfair.className}
              `}>
                {lib.name}
              </CardTitle>
              <CardDescription className={`
                text-[#2A2A2A] dark:text-zinc-400 
                text-base leading-relaxed
                ${dmSans.className}
              `}>
                {lib.description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardFooter className="p-6 pt-0">
            {lib.enabled ? (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {lib.stats.map((stat, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className={`
                        bg-[#FFF5F3] dark:bg-zinc-900 
                        border-[#FF6F61]/20
                        ${inter.className}
                      `}
                    >
                      {stat}
                    </Badge>
                  ))}
                </div>
                <div
                  onClick={() => window.open(lib.url, '_blank', 'noopener,noreferrer')}
                  className={`
                    text-sm ${lib.textColor} font-medium
                    flex items-center gap-2
                    hover:underline cursor-pointer
                    tracking-wide ${inter.className}
                  `}
                >
                  View Documentation
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M1 7h12M8 1l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <p className={`
                text-sm text-[#2A2A2A]/60 
                dark:text-zinc-500 ${dmSans.className}
              `}>
                Development in progress
              </p>
            )}
          </CardFooter>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-6 bg-white/80 backdrop-blur-sm border-[#FF6F61]/10">
        <div className="space-y-3">
          <h4 className={`
            text-sm font-semibold ${lib.textColor}
            ${playfair.className}
          `}>
            {lib.name} Library
          </h4>
          <p className={`
            text-sm text-[#2A2A2A] 
            dark:text-zinc-400 leading-relaxed
            ${dmSans.className}
          `}>
            {lib.enabled 
              ? `Explore comprehensive documentation, examples, and integration guides for ${lib.name}.`
              : `${lib.name} is currently under development. Stay tuned for updates!`}
          </p>
          {lib.enabled && (
            <div className="pt-2 flex gap-3">
              <Badge variant="secondary" className={`
                bg-[#FFF5F3] dark:bg-zinc-800
                ${inter.className}
              `}>
                Apache 2.0
              </Badge>
              <Badge variant="secondary" className={`
                bg-[#FFF5F3] dark:bg-zinc-800
                ${inter.className}
              `}>
                Production Ready
              </Badge>
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
} 