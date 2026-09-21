import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* 1. 導覽列 Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            {/* 使用原本的向量 SVG Logo 並維持適當大小 */}
            <img
              src="/images/mwwm-logo.svg"
              alt="MWWM Logo"
              className="h-28 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">關於我們</a>
            <a href="#services" className="hover:text-blue-600 transition">專業服務</a>
            <a href="#contact" className="hover:text-blue-600 transition">聯絡我們</a>
          </nav>

          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition shadow-sm"
          >
            立即諮詢
          </a>
        </div>
      </header>

      {/* 2. Hero 視覺主區塊 */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          為您的業務提供 <span className="text-blue-600">專業且高效</span> 的最佳解決方案
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          我們致力於打造最高品質的商業服務，協助企業轉型與成長，開創新局。
        </p>
        <div className="flex justify-center gap-4">
          <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition shadow-md">
            探索服務
          </a>
          <a href="#contact" className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-8 py-3.5 rounded-lg font-semibold text-lg transition">
            聯繫團隊
          </a>
        </div>
      </section>

      {/* 3. 服務項目 Services */}
      <section id="services" className="bg-white py-20 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">我們的專業服務</h2>
            <p className="text-slate-600">針對不同需求量身打造的整合性服務</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">01</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">核心諮詢服務</h3>
              <p className="text-slate-600 leading-relaxed">深入了解客戶需求，提供具前瞻性與執行力的專業建議方案。</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">02</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">數位化升級</h3>
              <p className="text-slate-600 leading-relaxed">運用現代化技術優化內部流程與服務體驗，提升整體競爭力。</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">03</div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">營運與管理</h3>
              <p className="text-slate-600 leading-relaxed">持續性維護與優化支援，確保專案長期穩定運行與高效率成果。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 關於我們 About */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">關於 MWWM (HONG KONG) LIMITED</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              我們擁有專業的團隊與豐富的實務經驗，始終秉持著「品質、創新、客戶至上」的經營理念，為客戶提供最精準的客製化方案。
            </p>
            <div className="space-y-2 text-slate-600 mt-6">
              <p><strong className="text-slate-900">地址：</strong>香港葵涌貨櫃碼頭路88號永得利廣場2期11樓09室[cite: 10]</p>
              <p><strong className="text-slate-900">負責人 / 聯絡人：</strong>Mike He</p>
              <p><strong className="text-slate-900">電話：</strong>+852 5229 0248</p>
              <p><strong className="text-slate-900">電郵：</strong>cs@mwwm.com.hk</p>
            </div>
          </div>
          <div className="bg-slate-200 h-64 rounded-2xl flex items-center justify-center text-slate-400 font-medium">
            [ 公司辦公環境 / 形象圖片 ]
          </div>
        </div>
      </section>

      {/* 5. 聯絡我們 Contact */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">聯絡我們</h2>
            <p className="text-slate-400">填寫下方表單或直接透過聯絡方式與我們取得聯繫。</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12 bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">公司資訊</h3>
              <p className="text-slate-300 mb-2"><strong>MWWM (HONG KONG) LIMITED</strong></p>
              <p className="text-slate-300 mb-2">香港葵涌貨櫃碼頭路88號永得利廣場2期11樓09室</p>
              <p className="text-slate-300 mb-2">聯絡人：Mike He</p>
              <p className="text-slate-300 mb-2">電話：+852 5229 0248</p>
              <p className="text-slate-300">信箱：cs@mwwm.com.hk</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">服務時間</h3>
              <p className="text-slate-300 mb-2">星期一至星期五：09:00 - 18:00</p>
              <p className="text-slate-300 mb-2">星期六、日及公眾假期：休息</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">姓名</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="請輸入您的姓名" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">電郵地址</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="name@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">諮詢內容</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="請簡述您的需求..."></textarea>
            </div>
            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition shadow-md">
              送出訊息
            </button>
          </form>
        </div>
      </section>

      {/* 6. 頁尾 Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800">
        © {new Date().getFullYear()} MWWM (HONG KONG) LIMITED. All rights reserved.
      </footer>
    </div>
  );
}