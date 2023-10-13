import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import TitlePage from '../TitlePage/TitlePage';
import NewTextBlock from '../NewTextBlock/NewTextBlock';
import TextBlockIndexPage from '../TextBlockIndexPage/TextBlockIndexPage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [navTitle, setNavTitle] = useState("")
  
  return (
    <main className="App">
      
      {user ?
        <>
          <NavBar user={user} setUser={setUser} navTitle={ navTitle }/>
          <Routes>
            <Route path="/" element={ <TitlePage navTitle={ navTitle } setNavTitle={ setNavTitle } /> }/>
            <Route path="/textBlocks/new" element={ <NewTextBlock /> }/>
            <Route path="/textBlocks" element={ <TextBlockIndexPage navTitle={ navTitle } /> }/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}