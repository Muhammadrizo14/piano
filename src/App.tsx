import './App.scss'
import Note from "./Components/Note";

function App() {

  return (
    <div className='pianoBoard'>
      <div className="notes">
        <Note note='c' keyboardKey='a'/>
        <Note note='d' keyboardKey='s'/>
      </div>
    </div>
  )
}

export default App
