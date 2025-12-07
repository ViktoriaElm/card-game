import popupStyles from "./popup.module.scss";

interface InstructionPopupProps {
    closePopup: () => void;
    startGame?: () => void;
}

export default function InstructionPopup({ closePopup, startGame }: InstructionPopupProps) {

    return (
        <div className={popupStyles.popup__container}>

            <span
                className={popupStyles.popup__closeBtn}
                onClick={closePopup}
            >
                x
            </span>

            <h2 className={popupStyles.popup__h2}>
                Правила игры
            </h2>
            <p className={popupStyles.popup__description}>
                Перед вами игровое поле с перевернутыми картинками. Всего представлено до 20 пар изображений.<br /> Ваша задача — находить одинаковые картинки.
            </p>

            <h3 className={popupStyles.popup__h3}>
                Ход игры:
            </h3>
            <h4 className={popupStyles.popup__h4}>
                Каждый ваш ход состоит из двух шагов:
            </h4>
            <ul className={popupStyles.popup__list}>
                <li className={popupStyles.popup__list_item}>
                    Переверните одну карточку.
                </li>
                <li className={popupStyles.popup__list_item}>
                    Затем выберите вторую.
                </li>
            </ul>

            <p className={popupStyles.popup__description}>
                <strong>Если выбранные карты одинаковы, </strong>
                они остаются открытыми и удаляются с поля.<br />

                <b>Если совпадение отсутствует, </b>
                обе карты снова закрываются лицом вниз, и вы продолжаете игру заново.
            </p>

            <p className={popupStyles.popup__description}>
                Выигрывает тот, кто быстрее соберёт все пары и очистит игровое поле!
            </p>

        </div>
    )
}
