// import { useState } from "react";
import './NewTextBlock.css';
import TextBlockForm from "../../components/TextBlockForm/TextBlockForm";

export default function NewTextBlock({ titles, navTitle, textBlocks, setTextBlocks, setNavNum, navNum }) {
    
    return (
    <> 
        <div className='NewTextBlock'><h1>New Text Block</h1></div>
        <TextBlockForm titles={ titles } navTitle={ navTitle } textBlocks={textBlocks} setTextBlocks={ setTextBlocks } 
        setNavNum={ setNavNum } navNum={ navNum } />
    </>
    )
}