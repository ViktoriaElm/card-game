import gameFieldPopupStyles from "./InstructionPopup.module.scss";

interface GameFieldPopupProps {
    closePopup: () => void;
    children: React.ReactNode;
}

export default function GameFieldPopup({ closePopup, children }: GameFieldPopupProps) {

    return (
        <div className={gameFieldPopupStyles.instructionPopup__container}>

            <button
                className={gameFieldPopupStyles.instructionPopup__closeBtn}
                onClick={closePopup}
            >
                X
            </button>

            <h2 className={gameFieldPopupStyles.instructionPopup__h2}>
                Уровень: {children}
            </h2>

        </div>
    )
}
