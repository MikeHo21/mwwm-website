'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [lang, setLang] = useState<'tc' | 'sc' | 'en'>('tc');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // 將下方網址換成你在 Formspree 取得的專屬 Endpoint
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xoevwgll';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setError(data.errors.map((error: any) => error.message).join(', '));
        } else {
          setError(lang === 'en' ? 'Oops! There was a problem submitting your form' : '發送失敗，請稍後再試。');
        }
      }
    } catch (err) {
      setError(lang === 'en' ? 'Network error. Please try again later.' : '網路連線異常，請稍後再試。');
    } finally {
      setSubmitting(false);
    }
  };

  const content = {
    tc: {
      backHome: '← 返回首頁',
      contactTitle: '聯絡我們',
      contactSubtitle: '填寫下方表單或直接透過聯絡方式與我們取得聯繫。',
      companyInfo: '公司資訊',
      serviceHours: '服務時間',
      hoursText: '星期一至星期五：09:00 - 18:00\n星期六、日及公眾假期：休息',
      name: '姓名',
      emailLabel: '電郵地址',
      message: '諮詢內容',
      submit: '送出訊息',
      submitting: '發送中...',
      successMsg: '感謝您的諮詢！我們已收到您的訊息，將盡快與您聯繫。',
      navAbout: '關於我們',
      navProducts: '產品列表',
      navEco: '環保產品 (專業環境衛生)',
      navHotel: '高端酒店定制產品',
      navPartners: '合作夥伴',
      navContact: '聯絡我們',
    },
    sc: {
      backHome: '← 返回首页',
      contactTitle: '联络我们',
      contactSubtitle: '填写下方表单或直接透过联络方式与我们取得联系。',
      companyInfo: '公司资讯',
      serviceHours: '服务时间',
      hoursText: '星期一至星期五：09:00 - 18:00\n星期六、日及公众假期：休息',
      name: '姓名',
      emailLabel: '电邮地址',
      message: '咨询内容',
      submit: '送出讯息',
      submitting: '发送中...',
      successMsg: '感谢您的咨询！我们已收到您的讯息，将尽快与您联系。',
      navAbout: '关于我们',
      navProducts: '产品列表',
      navEco: '环保产品 (专业环境卫生)',
      navHotel: '高端酒店定制产品',
      navPartners: '合作伙伴',
      navContact: '联络我们',
    },
    en: {
      backHome: '← Back to Home',
      contactTitle: 'Contact Us',
      contactSubtitle: 'Fill out the form below or reach out to us directly.',
      companyInfo: 'Company Info',
      serviceHours: 'Service Hours',
      hoursText: 'Monday to Friday: 09:00 - 18:00\nSaturday, Sunday & Public Holidays: Closed',
      name: 'Name',
      emailLabel: 'Email Address',
      message: 'Message',
      submit: 'Send Message',
      submitting: 'Sending...',
      successMsg: 'Thank you for your inquiry! We have received your message and will get back to you shortly.',
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
            <Link href="/partners" className="hover:text-blue-400 transition">{t.navPartners}</Link>
            <Link href="/contact" className="hover:text-blue-400 transition text-blue-400 font-semibold">{t.navContact}</Link>
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">{t.contactTitle}</h1>
          <p className="text-slate-300">{t.contactSubtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12 bg-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-lg">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{t.companyInfo}</h3>
            <p className="text-slate-300 mb-2"><strong>MWWM (HONG KONG) LIMITED</strong></p>
            <p className="text-slate-300 mb-2">香港葵涌貨櫃碼頭路88號永得利廣場2期11樓09室</p>
            <p className="text-slate-300 mb-2">聯絡人：Mike He</p>
            <p className="text-slate-300 mb-2">電話：+852 5229 0248</p>
            <p className="text-slate-300">信箱：cs@mwwm.com.hk</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{t.serviceHours}</h3>
            <p className="text-slate-300 whitespace-pre-line">{t.hoursText}</p>
          </div>
        </div>

        {submitted ? (
          <div className="bg-emerald-900/50 border border-emerald-500 p-8 rounded-2xl text-center text-emerald-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-2">🎉 恭喜！</h3>
            <p className="text-lg">{t.successMsg}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800/80 p-8 rounded-2xl border border-slate-700 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t.name}</label>
                <input type="text" name="name" required className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t.emailLabel}</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="name@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">{t.message}</label>
              <textarea name="message" rows={4} required className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500"></textarea>
            </div>
            {error && <p className="text-rose-400 text-sm">{error}</p>}
            <button type="submit" disabled={submitting} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-lg transition shadow-md disabled:opacity-50">
              {submitting ? t.submitting : t.submit}
            </button>
          </form>
        )}
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-800 mt-20">
        © {new Date().getFullYear()} MWWM (HONG KONG) LIMITED. All rights reserved.
      </footer>
    </div>
  );
}