// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MasterReport from './pages/MasterReport';
import ProjectTemplate from './pages/ProjectTemplate';
import Layout from './components/Layout';
import './App.css';

function App() {
  const [lang, setLang] = useState('en'); // الحالة المركزية للغة

  return (
    <Router>
      <Layout lang={lang}>
        <Routes>
          {/* نمرر اللغة ودالة التغيير للصفحة الرئيسية */}
          <Route path="/" element={<MasterReport lang={lang} setLang={setLang} />} />
          <Route path="/project/:id" element={<ProjectTemplate />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;