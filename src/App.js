import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/UI/Layout';
import Home from './components/Home';
import Grid from 'components/Grid';
import About from './components/About';

export default function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Grid/>} path="/grid"/>
            <Route element={<About/>} path="/about"/>
          </Routes>
      </Layout>
    </Router>
  );
}