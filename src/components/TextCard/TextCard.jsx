// import { useState } from "react";
import { useState } from "react";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import './TextCard.css';

export default function TextCard({ textBlock, textBlocks, setTextBlocks }) {
    const [editText, setEditText] = useState(`${textBlock.text}`)
    // const date = new Date(textBlock.createdAt).toLocaleString()

    async function handleDelete(textBlockId) {
        await textBlocksAPI.deleteTextBlock(textBlockId);
        setTextBlocks(textBlocks.filter(textBlock => textBlock._id !== textBlockId))
      }

    async function handleUpdate(id, editText) {
        console.log("handleUpdate", editText)
        textBlocksAPI.updateTextBlock(id, editText)
    }

    function handleChange(evt) {
        console.log("onChange", evt)
        setEditText(evt.target.value)
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
                            <textarea
                                name="text"
                                type="text"
                                value={editText}
                                onChange={handleChange}
                                className="TextCard"/>
                </div>
                <div className="buttons">
                    <button type="submit" onClick={() => handleDelete(`${ textBlock._id }`)}>X</button>
                    {/* <button type="submit" onClick={() => swapIdxUp(`${ textBlock.position }`)}>▲</button>
                    <button type="submit" onClick={() => swapIdxDown(`${ textBlock.idx }`)}>▼</button> */}
                    <button type="submit" onClick={() => handleUpdate(textBlock._id, editText)}>SAVE</button>
                </div>
        </div>
    )
}