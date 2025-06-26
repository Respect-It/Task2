import React, { useEffect, useState } from 'react';


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.body.classList.toggle('dark-mode', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle('dark-mode', newMode);
    localStorage.setItem('darkMode', newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="theme-toggle-button"
      title="Toggle dark mode"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default DarkModeToggle;
