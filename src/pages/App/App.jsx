import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewTextBlock from '../NewTextBlock/NewTextBlock';
import TextBlockIndexPage from '../TextBlockIndexPage/TextBlockIndexPage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [title, setTitle] = useState("")

  
  return (
    <main className="App">
      
      {user ?
        <>
          <NavBar user={user} setUser={setUser} title={ title }/>
          <Routes>
            <Route path="/" element={ <Home title={ title } setTitle={ setTitle } /> }/>
            <Route path="/textBlocks/new" element={ <NewTextBlock /> }/>
            <Route path="/textBlocks" element={ <TextBlockIndexPage /> }/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}