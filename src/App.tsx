import './App.scss'
import Note from "./Components/Note";
import notes from './util/notes'


function App() {
  return (
    <div className='pianoBoard'>
      <p className="createdby">created by <a href="https://github.com/Muhammadrizo14">@ubuntuous</a></p>

      <div className="notes">
        {notes.map(note => (
          <Note key={note.note} {...note} />
        ))}
      </div>
    </div>
  )
}

export default App;