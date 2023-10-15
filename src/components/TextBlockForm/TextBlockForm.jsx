import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import * as titlesAPI from "../../utilities/titles-api"
import './TextBlockForm.css';
import NewTextBlock from "../../pages/NewTextBlock/NewTextBlock";

export default function TextBlockForm({ titles, navTitle, textBlocks, setTextBlocks, setNavNum, navNum }) {
  const [newTextBlock, setNewTextBlock] = useState("")
  const navigate = useNavigate()

  
  async function handleSubmit(evt) {
        evt.preventDefault()

        try {
            newTextBlock.title = navTitle._id
            newTextBlock.position =  1
            textBlocksAPI.createTextBlock(newTextBlock)
            setNewTextBlock({text: ''})
            navigate('/textBlocks')
        }   catch (err) {
            console.log(err)
        }
    }
    
    function handleChange(evt) {
        const updateTextBlock = { ...newTextBlock, [evt.target.name]: evt.target.value };
        setNewTextBlock(updateTextBlock);
    }
    return (
        <div className="TextBlockForm">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <textarea type="text" name="text" aria-label="Start writing here" onChange={handleChange} required value={ newTextBlock.text } />
            <button type="submit">Add Text Block</button>
          </form>
        </div>
    )
}