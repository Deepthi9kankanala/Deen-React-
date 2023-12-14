// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';



import App from './App';

const root = document.getElementById('root');
const rootElement = root.createRoot ? root.createRoot() : root;

ReactDOM.createRoot(rootElement).render( <React.StrictMode>
    <App />
    </React.StrictMode>);
