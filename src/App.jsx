
import appStyles from './App.module.scss';
import InstructionPopup from './components/popups/InstructionPopup.tsx';
import GameFieldPopup from './components/popups/GameFieldPopup.tsx';
import Button from './components/buttons/Button.tsx';
import { useState } from 'react';

export default function App() {
  const [showInstruction, setShowInstruction] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const handleShowPopup = () => {
    setShowInstruction(true);
  }

  const handleClosePopup = () => {
    setShowInstruction(false);
    setShowGame(false);
  };

  const handleStartGame = () => {
    setShowGame(true);
  }

  return (
    <>
      <h1 className={appStyles.mainPage__title}>Игра на развитие внимания</h1>
      <h3>
        Проверьте свою внимательность и попробуйте собрать все пары картинок, запоминая их расположение!
      </h3>
      <div className={appStyles.mainPage__button_wrapper}>
        <Button
          className={appStyles.mainPage__button}
          onClick={handleShowPopup}
        >
          Прочитать инструкцию
        </Button>
        <Button
          className={appStyles.mainPage__button}
          onClick={handleStartGame}
        >
          Играть
        </Button>
      </div>

      {showInstruction &&
        <InstructionPopup
          closePopup={handleClosePopup}
        />}

      {showGame &&
        <GameFieldPopup
          closePopup={handleClosePopup}
        />

      }
    </>
  )
}

// уровень 1 - 2 карты
// уровень 2 - 4
// уровень 3 - 6
// уровень 4 - 8
// уровень 5 - 10
// уровень 6 - 12
// можно по темам: саванна, птицы, домашние животные, ферма
