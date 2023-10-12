import './Home.css';
import TitleForm from "../../components/TitleForm/TitleForm";
import { useEffect, useState } from "react"

export default function Home({ title, setTitle }) {
    const [textBlocks, setTextBlocks] = useState([])
    
    useEffect(function () {
        (async function() {
            const allTextBlocks = await textBlocksAPI.getAll()
            setTextBlocks(allTextBlocks)
        })()
    }, [])

    const titles = textBlocks.map((textBlock, idx) => 
    <TitleCard textBlock={ textBlock.text } textBlocks={ textBlocks } setTextBlocks={ setTextBlocks } key={ idx } 
    title={ textBlock.title } position={ textBlock.position }/>)
    
    return (
    <> 
        <div className='Home'><h1>Welcome to Inscribe</h1></div>
        {!title ?
            <>
                <p>Please enter a title to start a new document: </p>
                <TitleForm setTitle={ setTitle }/>      
            </>
            :
            <>
                <p>Please enter a title to start a new document or select one of your previous titles to work on: </p>
                <TitleForm setTitle={ setTitle }/>  
                { titles }  
            </>
    }


    </>
    )
}