'use client'

import { Globe, Instagram, MessageCircle, Smartphone, Lock, Unlock, ShieldCheck, ShieldAlert } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const links = [
    {
      id: 'site',
      name: 'Site Oficial',
      description: 'Conheça nossos serviços',
      icon: Globe,
      url: 'https://www.ilocmobile.com.br/?utm_source=qrcode',
      primary: true,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      description: 'Acompanhe as novidades',
      icon: Instagram,
      url: 'https://www.instagram.com/ilocmobile?utm_source=qrcode',
      primary: false,
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'Fale com nosso time de vendas',
      icon: MessageCircle,
      url: 'https://wa.me/5511971447220?text=Olá!%20Vim%20através%20do%20QR%20Code.',
      primary: false,
    },
  ]

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black selection:bg-iloc-lime selection:text-black">
      {/* Background Premium Abstract Glow */}
      <div className="fixed inset-0 -z-10 bg-[#050505]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-iloc-lime/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
        
        {/* Animated Tech / Security Icons */}
        <div className="tech-icon-container">
          <Lock className="tech-icon ti-1 w-8 h-8" />
          <Smartphone className="tech-icon ti-2 w-10 h-10" />
          <ShieldCheck className="tech-icon ti-3 w-12 h-12" />
          <Unlock className="tech-icon ti-4 w-8 h-8" />
          <ShieldAlert className="tech-icon ti-5 w-6 h-6" />
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-md mx-auto px-4 py-12 relative z-10">

        <div className="card-premium rounded-3xl p-8 relative group overflow-hidden mt-8">
          {/* Top glow accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-iloc-lime/40 to-transparent" />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Logo Centralizada (Substitui o Avatar Redondo) */}
            <div className="mb-8 relative group cursor-default w-full flex justify-center">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-iloc-lime/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-48 h-20 flex items-center justify-center">
                <Image
                  src="/full-logo-white.webp"
                  alt="iLoc Mobile"
                  fill
                  className="object-contain"
                  priority
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-white font-bold text-2xl">iLoc Mobile</span>';
                  }}
                />
              </div>
            </div>

            {/* Header Text */}
            <div className="text-center mb-10 w-full">
              <h1 className="text-3xl font-extrabold text-white mb-3 tracking-tight">
                iLoc Mobile
              </h1>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-iloc-lime/10 border border-iloc-lime/20 text-iloc-lime text-xs font-semibold uppercase tracking-widest gap-2">
                <Smartphone className="w-4 h-4" />
                <span>Tecnologia & Mobilidade</span>
              </div>
            </div>

            {/* Links / Buttons */}
            <div className="w-full space-y-4">
              {links.map((link) => {
                const Icon = link.icon
                const isHovered = hoveredButton === link.id
                const isPrimary = link.primary

                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredButton(link.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    className={`
                      relative flex items-center p-4 rounded-2xl w-full transition-all duration-300 group overflow-hidden button-micro
                      ${isPrimary 
                        ? 'bg-iloc-lime text-black shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)] font-bold' 
                        : 'glass-panel text-white hover:bg-white/10 font-medium'
                      }
                    `}
                  >
                    {/* Hover subtle glow effect inside button */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    
                    <div className={`
                      flex items-center justify-center w-12 h-12 rounded-xl mr-4 transition-colors
                      ${isPrimary ? 'bg-black/10' : 'bg-white/5'}
                    `}>
                      <Icon className={`w-6 h-6 ${isPrimary ? 'text-black' : 'text-iloc-lime'}`} />
                    </div>
                    
                    <div className="flex-1 text-left">
                      <div className="text-base tracking-tight">{link.name}</div>
                      <div className={`text-xs mt-0.5 opacity-70 font-normal ${isPrimary ? 'text-black/70' : 'text-zinc-400'}`}>
                        {link.description}
                      </div>
                    </div>
                    
                    <div className={`
                      opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300
                      ${isPrimary ? 'text-black' : 'text-white'}
                    `}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </a>
                )
              })}
            </div>

          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center opacity-50">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} iLoc Mobile. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
