import { useEffect, useState } from 'react';
import './styles.scss'
import { useRef } from 'react';
import NoteEffect from "./NoteEffect";
import useSound from 'use-sound';
interface IProps {
  note: string,
  keyboardKey: string,
  soundEffect: any
}

const Index = ({ keyboardKey, soundEffect }: IProps) => {
  const noteWrap = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0)
  const [play] = useSound(soundEffect);


  const handleKeyPress = (key: any) => {
    if (keyboardKey === key) {
      new Audio(soundEffect).play()

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
    <div className='note' ref={noteWrap} onClick={play}>
      {Array.from({ length: counter }, (_, i) => (
        <NoteEffect key={i} />
      ))}

      {/*<NoteEffect/>*/}
      <p>{keyboardKey}</p>
    </div>
  );
};

export default Index;