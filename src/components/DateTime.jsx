'use client';

import React, { useState, useEffect } from 'react';
import CurrentDate from './CurrentDate';
import CurrentTime from './CurrentTime';
import './css/DateTime.css';

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="datetime">
      <CurrentDate date={date} />
      <CurrentTime date={date} />
    </div>
  );
};

export default DateTime;
