document.addEventListener("DOMContentLoaded", onLoad)

  const noteListUl = document.querySelector("ul")
  const notePanelDiv = document.getElementById("note-panel")
  const form = document.querySelector("form")
  const textinput = document.querySelector("form input")
  const textarea = document.querySelector("form textarea")
  // const noteListArray = fetchNoteData()

// form.addEventListener('submit', function(e) {
//   e.preventDefault()
//   // send data to route? to database
// })


function onLoad() {
  // noteListUl.innerHTML = ""
  fetchNoteData()
    .then(notes => renderNotes(notes))
  // render note, buttons whatever
 }

 function renderNotes(notes) {
   notes.forEach(renderNote)
 }
 //
 function renderNote(note) {
   let newNote = `<li>
   <a data-id="${note.id}">${note.title}</a>
   <button id="delete-${note.id}">Delete</button>
   <button id="edit-${note.id}">Edit</button>
   </li>`
   // let newNote = document.createElement("li")
   // newNote.innerHTML = `${note.title}`
   noteListUl.innerHTML += newNote
 }

 function showNote(noteId){
   fetchShowNotePage(noteId)
    .then(obj => renderNotePanel(obj))
 }

 function renderNotePanel(obj){
   console.log(obj)
   textinput.value = obj.title
   textarea.innerText += obj.body
 }

const allEditors = document.querySelectorAll("edit-")

  function addDeleteListeners(){
    allLis.forEach((li) => {
      li.addEventListener('click', on)
    })
  }

  // function addEditListeners(){
  //
  // }

 noteListUl.addEventListener('click', function(e) {
   showNote(e.target.dataset.id)
 })

  function formValues(){
    form.values()
    // data = {
    //   title:
    //   content:
    // }

    createNote(data)
  }
