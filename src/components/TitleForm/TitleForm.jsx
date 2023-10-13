import './TitleForm.css';
import * as titlesAPI from "../../utilities/titles-api"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function TitleForm({ setNavTitle }) {
  const navigate = useNavigate()
  const [newTitle, setNewTitle] = useState({title: ''})
  
  async function handleSubmit(evt) {
        evt.preventDefault()

        try {
          titlesAPI.createTitle(newTitle)
          setNewTitle({title: ''})
          setNavTitle(newTitle)
          navigate('/textBlocks')
        } catch (err) {
          console.log(err)
      }
  }
    
  function handleChange(evt) {    
        const updateTitle = { ...newTitle, [evt.target.name]: evt.target.value };
        setNewTitle(updateTitle);
    }
    return (
        <div className="TitleForm">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="text" name="title" aria-label="Enter Title Here" onChange={handleChange} required value={ newTitle.title } /><br />
            <button type="submit">Save Title</button>
          </form>
        </div>
    )
}