import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../projectsData';

function ProjectTemplate() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) return <h2 style={{ textAlign: 'center' }}>Project Not Found</h2>;

  return (
    <div style={{ padding: '20px', fontFamily: '"Segoe UI", Tahoma, sans-serif' }}>
      
      {/* العودة للتقرير الرئيسي بالإنجليزية فقط */}
      <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#e74c3c', textDecoration: 'none', fontWeight: 'bold' }}>
        &larr; Back to Main Portfolio
      </Link>

      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #2980b9', marginBottom: '30px' }}>
        <h1 style={{ margin: '0 0 15px 0' }}>{project.title}</h1>
        
        <div style={{ marginBottom: '15px' }}>
            <p style={{ marginBottom: '10px' }}><strong>Description:</strong> {project.desc_en}</p>
            {/* حذفنا الوصف بالعربي هنا بناءً على طلبك للاعتماد على الإنجليزية */}
        </div>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ padding: '10px 20px', backgroundColor: '#333', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
              GitHub Repository
            </a>
            
            <a href={project.pdfPath} download style={{ padding: '10px 20px', backgroundColor: '#27ae60', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
              Download PDF Report
            </a>

            {/* زر الشرائح بالإنجليزية */}
            {project.slidesPath && (
              <a href={project.slidesPath} download style={{ padding: '10px 20px', backgroundColor: '#e67e22', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                Download Slides
              </a>
            )}
        </div>
      </div>

      {/* عناوين الأقسام بالإنجليزية */}
      <h3 style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
        Project Technical Report
      </h3>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', height: '800px', marginBottom: '40px' }}>
        <iframe src={project.pdfPath} title={`${project.title} Report`} width="100%" height="100%" style={{ border: 'none' }}></iframe>
      </div>

      {project.slidesPath && (
        <>
          <h3 style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
            Presentation Slides
          </h3>
          <div style={{ border: '1px solid #ccc', borderRadius: '8px', height: '800px', marginBottom: '40px' }}>
            <iframe src={project.slidesPath} title={`${project.title} Slides`} width="100%" height="100%" style={{ border: 'none' }}></iframe>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectTemplate;