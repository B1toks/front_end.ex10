import React, { useEffect, useState } from "react";

const MenuItem = ({ text, url }) => {
  const [isClient, setIsClient] = useState(false);

  // Використовуємо useEffect, щоб визначити, чи код виконується на клієнтській стороні
  useEffect(() => {
    setIsClient(true); // Після рендеру на клієнті встановлюємо isClient в true
  }, []);

  if (!isClient) {
    // Якщо ми ще не на клієнті, повертаємо просто текст без перевірки URL
    return <li>{text}</li>;
  }

  const isExternal = url && !url.startsWith(window.location.origin);

  return (
    <li>
      {url ? (
        <a href={url} target={isExternal ? "_blank" : "_self"} rel="noopener noreferrer">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
};

export default MenuItem;
