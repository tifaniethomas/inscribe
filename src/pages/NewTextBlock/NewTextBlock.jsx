// import { useState } from "react";
import './NewTextBlock.css';
import TextBlockForm from "../../components/TextBlockForm/TextBlockForm";

export default function NewTextBlock() {
    
    return (
    <> 
        <div className='NewTextBlock'><h1>New Text Block</h1></div>
        <TextBlockForm />
    </>
    )
}