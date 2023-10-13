import './TitlePage.css';
import { useEffect, useState } from "react"
import TitleForm from "../../components/TitleForm/TitleForm";
import TitleCard from '../../components/TitleCard/TitleCard';
import * as titlesAPI from "../../utilities/titles-api"

export default function TitlePage({ navTitle, setNavTitle }) {
    const [titles, setTitles] = useState([])
    
    useEffect(function () {
        (async function() {
            const allTitles = await titlesAPI.getAll()
            setTitles(allTitles)
        })().catch((err) => {console.log(err)})
    }, [])

    const titlesList = titles.map((t, idx) => 
    <TitleCard title={t.title} setNavTitle={ setNavTitle } key={idx} />)
    
    return (
    <> 
        <div className='TitlePage'><h1>Welcome to Inscribe</h1></div>
        {!titles ?
            <div className='Text'>
                <p>Please enter a title to start a new document: </p>
                <TitleForm />      
            </div>
            :
            <div className='Text'>
                <p>Please enter a title to start a new document or select one of your previous titles to work on: </p>
                <TitleForm setNavTitle={ setNavTitle } />  
                { titlesList }
            </div>
    }


    </>
    )
}