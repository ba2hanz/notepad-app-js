import NotesView from './NotesView.js';
import NotesAPI from './NotesAPI.js';


const app = document.getElementById("app");
const view = new NotesView(app , {
    onNoteEdit(newTitle, newBody){
        console.log("Note edited");
        console.log(newTitle);
        console.log(newBody);
    },
});

view.updateNoteList(NotesAPI.getAllNotes());