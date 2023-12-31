import sendRequest from "./send-request";

const BASE_URL = "/api/textBlocks"

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createTextBlock(textBlock) {
    return sendRequest(BASE_URL, "POST", textBlock)
}

export function deleteTextBlock(textBlockId) {
    return sendRequest(`${BASE_URL}/${textBlockId}`, "DELETE")
}

export function updateTextBlock(id, editTextBlock) {
    console.log("textBlock in API: ", id, "editText: ", editTextBlock)
    return sendRequest(`${BASE_URL}/${id}`, "POST", { editTextBlock })
}