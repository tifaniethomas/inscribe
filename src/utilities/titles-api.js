import sendRequest from "./send-request";

const BASE_URL = "/api/titles"

export function getAll() {
    return sendRequest(BASE_URL)
}

export function createTitle(title) {
    return sendRequest(BASE_URL, "POST", { title: title.title })
}

// export function deleteTextBlock(textBlockId) {
//     return sendRequest(`${BASE_URL}/${textBlockId}`, "DELETE")
// }