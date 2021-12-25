import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

ReactDOM.render(
    <React.StrictMode>
        <ProductPage />
    </React.StrictMode>,
    document.getElementById('root')
);
