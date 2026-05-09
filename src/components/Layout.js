// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children, lang }) {
  return (
    <div style={{ 
      fontFamily: '"Segoe UI", Tahoma, sans-serif', 
      margin: '0 auto', 
      maxWidth: '1200px', 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      direction: lang === 'ar' ? 'rtl' : 'ltr'
    }}>
      
      <header style={{ padding: '20px', backgroundColor: '#f4f4f9', borderBottom: '2px solid #ddd', textAlign: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '24px', fontWeight: 'bold' }}>
          {lang === 'en' ? 'Data & Humanization Projects Portfolio' : 'معرض مشاريع البيانات والأنسنة'}
        </Link>
      </header>

      <main style={{ flex: '1', padding: '20px' }}>
        {children}
      </main>

      {/* الفوتر المحدث برابط الملف الرقمي الجديد */}
      <footer style={{ padding: '20px', backgroundColor: '#333', color: 'white', textAlign: 'center', marginTop: 'auto' }}>
        <p>{lang === 'en' ? 'Professional Links & Contact' : 'التواصل والروابط المهنية'}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', direction: 'ltr', flexWrap: 'wrap' }}>
          
          <a href="https://www.linkedin.com/in/shalee-khalil" target="_blank" rel="noopener noreferrer" style={{ color: '#4da6ff', textDecoration: 'none' }}>LinkedIn</a>
          
          <a href="https://github.com/shaleekhalil-dev" target="_blank" rel="noopener noreferrer" style={{ color: '#4da6ff', textDecoration: 'none' }}>GitHub</a>
          
          {/* رابط ملفك الرقمي الجديد */}
          <a href="https://shaleekhalil-portfolio.vercel.app/certs" target="_blank" rel="noopener noreferrer" style={{ color: '#4da6ff', textDecoration: 'none', fontWeight: 'bold' }}>
            {lang === 'en' ? 'Digital Portfolio' : 'ملفي الرقمي'}
          </a>

          <a href="https://wa.me/970599661819" target="_blank" rel="noopener noreferrer" style={{ color: '#4da6ff', textDecoration: 'none' }}>
            {lang === 'en' ? 'WhatsApp' : 'واتساب'}
          </a>
          
        </div>
      </footer>

    </div>
  );
}

export default Layout;