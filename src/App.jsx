import React from 'react';
import Card from './components/Card/Card'
import Navbar from './components/Nav/Nav';
import IconBar from './components/IconsBar/IconBar';
import MiniNav from './components/MiniNav/MiniNav';

const App = () => {
  return (
    <div className="content">
      <div className='nav'>
        <Navbar />
      </div>
      <div>
        <IconBar />
      </div>
      <div className='cards'>
        <Card/>
        
      </div>
      <MiniNav />
    </div>
  );
}
export default App;
