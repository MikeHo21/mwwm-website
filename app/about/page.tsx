'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [lang, setLang] = useState<'tc' | 'sc' | 'en'>('tc');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const content = {
    tc: {
      backHome: '← 返回首頁',
      aboutTitle: '關於 MWWM (HONG KONG) LIMITED',
      aboutText: '我們擁有專業的團隊與豐富的實務經驗，公司在中國內地有深度合作的定制工廠，亦同美國技術公司共同開發產品，利用香港本地化的專業團隊，將中國的製造實力同美國的設計理念注入香港本地發展，秉持「品質、創新、客戶至上」的經營理念，特別是在蟲控衛生領域和高端布草領域成為香港本地的卓越產品供應商，為客戶提供最精準的客製化方案。',
      addr: '地址：香港葵涌貨櫃碼頭路88號永得利廣場2期11樓09室',
      contactPerson: '負責人 / 聯絡人：Mike He',
      phone: '電話：+852 5229 0248',
      email: '電郵：cs@mwwm.com.hk',
      navAbout: '關於我們',
      navProducts: '產品列表',
      navEco: '環保產品 (專業環境衛生)',
      navHotel: '高端酒店定制產品',
      navPartners: '合作夥伴',
      navContact: '聯絡我們',
    },
    sc: {
      backHome: '← 返回首页',
      aboutTitle: '关于 MWWM (HONG KONG) LIMITED',
      aboutText: '我们拥有专业的团队与丰富的实务经验，公司在中国内地有深度合作的定制工厂，亦同美国技术公司共同开发产品，利用香港本地化的专业团队，将中国的制造实力同美国的设计理念注入香港本地发展，秉持「品质、创新、客户至上」的经营理念，特别是在虫控卫生领域和高端布草领域成为香港本地的卓越产品供应商，为客户提供最精准的定制化方案。',
      addr: '地址：香港葵涌货柜码头路88号永得利广场2期11楼09室',
      contactPerson: '负责人 / 联络人：Mike He',
      phone: '电话：+852 5229 0248',
      email: '电邮：cs@mwwm.com.hk',
      navAbout: '关于我们',
      navProducts: '产品列表',
      navEco: '环保产品 (专业环境卫生)',
      navHotel: '高端酒店定制产品',
      navPartners: '合作伙伴',
      navContact: '联络我们',
    },
    en: {
      backHome: '← Back to Home',
      aboutTitle: 'About MWWM (HONG KONG) LIMITED',
      aboutText: 'We possess a professional team and rich practical experience. With deeply collaborated custom manufacturing plants in mainland China and co-development partnerships with U.S. technology companies, we leverage our localized professional team in Hong Kong to integrate China’s manufacturing prowess with American design philosophies. Upholding our philosophy of "Quality, Innovation, and Customer First," we have become a premier product supplier in Hong Kong, particularly in pest control hygiene and high-end linens, delivering precise tailored solutions for our clients.',
      addr: 'Address: Room 09, 11/F, Tower 2, Ever Gain Plaza, 88 Container Port Road, Kwai Chung, Hong Kong',
      contactPerson: 'Contact Person: Mike He',
      phone: 'Phone: +852 5229 0248',
      email: 'Email: cs@mwwm.com.hk',
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
            <Link href="/about" className="hover:text-blue-400 transition text-blue-400 font-semibold">{t.navAbout}</Link>
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

      <main className="max-w-4xl mx-auto px-6 py-16">
        <Link href="/" className="text-blue-400 hover:underline inline-block mb-6 font-medium">{t.backHome}</Link>
        <h1 className="text-4xl font-extrabold text-white mb-8">{t.aboutTitle}</h1>
        <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-2xl shadow-lg space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">{t.aboutText}</p>
          <div className="border-t border-slate-700 pt-6 space-y-3 text-slate-200">
            <p><strong className="text-white">{t.addr}</strong></p>
            <p><strong className="text-white">{t.contactPerson}</strong></p>
            <p><strong className="text-white">{t.phone}</strong></p>
            <p><strong className="text-white">{t.email}</strong></p>
          </div>
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-800 mt-20">
        © {new Date().getFullYear()} MWWM (HONG KONG) LIMITED. All rights reserved.
      </footer>
    </div>
  );
}