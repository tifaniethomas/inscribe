// import { useState } from "react";
import { useEffect } from "react";
import * as textBlocksAPI from "../../utilities/textBlocks-api"
import './TextCard.css';

export default function TextCard({ textBlock, textBlocks, setTextBlocks, isEditing, setIsEditing, idx }) {
    // const [editTextBlock, setEditTextBlock] = useState([])
    const date = new Date(textBlock.createdAt).toLocaleString()

    async function handleDelete(textBlockId) {
        await textBlocksAPI.deleteTextBlock(textBlockId);
        setTextBlocks(textBlocks.filter(textBlock => textBlock._id !== textBlockId));
      }

    // async function handleEdit(textBlockId, textBlockIdx) {
    //     await textBlocksAPI.editTextBlock(textBlockId)
    //     setEditTextCard()
    // } 

    function handleDoubleClick() {
        setIsEditing(true)
    }

    const handleChange = (evt) => {
        setTextBlocks(evt.target.value)
    }

    const handleBlur = () => {
        setIsEditing(false)
        // save the edit
    }

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus()
        }
    }, [isEditing])

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
                <div className="TextCard" onDoubleClick={handleDoubleClick}>
                    {isEditing ? 
                    <>
                        <input
                            type="text"
                            value={text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    </> : <>
                    { date }:&nbsp;&nbsp;&nbsp;{ textBlock.text }
                    </>}
                </div>
            {/* <button type="submit" onClick={() => swapIdxUp(`${ textBlock.position }`)}>▲</button>
            <button type="submit" onClick={() => swapIdxDown(`${ textBlock.idx }`)}>▼</button> */}
            <button type="submit" onClick={() => handleDelete(`${ textBlock._id }`)}>X</button>
        </div>
    )
}
{/* <button type="submit" onClick={() => handleEdit(`${ textBlock._id, textBlock.idx }`)}></button> */}