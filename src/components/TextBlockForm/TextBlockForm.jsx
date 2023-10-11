import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import './TextBlockForm.css';

export default function TextBlockForm() {
  const [newTextBlock, setNewTextBlock] = useState("")
  const navigate = useNavigate()

  
  async function handleSubmit(evt) {
        evt.preventDefault();

        try {
            textBlocksAPI.createTextBlock(newTextBlock)
            setNewTextBlock({text: ''});
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
            <input type="text" name="header" placeholder="Header or Outline Point Here" aria-label="Header or outline point" onChange={handleChange} required value={ newTextBlock.header } />
            <textarea type="text" name="text" placeholder="Click here to start writing" aria-label="Start writing here" onChange={handleChange} required value={ newTextBlock.text } />
            <button type="submit">Add Text Block</button>
          </form>
        </div>
    )
}