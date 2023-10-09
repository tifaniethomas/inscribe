// import { useState } from "react";
import TextBlockForm from "../../components/TextBlockForm/TextBlockForm";

export default function NewTextBlock({ setNewTextBlock }) {
    
    return (
    <> 
        <h1>Write New Text Block</h1>
        <TextBlockForm setNewTextBlock={ setNewTextBlock }/>
    </>
    )
}