'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [lang, setLang] = useState<'tc' | 'sc' | 'en'>('tc');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 櫥窗圖片輪播清單
  const bannerImages = [
    '/images/banner-1.jpg',
    '/images/banner-2.jpg',
    '/images/banner-3.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const content = {
    tc: {
      navAbout: '關於我們',
      navProducts: '產品列表',
      navEco: '環保產品 (專業環境衛生)',
      navHotel: '高端酒店定制產品',
      navPartners: '合作夥伴',
      navContact: '聯絡我們',
      cta: '立即諮詢',
      heroTitle: '專業商業用品及方案供應商',
      heroSubtitle: '為您的業務提供專業且高效的最佳解決方案，結合頂尖製造與創新設計。',
      explore: '探索產品',
      contactUs: '聯繫團隊',
    },
    sc: {
      navAbout: '关于我们',
      navProducts: '产品列表',
      navEco: '环保产品 (专业环境卫生)',
      navHotel: '高端酒店定制产品',
      navPartners: '合作伙伴',
      navContact: '联络我们',
      cta: '立即咨询',
      heroTitle: '专业商业用品及方案供应商',
      heroSubtitle: '为您的业务提供专业且高效的最佳解决方案，结合顶尖制造与创新设计。',
      explore: '探索产品',
      contactUs: '联系团队',
    },
    en: {
      navAbout: 'About Us',
      navProducts: 'Products',
      navEco: 'Eco-Friendly & Hygiene',
      navHotel: 'High-End Hotel Custom',
      navPartners: 'Partners',
      navContact: 'Contact Us',
      cta: 'Inquire Now',
      heroTitle: 'Professional Commercial Supplies & Solutions Provider',
      heroSubtitle: 'Delivering professional and efficient solutions with top-tier manufacturing and innovative design.',
      explore: 'Explore Products',
      contactUs: 'Contact Team',
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* 1. Header (語言選擇固定在最右側) */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-28 flex justify-between items-center">
          <Link href="/" className="flex items-center h-full py-2">
            <img src="/images/mwwm-logo.svg" alt="MWWM Logo" className="h-full w-auto object-contain filter brightness-110" />
          </Link>

          <nav className="hidden md:flex space-x-6 font-medium text-slate-200 items-center">
            <Link href="/about" className="hover:text-blue-400 transition">{t.navAbout}</Link>
            
            {/* 產品下拉選單 (優化觸控範圍防閃爍) */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-blue-400 transition">
                {t.navProducts}
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl py-2 mt-1 z-50">
                  <Link href="/products/eco-hygiene" className="block px-4 py-3 text-sm text-slate-200 hover:bg-blue-600/30 hover:text-blue-300 transition">
                    {t.navEco}
                  </Link>
                  <Link href="/products/hotel-custom" className="block px-4 py-3 text-sm text-slate-200 hover:bg-blue-600/30 hover:text-blue-300 transition">
                    {t.navHotel}
                  </Link>
                </div>
              )}
            </div>

            <Link href="/partners" className="hover:text-blue-400 transition">{t.navPartners}</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">{t.navContact}</Link>
          </nav>

          {/* 右側 CTA 與 語言切換 */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden lg:inline-block bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-md">
              {t.cta}
            </Link>

            {/* 語言選擇三個選項調到 Header 的最右側 */}
            <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs font-semibold">
              <button onClick={() => setLang('tc')} className={`px-2.5 py-1 rounded-md transition ${lang === 'tc' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}>繁</button>
              <button onClick={() => setLang('sc')} className={`px-2.5 py-1 rounded-md transition ${lang === 'sc' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}>简</button>
              <button onClick={() => setLang('en')} className={`px-2.5 py-1 rounded-md transition ${lang === 'en' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'}`}>EN</button>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Header 下方櫥窗頁（圖片輪播 Banner Showcase） */}
      <section className="relative w-full h-[450px] md:h-[550px] bg-slate-950 overflow-hidden border-b border-slate-700">
        {bannerImages.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 z-10" />
            <img src={img} alt={`Banner ${idx + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            {t.heroTitle}
          </h1>
          <p className="text-base md:text-xl text-slate-200 mb-8 max-w-2xl drop-shadow">
            {t.heroSubtitle}
          </p>
          <div className="flex gap-4">
            <Link href="/products/eco-hygiene" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition shadow-lg">
              {t.explore}
            </Link>
            <Link href="/contact" className="bg-slate-800/80 hover:bg-slate-700 text-slate-100 border border-slate-600 px-8 py-3.5 rounded-xl font-semibold text-lg transition backdrop-blur">
              {t.contactUs}
            </Link>
          </div>
        </div>

        {/* 輪播切換指示點 */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
          {bannerImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-blue-500 w-8' : 'bg-slate-500/60'}`}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        © {new Date().getFullYear()} MWWM (HONG KONG) LIMITED. All rights reserved.
      </footer>
    </div>
  );
}