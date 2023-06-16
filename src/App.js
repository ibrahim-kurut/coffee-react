import './App.css';

import HomePage from './pages/Home/HomePage'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import Layout from './pages/Layout/Layout';
import ContactPage from './pages/Contact/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ServicePage from './pages/Service/ServicePage';
import MenuPage from './pages/MenuPage/MenuPage';
import FooterSection from './GlobalComponents/FooterSection/FooterSection';




function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="service" element={<ServicePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
