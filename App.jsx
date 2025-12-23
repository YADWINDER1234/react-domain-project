import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <div className="container">
      <Header />
      <h1>Hello World</h1>
      <p>Let us learn ReactJS</p>
      <Footer />
    </div>
  );
}
