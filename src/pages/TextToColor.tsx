import { useState } from 'react';
import Square from '../components/Square';
import ToggleTextColorBtn from '../components/ToggleTextColorBtn';
import ColorNameInput from '../components/ColorNameInput';

const TextToColor = () => {
  const [displayText, setDisplayText] = useState('No Text!');
  const [text, setText] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [slate, setSlate] = useState(false);

  const handleTextColor = (e: { target: { value: any } }) => {
    let color = e.target.value;
    setText(color);
    if (color.length) {
      const newText = color[0]?.toUpperCase() + color.slice(1);
      setDisplayText(newText);
    } else {
      setDisplayText('No Text!');
    }
  };

  return (
    <div className='flex flex-col rounded-md justify-center items-center h-screen'>
      <Square
        text={text}
        displayText={displayText}
        isDark={isDark}
        slate={slate}
      />
      <ColorNameInput text={text} handleTextColor={handleTextColor} />

      <ToggleTextColorBtn
        setIsDark={setIsDark}
        setSlate={setSlate}
        isDark={isDark}
        slate={slate}
      />
    </div>
  );
};

export default TextToColor;
