import popupStyles from "./popup.module.scss";
import Card from "../cards/Card";

interface GameFieldPopupProps {
    closePopup: () => void;
    children: React.ReactNode;
}

export default function GameFieldPopup({ closePopup, children }: GameFieldPopupProps) {

    return (
        <div className={`${popupStyles.popup__container} ${popupStyles.popup__container_cardStyles}`}>

            <button
                className={popupStyles.popup__closeBtn}
                onClick={closePopup}
            >
                X
            </button>

            <h2 className={popupStyles.popup__h2}>
                Уровень: {children}
            </h2>

            <div className={`${popupStyles.popup__cardContainer}`}>
                <Card src="public/zebra.jpg"/>
                <Card src="public/fox.jpg"/>
                <Card src="public/kenguru.jpg"/>
                <Card src="public/fox.jpg"/>
                <Card src="public/gepard.jpg"/>
                <Card src="public/emu.jpg"/>
                <Card src="public/lion.jpg"/>
                <Card src="public/zebra.jpg"/>
                <Card src="public/emu.jpg"/>
                <Card src="public/kenguru.jpg"/>
                <Card src="public/gepard.jpg"/>
                <Card src="public/lion.jpg"/>
            </div>

        </div>
    )
}
