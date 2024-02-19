import './App.scss'
import Note from "./Components/Note";
import notes from './util/notes'


function App() {
  return (
    <div className='pianoBoard'>
      <div className="notes">
        {notes.map(note => (
          <Note key={note.note} {...note} />
        ))}
      </div>
    </div>
  )
}

export default App;