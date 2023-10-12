import './TextBlockForm.css';
import { useState } from "react";

export default function TitleForm() {
  const [title, setTitle] = useState("")

  
  async function handleSubmit(evt) {
        evt.preventDefault();
        setTitle({text: ''});
    }
    
    function handleChange(evt) {
        const updateTitle = { [evt.target.name]: evt.target.value };
        setNewTextBlock(updateTitle);
    }
    return (
        <div className="TitleForm">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <textarea type="text" name="title" aria-label="Start writing here" onChange={handleChange} required value={ newTitle.title } />
            <button type="submit">Save Title</button>
          </form>
        </div>
    )
}