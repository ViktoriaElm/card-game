import instructionPopupStyles from "./InstructionPopup.module.scss";

// interface InstructionPopupProps {

// }

export default function InstructionPopup() {
    return (
        <div className={instructionPopupStyles.instructionPopup__container}>

            <button className={instructionPopupStyles.instructionPopup__closeBtn}>X</button>

            <h2 className={instructionPopupStyles.instructionPopup__h2}>Правила игры</h2>
            <p>
                Перед вами игровое поле с перевернутыми картинками. Всего представлено до 20 пар изображений.<br /> Ваша задача — находить одинаковые картинки.
            </p>

            <h3 className={instructionPopupStyles.instructionPopup__h3}>Ход игры:</h3>
            <h4 className={instructionPopupStyles.instructionPopup__h4}>Каждый ваш ход состоит из двух шагов:</h4>
            <ul className={instructionPopupStyles.instructionPopup__list}>
                <li className={instructionPopupStyles.instructionPopup__list_item}>Переверните одну карточку.</li>
                <li className={instructionPopupStyles.instructionPopup__list_item}>Затем выберите вторую.</li>
            </ul>

            <p className={instructionPopupStyles.instructionPopup__description}>
                <strong>Если выбранные карты одинаковы, </strong>
                они остаются открытыми и удаляются с поля.<br />
                <b>Если совпадение отсутствует, </b>
                обе карты снова закрываются лицом вниз, и вы продолжаете игру заново.
            </p>

            <p>
                Выигрывает тот, кто быстрее соберёт все пары и очистит игровое поле!
            </p>

            <div className={instructionPopupStyles.instructionPopup__startButton_wrapper}>
                <button className={instructionPopupStyles.startButton}>
                    Погнали!
                </button>
            </div>
        </div>
    )
}
