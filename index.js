import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{ fontFamily: "Arial", color: "#333" }}>
    <h1>Bienvenue sur Diamand Gabon</h1>
    <p>Recharge, tournois, streaming et plus encore.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);