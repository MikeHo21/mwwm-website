'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PartnersPage() {
  const [lang, setLang] = useState<'tc' | 'sc' | 'en'>('tc');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const content = {
    tc: {
      backHome: '← 返回首頁',
      partnersTitle: '合作商與技術支持',
      partnersSubtitle: '感謝以下行業翹楚與技術夥伴的鼎力支持與緊密合作',
      navAbout: '關於我們',
      navProducts: '產品列表',
      navEco: '環保產品 (專業環境衛生)',
      navHotel: '高端酒店定制產品',
      navPartners: '合作夥伴',
      navContact: '聯絡我們',
    },
    sc: {
      backHome: '← 返回首页',
      partnersTitle: '合作伙伴与技术支持',
      partnersSubtitle: '感谢以下行业翘楚与技术伙伴的鼎力支持与紧密合作',
      navAbout: '关于我们',
      navProducts: '产品列表',
      navEco: '环保产品 (专业环境卫生)',
      navHotel: '高端酒店定制产品',
      navPartners: '合作伙伴',
      navContact: '联络我们',
    },
    en: {
      backHome: '← Back to Home',
      partnersTitle: 'Partners & Technical Support',
      partnersSubtitle: 'Special thanks to our industry leaders and technical partners for their collaboration and support',
      navAbout: 'About Us',
      navProducts: 'Products',
      navEco: 'Eco-Friendly & Hygiene',
      navHotel: 'High-End Hotel Custom',
      navPartners: 'Partners',
      navContact: 'Contact Us',
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-28 flex justify-between items-center">
          <Link href="/" className="flex items-center h-full py-2">
            <img src="/images/mwwm-logo.svg" alt="MWWM Logo" className="h-full w-auto object-contain filter brightness-110" />
          </Link>
          <nav className="hidden md:flex space-x-6 font-medium text-slate-200 items-center">
            <Link href="/about" className="hover:text-blue-400 transition">{t.navAbout}</Link>
            <div className="relative py-2" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                {t.navProducts}
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl py-2 mt-1 z-50">
                  <Link href="/products/eco-hygiene" className="block px-4 py-3 text-sm text-slate-200 hover:bg-blue-600/30 hover:text-blue-300 transition">{t.navEco}</Link>
                  <Link href="/products/hotel-custom" className="block px-4 py-3 text-sm text-slate-200 hover:bg-blue-600/30 hover:text-blue-300 transition">{t.navHotel}</Link>
                </div>
              )}
            </div>
            <Link href="/partners" className="hover:text-blue-400 transition text-blue-400 font-semibold">{t.navPartners}</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">{t.navContact}</Link>
          </nav>
          <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs font-semibold">
            <button onClick={() => setLang('tc')} className={`px-2.5 py-1 rounded-md transition ${lang === 'tc' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>繁</button>
            <button onClick={() => setLang('sc')} className={`px-2.5 py-1 rounded-md transition ${lang === 'sc' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>简</button>
            <button onClick={() => setLang('en')} className={`px-2.5 py-1 rounded-md transition ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>EN</button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="text-left">
          <Link href="/" className="text-blue-400 hover:underline inline-block mb-6 font-medium">{t.backHome}</Link>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4">{t.partnersTitle}</h1>
        <p className="text-slate-300 mb-12">{t.partnersSubtitle}</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-white mb-3">ORKIN (HONG KONG)</h3>
            <p className="text-slate-300 text-sm mb-4">全球領先的蟲害管理與環境衛生合作夥伴</p>
            <a href="https://www.orkin.com.hk" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline flex items-center gap-1">
              www.orkin.com.hk &rarr;
            </a>
          </div>
          <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-white mb-3">香港蟲害協會有限公司</h3>
            <p className="text-slate-300 text-sm mb-4">專業蟲害防治行業學術與技術支持機構</p>
            <span className="text-slate-200 font-semibold">Hong Kong Pest Management Association</span>
          </div>
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-800 mt-20">
        © {new Date().getFullYear()} MWWM (HONG KONG) LIMITED. All rights reserved.
      </footer>
    </div>
  );
}