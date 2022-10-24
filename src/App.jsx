import React from 'react';
import Card from './components/Card/Card'
import Navbar from './components/Nav/Nav';
import IconBar from './components/IconsBar/IconBar';

const App = () => {
  return (
    <div className="content">
      <div className='nav'>
        <Navbar />

      </div>
      <div className='mini_nav'>
        <IconBar />

      </div>
      <div className='cards'>
        <Card/>
      </div>
    </div>
  );
}
export default App;
