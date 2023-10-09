import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as textBlocksAPI from "../../utilities/textBlocks-api"

export default function TextBlockForm({ setTextBlock }) {
  const [newTextBlock, setNewTextBlock] = useState("")
  const navigate = useNavigate()

  
  async function handleSubmit(evt) {
        evt.preventDefault();

        try {
            textBlocksAPI.createTextBlock(newTextBlock)
            setNewTextBlock({text: ''});
            navigate('/')
        }   catch (err) {
            console.log(err)
        }
    }
    
    function handleChange(evt) {
        const updateTextBlock = { ...newTextBlock, [evt.target.name]: evt.target.value };
        setNewTextBlock(updateTextBlock);
    }
    return (
        <div className="form-container">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Begin Writing Here:</label>
            <textarea type="text" name="text" onChange={handleChange} required value={newTextBlock.text} />
            <button type="submit">Add Text Block</button>
          </form>
        </div>
    )
}