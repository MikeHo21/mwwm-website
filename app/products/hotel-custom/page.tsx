'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HotelCustomPage() {
  const [lang, setLang] = useState<'tc' | 'sc' | 'en'>('tc');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const content = {
    tc: {
      backHome: '← 返回首頁',
      title: '高端酒店定制產品',
      subtitle: '專注高端布草與酒店定制用品，融合美學與實用性，滿足頂級飯店與商業空間的嚴格標準。',
      items: [
        { name: '高端酒店布草系列', desc: '採用頂級精梳棉與高支高密織造技術，打造極致舒適的床品與毛巾系列。' },
        { name: '訂製客房備品與配套', desc: '為頂級飯店提供獨家美學設計與環保材質結合的客房日常消耗品與定製配件。' },
        { name: '商業空間美學布藝', desc: '針對高端餐飲與會所空間的專屬布藝軟裝定制服務。' }
      ],
      navAbout: '關於我們',
      navProducts: '產品列表',
      navEco: '環保產品 (專業環境衛生)',
      navHotel: '高端酒店定制產品',
      navContact: '聯絡我們',
    },
    sc: {
      backHome: '← 返回首页',
      title: '高端酒店定制产品',
      subtitle: '专注高端布草与酒店定制用品，融合美学与实用性，满足顶级饭店与商业空间的严格标准。',
      items: [
        { name: '高端酒店布草系列', desc: '采用顶级精梳棉与高支高密织造技术，打造极致舒适的床品与毛巾系列。' },
        { name: '订制客房备品与配套', desc: '为顶级饭店提供独家美学设计与环保材质结合的客房日常消耗品与定制配件。' },
        { name: '商业空间美学布艺', desc: '针对高端餐饮与会所空间的专属布艺软装定制服务。' }
      ],
      navAbout: '关于我们',
      navProducts: '产品列表',
      navEco: '环保产品 (专业环境卫生)',
      navHotel: '高端酒店定制产品',
      navContact: '联络我们',
    },
    en: {
      backHome: '← Back to Home',
      title: 'High-End Hotel Custom Products',
      subtitle: 'Specializing in premium linens and bespoke hotel amenities, blending aesthetics with functionality for elite hospitality spaces.',
      items: [
        { name: 'Premium Hotel Linens', desc: 'Crafted with top-grade combed cotton and high-density weaving for supreme comfort in beddings and towels.' },
        { name: 'Bespoke Room Amenities', desc: 'Exclusive aesthetic designs combined with eco-friendly materials for elite hotel daily amenities.' },
        { name: 'Commercial Space Textile Art', desc: 'Tailored soft furnishing and textile customization for high-end dining and club spaces.' }
      ],
      navAbout: 'About Us',
      navProducts: 'Products',
      navEco: 'Eco-Friendly & Hygiene',
      navHotel: 'High-End Hotel Custom',
      navContact: 'Contact Us',
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* 導覽列 */}
      <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-32 flex justify-between items-center">
          <Link href="/" className="flex items-center h-full">
            <img src="/images/mwwm-logo.svg" alt="MWWM Logo" className="h-full w-auto object-contain filter brightness-110" />
          </Link>
          <nav className="hidden md:flex space-x-6 font-medium text-slate-300 items-center">
            <Link href="/#about" className="hover:text-indigo-400 transition">{t.navAbout}</Link>
            <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="flex items-center gap-1 hover:text-indigo-400 transition py-2 text-indigo-400 font-semibold">
                {t.navProducts}
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl py-2 mt-1 z-50">
                  <Link href="/products/eco-hygiene" className="block px-4 py-3 text-sm text-slate-300 hover:bg-indigo-600/20 hover:text-indigo-400 transition">{t.navEco}</Link>
                  <Link href="/products/hotel-custom" className="block px-4 py-3 text-sm text-indigo-400 bg-indigo-600/10 font-semibold">{t.navHotel}</Link>
                </div>
              )}
            </div>
            <Link href="/#partners" className="hover:text-indigo-400 transition">合作夥伴</Link>
            <Link href="/#contact" className="hover:text-indigo-400 transition">{t.navContact}</Link>
            <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-lg border border-slate-700 text-xs font-semibold">
              <button onClick={() => setLang('tc')} className={`px-2.5 py-1 rounded-md transition ${lang === 'tc' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>繁</button>
              <button onClick={() => setLang('sc')} className={`px-2.5 py-1 rounded-md transition ${lang === 'sc' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>简</button>
              <button onClick={() => setLang('en')} className={`px-2.5 py-1 rounded-md transition ${lang === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}>EN</button>
            </div>
          </nav>
        </div>
      </header>

      {/* 內容區塊 */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-indigo-400 hover:underline inline-block mb-8 font-medium">{t.backHome}</Link>
        <h1 className="text-4xl font-extrabold text-white mb-4">{t.title}</h1>
        <p className="text-slate-300 text-lg mb-12 leading-relaxed">{t.subtitle}</p>

        <div className="space-y-6">
          {t.items.map((item, index) => (
            <div key={index} className="p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition">
              <h3 className="text-2xl font-bold text-indigo-400 mb-3">{item.name}</h3>
              <p className="text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800 mt-20">
        © {new Date().getFullYear()} MWWM (HONG KONG) LIMITED. All rights reserved.
      </footer>
    </div>
  );
}