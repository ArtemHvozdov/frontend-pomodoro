import { useState } from 'react'
import Header from './components/header/header';
import Main from './components/main/main';
import './App.css'

function App() {
    const [statusMenu, setStatusMenu] = useState(false)
    function handleShowMenu() {
        setStatusMenu(!statusMenu)
    }

    return (
        <section className='App'>
            <Header handleShowMenu={handleShowMenu} />
            <Main statusMenu={statusMenu} />
        </section>
    );
}

export default App;
