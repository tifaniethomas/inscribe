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
  const [navTitle, setNavTitle] = useState({})
  const [navNum, setNavNum] = useState()
  const [textBlocks, setTextBlocks] = useState([])
  const [titles, setTitles] = useState([])


  
  return (
    <main className="App">
      
      {user ?
        <>
          <NavBar user={user} setUser={setUser} navTitle={ navTitle } navNum={ navNum } />
          <Routes>
            {!navTitle ? 
                <Route path="/" element={ <TitlePage titles={ titles } setTitles={ setTitles } 
                navTitle={ navTitle } setNavTitle={ setNavTitle } setNavNum={ setNavNum }/>} />
              : 
              <>
                <Route path="/" element={ <TitlePage titles={ titles } setTitles={ setTitles } 
                navTitle={ navTitle } setNavTitle={ setNavTitle } setNavNum={ setNavNum }/>} />

                <Route path="/textBlocks/new" element={ <NewTextBlock titles={ titles } navTitle={ navTitle } 
                textBlocks={textBlocks} setTextBlocks={ setTextBlocks } navNum={ navNum } setNavNum={ setNavNum } /> }/>

                <Route path="/textBlocks" element={ <TextBlockIndexPage navTitle={ navTitle } 
                textBlocks={textBlocks} setTextBlocks={ setTextBlocks } setNavNum={ setNavNum } /> }/>
              </>  
            }
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}