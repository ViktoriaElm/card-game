
import appStyles from './App.module.scss';
import InstructionPopup from './components/popups/InstructionPopup.tsx';
import Button from './components/buttons/Button.tsx';

export default function App() {

  return (
    <>
      <h1 className={appStyles.mainPage__title}>Игра на развитие внимания</h1>
      <h3>
        Проверьте свою внимательность и попробуйте собрать все пары картинок, запоминая их расположение!
      </h3>
      <div className={appStyles.mainPage__button_wrapper}>
        <Button
          className={appStyles.mainPage__button}
        >Прочитать инструкцию</Button>
        <Button
          className={appStyles.mainPage__button}
        >Играть</Button>
      </div>

      <InstructionPopup />
    </>
  )
}

// уровень 1 - 2 карты
// уровень 2 - 4
// уровень 3 - 6
// уровень 4 - 8
// уровень 5 - 10
// уровень 6 - 12
// уровень 7 - 14
// уровень 8 - 16
// уровень 9 - 18
// уровень 10 - 20
