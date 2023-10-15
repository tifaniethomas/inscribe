// import { useState } from "react";
import './NewTextBlock.css';
import TextBlockForm from "../../components/TextBlockForm/TextBlockForm";
import CountdownTimer from '../../components/CountdownTimer/CountdownTimer';
import { useState } from 'react';

export default function NewTextBlock({ titles, navTitle, textBlocks, setTextBlocks, setNavNum, navNum }) {
    const [sprint, setSprint] = useState(false)
    const [minutes, setMinutes] = useState(0)

    function handleClick(evt) {
        evt.preventDefault()
        setSprint(true)
        console.log(evt.target.value)
        setMinutes(evt.target.value)
    }
    
    return (
    <> 
        <div className='NewTextBlock'>
        {!sprint ? 
        <button type="submit" value="1800" onClick={handleClick}>30 Minutes</button> : 
            <>
                <CountdownTimer minutes={minutes} />
                <button type="submit" onClick={(e) => {e.preventDefault; setSprint(false)}}>Sprint Again?</button>
            </>
        }
        </div>
        <TextBlockForm titles={ titles } navTitle={ navTitle } textBlocks={textBlocks} setTextBlocks={ setTextBlocks } 
        setNavNum={ setNavNum } navNum={ navNum } />
    </>
    )
}