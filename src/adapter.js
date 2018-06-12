const baseUrl = "http://localhost:3000/api/v1"

function fetchNoteData() {
  const noteUrl = baseUrl + "/notes"
  return fetch(noteUrl)
    .then(r => r.json())
}

function fetchShowNotePage(id){
  const showNoteUrl = baseUrl + "/notes/" + id
  return fetch(showNoteUrl)
    .then(r => r.json())
}

function deleteNote(id) {
  const deleteUrl = baseUrl + "/notes" + id
  return fetch(deleteUrl, {
    headers: {
      'content-type': 'application/json'
    },
    method: 'DELETE'
  })
    .then(r => r.json())
}

function createNote(data) {
  // JSON.stringify(data)
  // data={"id":"id"}
}
