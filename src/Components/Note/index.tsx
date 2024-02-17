import React, { useEffect, useState } from 'react';
import './styles.scss'
import { useRef } from 'react';
import NoteEffect from "./NoteEffect";

interface IProps {
  note: string,
  keyboardKey: string
}

const Index = ({ note, keyboardKey }: IProps) => {
  const noteWrap = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0)

  const handleKeyPress = (key: any) => {
    if (keyboardKey === key) {
      setCounter(prev => prev + 1)
      noteWrap.current?.classList.add('clicked')
      setTimeout(() => {
        noteWrap.current?.classList.remove('clicked')
      }, 300);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      handleKeyPress(event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='note' ref={noteWrap}>
      {Array.from({ length: counter }, (_, i) => (
        <div key={i} className='top active'>
          <p>top</p>
        </div>

      ))}

      {/*<NoteEffect/>*/}
      <p>{keyboardKey} - {note}</p>
    </div>
  );
};

export default Index;