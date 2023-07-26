import { useState } from 'react'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.css'

function App() {
  const [statusMenu, setStatusMenu] = useState(false)
  function handleShowMenu() {
    setStatusMenu(!statusMenu)
  }

  return (
    <section className='App'>
      <Header handleShowMenu={handleShowMenu}/>
      <Main statusMenu={statusMenu}/>
    </section>
  );
}

export default App;
