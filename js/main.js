import NotesAPI from './NotesAPI.js';

NotesAPI.saveNote({
    title: "New note",
    body: "I am new note."
});
console.log(NotesAPI.getAllNotes());