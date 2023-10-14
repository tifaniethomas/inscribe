import './TitlePage.css';
import { useEffect, useState } from "react"
import TitleForm from "../../components/TitleForm/TitleForm";
import TitleCard from '../../components/TitleCard/TitleCard';
import * as titlesAPI from "../../utilities/titles-api"

export default function TitlePage({ titles, setTitles, navTitle, setNavTitle, setNavNum }) {

    
    useEffect(function () {
        (async function() {
            const allTitles = await titlesAPI.getAll()
            setTitles(allTitles)
        })().catch((err) => {console.log(err)})
    }, [])

    const titlesList = titles.map((t, idx) => 
    <TitleCard titleObj={ t } title={t.title} id={t.id} setNavTitle={ setNavTitle } key={idx} setNavNum={ setNavNum } titles={titles} />)
    
    return (
    <> 
        <div className='TitlePage'><h1>Welcome to Inscribe</h1></div>
        {!titles ?
            <div className='Text'>
                <p>Please enter a title to start a new document: </p>
                <TitleForm setNavTitle={ setNavTitle } setNavNum={ setNavNum } />      
            </div>
            :
            <div className='Text'>
                <p>Please enter a title to start a new document or select one of your previous titles to work on: </p>
                <TitleForm />  
                <br/>
                <hr />
                <br />
                { titlesList }
            </div>
    }


    </>
    )
}