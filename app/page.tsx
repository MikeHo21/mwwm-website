import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [lang, setLang] = useState<'tc' | 'sc' | 'en'>('tc');

  const content = {
    tc: {
      navAbout: '關於我們',
      navProducts: '專業產品',
      navPartners: '合作夥伴',
      navContact: '聯絡我們',
      cta: '立即諮詢',
      heroTitle: '專業商業用品及方案供應商',
      heroSubtitle: '為您的業務提供專業且高效的最佳解決方案，結合頂尖製造與創新設計。',
      explore: '探索產品',
      contactUs: '聯繫團隊',
      productsTitle: '產品與服務領域',
      productsSubtitle: '針對不同高端商業需求量身打造的卓越產品',
      p1Title: '專業環境衛生產品',
      p1Desc: '深耕蟲控衛生領域，提供高品質、安全可靠的專業環境衛生與消殺配套產品。（產品圖片與合作品牌即將上線）',
      p2Title: '高端酒店定制產品',
      p2Desc: '專注高端布草與酒店定制用品，融合美學與實用性，滿足頂級飯店與商業空間的嚴格標準。（產品圖片與合作品牌即將上線）',
      aboutTitle: '關於 MWWM (HONG KONG) LIMITED',
      aboutText: '我們擁有專業的團隊與豐富的實務經驗，公司在中國內地有深度合作的定制工廠，亦同美國技術公司共同開發產品，利用香港本地化的專業團隊，將中國的製造實力同美國的設計理念注入香港本地發展，秉持「品質、創新、客戶至上」的經營理念，特別是在蟲控衛生領域和高端布草領域成為香港本地的卓越產品供應商，為客戶提供最精準的客製化方案。',
      addr: '地址：香港葵涌貨櫃碼頭路88號永得利廣場2期11樓09室',
      contactPerson: '負責人 / 聯絡人：Mike He',
      phone: '電話：+852 5229 0248',
      email: '電郵：cs@mwwm.com.hk',
      partnersTitle: '合作商與技術支持',
      partnersSubtitle: '感謝以下行業翹楚與技術夥伴的鼎力支持與緊密合作',
      contactTitle: '聯絡我們',
      contactSubtitle: '填寫下方表單或直接透過聯絡方式與我們取得聯繫。',
      companyInfo: '公司資訊',
      serviceHours: '服務時間',
      hoursText: '星期一至星期五：09:00 - 18:00\n星期六、日及公眾假期：休息',
      name: '姓名',
      emailLabel: '電郵地址',
      message: '諮詢內容',
      submit: '送出訊息',
    },
    sc: {
      navAbout: '关于我们',
      navProducts: '专业产品',
      navPartners: '合作伙伴',
      navContact: '联络我们',
      cta: '立即咨询',
      heroTitle: '专业商业用品及方案供应商',
      heroSubtitle: '为您的业务提供专业且高效的最佳解决方案，结合顶尖制造与创新设计。',
      explore: '探索产品',
      contactUs: '联系团队',
      productsTitle: '产品与服务领域',
      productsSubtitle: '针对不同高端商业需求量身打造的卓越产品',
      p1Title: '专业环境卫生产品',
      p1Desc: '深耕虫控卫生领域，提供高品质、安全可靠的专业环境卫生与消杀配套产品。（产品图片与合作品牌即将上线）',
      p2Title: '高端酒店定制产品',
      p2Desc: '专注高端布草与酒店定制用品，融合美学与实用性，满足顶级饭店与商业空间的严格标准。（产品图片与合作品牌即将上线）',
      aboutTitle: '关于 MWWM (HONG KONG) LIMITED',
      aboutText: '我们拥有专业的团队与丰富的实务经验，公司在中国内地有深度合作的定制工厂，亦同美国技术公司共同开发产品，利用香港本地化的专业团队，将中国的制造实力同美国的设计理念注入香港本地发展，秉持「品质、创新、客户至上」的经营理念，特别是在虫控卫生领域和高端布草领域成为香港本地的卓越产品供应商，为客户提供最精准的定制化方案。',
      addr: '地址：香港葵涌货柜码头路88号永得利广场2期11楼09室',
      contactPerson: '负责人 / 联络人：Mike He',
      phone: '电话：+852 5229 0248',
      email: '电邮：cs@mwwm.com.hk',
      partnersTitle: '合作商与技术支持',
      partnersSubtitle: '感谢以下行业翘楚与技术伙伴的鼎力支持与紧密合作',
      contactTitle: '联络我们',
      contactSubtitle: '填写下方表单或直接透过联絡方式与我们取得联系。',
      companyInfo: '公司资讯',
      serviceHours: '服务时间',
      hoursText: '星期一至星期五：09:00 - 18:00\n星期六、日及公众假期：休息',
      name: '姓名',
      emailLabel: '电邮地址',
      message: '咨询内容',
      submit: '送出讯息',
    },
    en: {
      navAbout: 'About Us',
      navProducts: 'Products',
      navPartners: 'Partners',
      navContact: 'Contact Us',
      cta: 'Inquire Now',
      heroTitle: 'Professional Commercial Supplies & Solutions Provider',
      heroSubtitle: 'Delivering professional and efficient solutions with top-tier manufacturing and innovative design.',
      explore: 'Explore Products',
      contactUs: 'Contact Team',
      productsTitle: 'Products & Solutions',
      productsSubtitle: 'Excellence tailored for high-end commercial demands',
      p1Title: 'Professional Environmental Hygiene Products',
      p1Desc: 'Deeply rooted in pest control hygiene, offering high-quality, reliable hygiene and extermination supplies. (Product images and brands coming soon)',
      p2Title: 'High-End Hotel Custom Products',
      p2Desc: 'Specializing in premium linens and bespoke hotel amenities, blending aesthetics with functionality for elite hospitality spaces. (Product images and brands coming soon)',
      aboutTitle: 'About MWWM (HONG KONG) LIMITED',
      aboutText: 'We possess a professional team and rich practical experience. With deeply collaborated custom manufacturing plants in mainland China and co-development partnerships with U.S. technology companies, we leverage our localized professional team in Hong Kong to integrate China’s manufacturing prowess with American design philosophies. Upholding our philosophy of "Quality, Innovation, and Customer First," we have become a premier product supplier in Hong Kong, particularly in pest control hygiene and high-end linens, delivering precise tailored solutions for our clients.',
      addr: 'Address: Room 09, 11/F, Tower 2, Ever Gain Plaza, 88 Container Port Road, Kwai Chung, Hong Kong',
      contactPerson: 'Contact Person: Mike He',
      phone: 'Phone: +852 5229 0248',
      email: 'Email: cs@mwwm.com.hk',
      partnersTitle: 'Partners & Technical Support',
      partnersSubtitle: 'Special thanks to our industry leaders and technical partners for their collaboration and support',
      contactTitle: 'Contact Us',
      contactSubtitle: 'Fill out the form below or reach out to us directly.',
      companyInfo: 'Company Info',
      serviceHours: 'Service Hours',
      hoursText: 'Monday to Friday: 09:00 - 18:00\nSaturday, Sunday & Public Holidays: Closed',
      name: 'Name',
      emailLabel: 'Email Address',
      message: 'Message',
      submit: 'Send Message',
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* 1. 導覽列 Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-32 flex justify-between items-center">
          <Link href="/" className="flex items-center h-full">
            <img
              src="/images/mwwm-logo.svg"
              alt="MWWM Logo"
              className="h-full w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex space-x-8 font-medium text-slate-600 items-center">
            <a href="#about" className="hover:text-blue-600 transition">{t.navAbout}</a>
            <a href="#products" className="hover:text-blue-600 transition">{t.navProducts}</a>
            <a href="#partners" className="hover:text-blue-600 transition">{t.navPartners}</a>
            <a href="#contact" className="hover:text-blue-600 transition">{t.navContact}</a>
            
            {/* 語言切換按鈕 Language Switcher */}
            <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
              <button 
                onClick={() => setLang('tc')} 
                className={`px-2.5 py-1 rounded-md transition ${lang === 'tc' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                繁
              </button>
              <button 
                onClick={() => setLang('sc')} 
                className={`px-2.5 py-1 rounded-md transition ${lang === 'sc' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                简
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-2.5 py-1 rounded-md transition ${lang === 'en' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                EN
              </button>
            </div>
          </nav>

          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition shadow-sm"
          >
            {t.cta}
          </a>
        </div>
      </header>

      {/* 2. Hero 視覺主區塊 */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          為您的業務提供 <span className="text-blue-600">專業商業用品及方案供應商</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.heroSubtitle}
        </p>
        <div className="flex justify-center gap-4">
          <a href="#products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition shadow-md">
            {t.explore}
          </a>
          <a href="#contact" className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-8 py-3.5 rounded-lg font-semibold text-lg transition">
            {t.contactUs}
          </a>
        </div>
      </section>

      {/* 3. 產品與服務 Products */}
      <section id="products" className="bg-white py-20 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.productsTitle}</h2>
            <p className="text-slate-600">{t.productsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">01</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{t.p1Title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.p1Desc}</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">02</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{t.p2Title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.p2Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 關於我們 About */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.aboutTitle}</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {t.aboutText}
            </p>
            <div className="space-y-2 text-slate-600">
              <p><strong className="text-slate-900">{t.addr}</strong></p>
              <p><strong className="text-slate-900">{t.contactPerson}</strong></p>
              <p><strong className="text-slate-900">{t.phone}</strong></p>
              <p><strong className="text-slate-900">{t.email}</strong></p>
            </div>
          </div>
          <div className="bg-slate-200 h-80 rounded-2xl flex items-center justify-center text-slate-400 font-medium">
            [ 產品圖片與品牌展示區塊 / Product Showcase ]
          </div>
        </div>
      </section>

      {/* 5. 合作商與技術支持 Partners */}
      <section id="partners" className="bg-slate-100 py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.partnersTitle}</h2>
          <p className="text-slate-600 mb-12">{t.partnersSubtitle}</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">ORKIN (HONG KONG)</h3>
              <p className="text-slate-500 text-sm mb-4">全球領先的蟲害管理與環境衛生合作夥伴</p>
              <a 
                href="https://www.orkin.com.hk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
              >
                www.orkin.com.hk &rarr;
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">香港蟲害協會有限公司</h3>
              <p className="text-slate-500 text-sm mb-4">專業蟲害防治行業學術與技術支持機構</p>
              <span className="text-slate-700 font-semibold">Hong Kong Pest Management Association</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 聯絡我們 Contact */}
      <section id="contact" className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
            <p className="text-slate-400">{t.contactSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12 bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
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

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t.name}</label>
                <input type="text" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">{t.emailLabel}</label>
                <input type="email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="name@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">{t.message}</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500" placeholder="..."></textarea>
            </div>
            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-lg transition shadow-md">
              {t.submit}
            </button>
          </form>
        </div>
      </section>

      {/* 7. 頁尾 Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800">
        © {new Date().getFullYear()} MWWM (HONG KONG) LIMITED. All rights reserved.
      </footer>
    </div>
  );
}