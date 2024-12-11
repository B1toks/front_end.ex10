// src/app/layout.js
"use client"; // Додано директиву для клієнтських компонентів

import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import SideBar from '../components/SideBar'; 
import Content from '../components/Content'; 
import ProductCatalog from '../components/ProductCatalog'; 
import Cart from '../components/Cart'; 

import './global.css'; 
import '../components/css/Header.css';
import '../components/css/Logo.css';
import '../components/css/Menu.css';
import '../components/css/ProductCatalog.css';
import '../components/css/Sidebar.css';
import '../components/css/Footer.css';
import '../components/css/DateTime.css';
import '../components/css/Content.css';
import { Provider } from 'react-redux'; 
import { store } from '../store/store';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className="app">
            {/* Виведення Header */}
            <Header title="Header" />
            <div className="main">
              {/* Виведення Sidebar */}
              <SideBar title="SideBar" />
              <div className="content">
                {/* Виведення Content */}
                <Content title="Content" />
                {/* Виведення ProductCatalog */}
                <ProductCatalog />
                {/* Виведення Cart */}
                <Cart />
              </div>
            </div>
            {/* Виведення Footer */}
            <Footer title="Footer" />
          </div>
        </Provider>
      </body>
    </html>
  );
}
