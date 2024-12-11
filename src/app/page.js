// src/app/page.js
import Header from '../components/Header'; // Імпорт компонентів
import ProductCatalog from '../components/ProductCatalog';

export default function HomePage() {
  return (
    <div>
      <ProductCatalog /> {/* Виведення ProductCatalog */}
    </div>
  );
}
