// src/app/layout.js
"use client"; // Для того, щоб компоненти працювали лише на клієнті

import Header from '../components/Header'; // Імпортуємо Header
import Footer from '../components/Footer'; // Імпортуємо Footer
import './global.css'; // Глобальний стиль
import '../components/css/Header.css'; // Імпортуємо конкретні стилі
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
        <Provider store={store}> {/* Підключення Redux */}
          <Header /> {/* Виведення Header */}
          <main>{children}</main> {/* Виведення вмісту, що передається як children */}
          <Footer /> {/* Виведення Footer */}
        </Provider>
      </body>
    </html>
  );
}
