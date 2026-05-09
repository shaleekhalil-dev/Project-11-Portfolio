// src/pages/MasterReport.js
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../projectsData';

function MasterReport({ lang, setLang }) { // استلام اللغة والدالة كـ props
  const pdfSrc = lang === 'en' 
    ? "/pdfs/Project-11-Strategic-Integration-Report.pdf" 
    : "/pdfs/Project-11-Strategic-Integration-Report-AR.pdf";

  return (
    <div style={{ textAlign: 'center', padding: '20px', direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
      
      {/* العناوين المترجمة */}
      <h1 style={{ color: '#2c3e50' }}>
        {lang === 'en' ? 'Strategic Integration Report' : 'تقرير التكامل الاستراتيجي'}
      </h1>

      {/* أزرار التبديل */}
      <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '15px', direction: 'ltr' }}>
        <button onClick={() => setLang('en')} style={{ padding: '10px 20px', backgroundColor: lang === 'en' ? '#2980b9' : '#bdc3c7', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {lang === 'en' ? 'English Version' : 'النسخة الإنجليزية'}
        </button>
        <button onClick={() => setLang('ar')} style={{ padding: '10px 20px', backgroundColor: lang === 'ar' ? '#2980b9' : '#bdc3c7', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {lang === 'en' ? 'Arabic Version' : 'النسخة العربية'}
        </button>
      </div>

      {/* إطار الـ PDF */}
      <div style={{ border: '1px solid #ddd', borderRadius: '12px', height: '700px', marginBottom: '50px' }}>
         <iframe src={pdfSrc} title="Master Report" width="100%" height="100%" style={{ border: 'none' }}></iframe>
      </div>

      {/* قائمة المشاريع */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', textAlign: lang === 'ar' ? 'right' : 'left' }}>
        {projectsData.map(project => (
          <div key={project.id} style={{ border: '1px solid #eaeaea', borderRadius: '10px', padding: '20px' }}>
            <h3 style={{ color: '#2980b9' }}>{project.title}</h3>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{lang === 'en' ? project.desc_en : project.desc_ar}</p>
            <Link to={`/project/${project.id}`} style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#3498db', color: 'white', textDecoration: 'none', borderRadius: '6px' }}>
              {lang === 'en' ? 'View Details' : 'عرض التفاصيل'}
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
}

export default MasterReport;