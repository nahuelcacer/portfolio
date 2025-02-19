import { useState } from 'react';

function TestButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    alert('Botón clickeado');
  };

  return (
    <button onClick={handleClick}>
      {clicked ? '¡Haz hecho clic!' : 'Haz clic en mí'}
    </button>
  );
}

export default TestButton;
