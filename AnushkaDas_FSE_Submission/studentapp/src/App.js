import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CalculateScore from './components/CalculateScore';
import Posts from './components/Posts';
import ComplaintRegister from './components/ComplaintRegister';
import MailRegister from './components/MailRegister';
import GitClient from './components/GitClient';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#e0e0e0' }}>
        <Link to="/">Home</Link> | <Link to="/score">Score</Link> | 
        <Link to="/posts">Posts</Link> | <Link to="/complaint">Complaint</Link> | 
        <Link to="/register">Register</Link> | <Link to="/git">Git</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/score" element={<CalculateScore name="Anushka" total={80} goal={85} />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/complaint" element={<ComplaintRegister />} />
        <Route path="/register" element={<MailRegister />} />
        <Route path="/git" element={<GitClient />} />
      </Routes>
    </Router>
  );
}
export default App;