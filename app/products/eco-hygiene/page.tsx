'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EcoHygienePage() {
  const [lang, setLang] = useState<'tc' | 'sc' | 'en'>('tc');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const content = {
    tc: {
      backHome: '← 返回首頁',
      title: '環保產品 (專業環境衛生)',
      subtitle: '深耕蟲控衛生領域，提供高品質、安全可靠的專業環境衛生與消殺配套產品。',
      items: [
        { name: '鼠刺', desc: '專業防鼠、防鳥攀爬阻斷裝置，適用於商業與建築外牆邊界防護。', img: '/images/product-rat-spikes.jpg' },
        { name: '戶外滅蚊燈', desc: '高效能戶外捕蚊設備，耐候設計，適合大型園區、露天餐飲及商業公共空間。', img: '/images/product-outdoor-mosquito.jpg' },
        { name: '室內蚊燈 / 飛蟲檢測站 / ILT-MW1', desc: '精密室內捕蟲與飛蟲監測設備，結合高科技誘捕與黏膠板技術，守護室內衛生核心。', img: '/images/product-ilt-mw1.jpg' }
      ],
      navAbout: '關於我們',
      navProducts: '產品列表',
      navEco: '環保產品 (專業環境衛生)',
      navHotel: '高端酒店定制產品',
      navPartners: '合作夥伴',
      navContact: '聯絡我們',
    },
    sc: {
      backHome: '← 返回首页',
      title: '环保产品 (专业环境卫生)',
      subtitle: '深耕虫控卫生领域，提供高品质、安全可靠的专业环境卫生与消杀配套产品。',
      items: [
        { name: '鼠刺', desc: '专业防鼠、防鸟爬墙阻断装置，适用于商业与建筑外墙边界防护。', img: '/images/product-rat-spikes.jpg' },
        { name: '户外灭蚊灯', desc: '高效能户外捕蚊设备，耐候设计，适合大型园区、露天餐饮及商业公共空间。', img: '/images/product-outdoor-mosquito.jpg' },
        { name: '室内蚊灯 / 飞虫检测站 / ILT-MW1', desc: '精密室内捕虫与飞虫监测设备，结合高科技诱捕与黏胶板技术，守护室内卫生核心。', img: '/images/product-ilt-mw1.jpg' }
      ],
      navAbout: '关于我们',
      navProducts: '产品列表',
      navEco: '环保产品 (专业环境卫生)',
      navHotel: '高端酒店定制产品',
      navPartners: '合作伙伴',
      navContact: '联络我们',
    },
    en: {
      backHome: '← Back to Home',
      title: 'Eco-Friendly & Hygiene Products',
      subtitle: 'Deeply rooted in pest control hygiene, offering high-quality, reliable environmental hygiene and extermination products.',
      items: [
        { name: 'Bird Spikes (鼠刺)', desc: 'Professional deterrent devices against pests and birds, suitable for exterior building perimeters.', img: '/images/product-rat-spikes.jpg' },
        { name: 'Outdoor Mosquito Killer', desc: 'High-performance weatherproof mosquito traps, ideal for parks, outdoor dining, and commercial spaces.', img: '/images/product-outdoor-mosquito.jpg' },
        { name: 'Indoor Fly Trap / ILT-MW1', desc: 'Precision indoor flying insect monitoring and trapping equipment using advanced lure and glueboard technology.', img: '/images/product-ilt-mw1.jpg' }
      ],
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
      {/* 統一 Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/60 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-28 flex justify-between items-center">
          <Link href="/" className="flex items-center h-full py-2">
            <img src="/images/mwwm-logo.svg" alt="MWWM Logo" className="h-full w-auto object-contain filter brightness-110" />
          </Link>
          <nav className="hidden md:flex space-x-6 font-medium text-slate-200 items-center">
            <Link href="/about" className="hover:text-blue-400 transition">{t.navAbout}</Link>
            <div className="relative py-2" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="flex items-center gap-1 hover:text-blue-400 transition text-blue-400 font-semibold">
                {t.navProducts}
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl py-2 mt-1 z-50">
                  <Link href="/products/eco-hygiene" className="block px-4 py-3 text-sm text-blue-300 bg-blue-600/20 font-semibold">{t.navEco}</Link>
                  <Link href="/products/hotel-custom" className="block px-4 py-3 text-sm text-slate-200 hover:bg-blue-600/30 hover:text-blue-300 transition">{t.navHotel}</Link>
                </div>
              )}
            </div>
            <Link href="/partners" className="hover:text-blue-400 transition">{t.navPartners}</Link>
            <Link href="/contact" className="hover:text-blue-400 transition">{t.navContact}</Link>
          </nav>
          <div className="flex items-center space-x-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs font-semibold">
            <button onClick={() => setLang('tc')} className={`px-2.5 py-1 rounded-md transition ${lang === 'tc' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>繁</button>
            <button onClick={() => setLang('sc')} className={`px-2.5 py-1 rounded-md transition ${lang === 'sc' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>简</button>
            <button onClick={() => setLang('en')} className={`px-2.5 py-1 rounded-md transition ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}>EN</button>
          </div>
        </div>
      </header>

      {/* 內容區塊：網格排版（上圖下名稱） */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <Link href="/" className="text-blue-400 hover:underline inline-block mb-6 font-medium">{t.backHome}</Link>
        <h1 className="text-4xl font-extrabold text-white mb-4">{t.title}</h1>
        <p className="text-slate-300 text-lg mb-12 leading-relaxed">{t.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <div key={index} className="bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500 transition flex flex-col">
              {/* 上方圖片預留區 */}
              <div className="w-full h-52 bg-slate-950 flex items-center justify-center text-slate-500 border-b border-slate-700 relative">
                <span className="text-sm">[ 產品圖片 / Product Image ]</span>
              </div>
              {/* 下方名稱與說明 */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-blue-300 mb-3">{item.name}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <Link href="/contact" className="mt-6 inline-block text-center bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white py-2 rounded-lg text-sm font-semibold transition">
                  立即詢問
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-800 mt-20">
        © {new Date().getFullYear()} MWWM (HONG KONG) LIMITED. All rights reserved.
      </footer>
    </div>
  );
}