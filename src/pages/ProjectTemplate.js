// src/pages/ProjectTemplate.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../projectsData';

function ProjectTemplate() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) return <h2 style={{ textAlign: 'center' }}>Project Not Found | المشروع غير موجود</h2>;

  return (
    <div style={{ padding: '20px', fontFamily: '"Segoe UI", Tahoma, sans-serif' }}>
      
      <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#e74c3c', textDecoration: 'none', fontWeight: 'bold' }}>
        &larr; Back to Main Report | العودة للتقرير الرئيسي
      </Link>

      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #2980b9', marginBottom: '30px' }}>
        <h1 style={{ margin: '0 0 15px 0' }}>{project.title}</h1>
        
        <div style={{ marginBottom: '15px' }}>
            <p style={{ marginBottom: '10px' }}><strong>Description:</strong> {project.desc_en}</p>
            <p style={{ textAlign: 'right', direction: 'rtl' }}><strong>الوصف:</strong> {project.desc_ar}</p>
        </div>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
              GitHub Repo | مستودع الكود
            </a>
            
            <a href={project.pdfPath} download style={{ padding: '10px 20px', backgroundColor: '#27ae60', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
              Download PDF | تحميل التقرير
            </a>
        </div>
      </div>

      <div style={{ border: '1px solid #ccc', borderRadius: '8px', height: '800px' }}>
        <iframe src={project.pdfPath} title={project.title} width="100%" height="100%" style={{ border: 'none' }}></iframe>
      </div>
    </div>
  );
}

export default ProjectTemplate;