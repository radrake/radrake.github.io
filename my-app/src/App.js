import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import MyRouter from './MyRouter';

function App() {
  // Theme toggle testing - ignore
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  // Theme toggle testing - ignore
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    console.log(theme);
  };

  // Theme toggle testing - ignore
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className='app' data-theme={theme}>
      <Navbar toggle={ toggleTheme }/>
      <div className='container'>
        <MyRouter />
      </div>
    </div>
  );
}

export default App;
