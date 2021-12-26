import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import CartPage from './pages/CartPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';

const App: React.FC = () => {
    const [user, setUser] = useState(true);

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={user ? <Navigate to='/' /> : <LoginPage />} />
            <Route path='/register' element={user ? <Navigate to='/' /> : <RegisterPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/products/' element={<ProductsPage />}>
                <Route path=':category' element={<ProductsPage />} />
            </Route>
            <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
    );
};

export default App;
