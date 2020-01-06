import React from 'react';
import './App.css'; 
import CreatePlaylist from './components/CreatePlaylist'

function App() {
  return (
    <div className='header'>
      <h1>Spotif4</h1>
      <hr />
      <CreatePlaylist />
    </div>
  );
}

export default App;
