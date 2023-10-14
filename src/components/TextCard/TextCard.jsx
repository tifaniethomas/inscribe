// import { useState } from "react";
import { useState } from "react";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import './TextCard.css';

export default function TextCard({ textBlock, textBlocks, setTextBlocks, isEditing, setIsEditing, idx, navTitle }) {
    const [editTextBlock, setEditTextBlock] = useState({})
    // const date = new Date(textBlock.createdAt).toLocaleString()

    async function handleDelete(textBlockId) {
        await textBlocksAPI.deleteTextBlock(textBlockId);
        setTextBlocks(textBlocks.filter(textBlock => textBlock._id !== textBlockId))
      }

    async function handleUpdate(textBlock) {
        console.log("handleUpdate", { textBlock })
        textBlocksAPI.updateTextBlock(textBlock)
    }

    function handleChange(evt) {
        console.log("onChange", evt)
        const updateTextBlock = { ...editTextBlock, [evt.target.name]: evt.target.value }
        setEditTextBlock(updateTextBlock)
    }



    // const swapIdxUp = (idx) => {
    //     console.log(textBlock)
    //     let idxUp = (parseInt(idx) - 1)
    //     const temp = textBlock[idx]
    //     textBlocks[idx] = textBlocks[idxUp]
    //     textBlocks[idxUp = temp] 
    // }

    // async function swapIdxDown (position) {
    //     console.log(position)
    // }

    return (
        <div className="TextCardFlex"> 
                <div >   
                    { textBlock.title === navTitle._id ? <>
                            <div contentEditable="true"
                                type="text"
                                value={textBlock}
                                onChange={handleChange}
                                className="TextCard"
                                >{ textBlock.text }</div></> : <></>}   
                </div>
                <div className="buttons">
                    <button type="submit" onClick={() => handleDelete(`${ textBlock._id }`)}>X</button>
                    {/* <button type="submit" onClick={() => swapIdxUp(`${ textBlock.position }`)}>▲</button>
                    <button type="submit" onClick={() => swapIdxDown(`${ textBlock.idx }`)}>▼</button> */}
                    <button type="submit" onClick={() => handleUpdate(`${textBlock}`)}>SAVE</button>
                </div>
        </div>
    )
}