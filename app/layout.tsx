"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Providers } from './components/Providers'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { metadata } from './metadata'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const ThemeToggle = dynamic(() => import('./components/ThemeToggle'), {
  ssr: false
})

const AccessibilityControls = dynamic(() => import('./components/AccessibilityControls'), {
  ssr: false
})

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <button
              onClick={() => setIsNavbarVisible(!isNavbarVisible)}
              className={`fixed z-[60] top-4 ${isNavbarVisible ? 'left-[270px]' : 'left-4'} p-2 bg-white/90 backdrop-blur rounded-lg shadow-lg hover:bg-white transition-all duration-300`}
              aria-label={isNavbarVisible ? 'Ocultar menu' : 'Mostrar menu'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={isNavbarVisible ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
              </svg>
            </button>

            <aside className={`fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-[var(--primary-color)] to-[var(--primary-color-dark)] text-white shadow-xl transform transition-transform duration-300 ${
              isNavbarVisible ? 'translate-x-0' : '-translate-x-full'
            }`}>
              <div className="pt-8 px-6">
                <div className="flex flex-col items-center justify-center mb-8">
                  <Image
                    src="/Imagem1.png"
                    alt="UFC Sobral Logo"
                    width={200}
                    height={80}
                    priority
                    className="w-full h-auto object-contain mb-4"
                  />
                </div>

                <div className="space-y-6">
                  {/* Search Bar */}
                  <div className="search-container">
                    <input
                      type="search"
                      placeholder="Pesquisar atividades..."
                      className="search-input"
                    />
                  </div>

                  {/* Navigation Links */}
                  <nav className="space-y-2">
                    <div className="text-sm text-white/60 uppercase font-medium mb-2">Menu Principal</div>
                    <Link href="/" className="nav-link flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Início</span>
                    </Link>
                    <Link href="/dashboard" className="nav-link flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Dashboard</span>
                    </Link>
                    <Link 
                      href="/atividades/new" 
                      className="nav-link flex items-center gap-3 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all"
                      data-tour="new-activity"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Nova Atividade</span>
                    </Link>
                    <Link href="/atividades" className="nav-link flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>Atividades</span>
                    </Link>

                    <div className="text-sm text-white/60 uppercase font-medium mt-6 mb-2">Configurações</div>
                    <Link href="/perfil" className="nav-link flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Perfil</span>
                    </Link>
                    <Link href="/configuracoes" className="nav-link flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Configurações</span>
                    </Link>
                  </nav>
                </div>
              </div>

              {/* User Profile Section */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Usuário</div>
                    <div className="text-sm text-white/60">Administrador</div>
                  </div>
                </div>
              </div>
            </aside>

            <main className={`flex-1 transition-all duration-300 ${isNavbarVisible ? 'ml-64' : 'ml-0'}`}>
              <Header />
              <div className="p-8">
                {children}
              </div>
            </main>

            <Footer isNavbarVisible={isNavbarVisible} />
          </div>
        </Providers>
      </body>
    </html>
  )
}
