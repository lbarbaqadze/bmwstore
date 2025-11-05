import './App.css'
import Navbar from './components/Navbar/Navbar'
import { HashRouter, Routes, Route } from "react-router-dom";
import Model from './pages/ModelPage/Model';
import Shop from './pages/ShopPage/Shop';
import SignIn from './pages/SignInPage/Signin';
import SignUp from './pages/SignUpPage/Signup';
import ProtectedRoute from './auth/ProtectedRoute';
import Blog from './pages/BlogPage/Blog';
import Design from './pages/DesignPage/Design';
import Basket from './pages/BasketPage/Basket';
import { useState, useEffect } from 'react';

type BasketItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
};

export default function App() {
  const [basket, setBasket] = useState<BasketItem[]>(() => {
    const saved = localStorage.getItem("basket");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/models" element={<ProtectedRoute><Model /></ProtectedRoute>} />
        <Route path="/shop" element={<ProtectedRoute><Shop basket={basket} setBasket={setBasket} /></ProtectedRoute>} />
        <Route path="/design" element={<ProtectedRoute><Design /></ProtectedRoute>} />
        <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
        <Route path="/basket" element={<ProtectedRoute><Basket basket={basket} setBasket={setBasket} /></ProtectedRoute>} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}
