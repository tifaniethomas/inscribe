import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { getTextBlocks } from '../../utilities/textBlocks-api';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewTextBlock from '../NewTextBlock/NewTextBlock';
import TextBlockIndexPage from '../TextBlockIndexPage/TextBlockIndexPage'
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [textBlocks, setTextBlocks] = useState(getTextBlocks())
  
  return (
    <main className="App">
      
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/textBlocks/new" element={ <NewTextBlock setTextBlocks={ setTextBlocks } /> }/>
            <Route path="/textBlocks" element={ <TextBlockIndexPage textBlocks={ textBlocks } setTextBlocks={ setTextBlocks } /> }/>
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}