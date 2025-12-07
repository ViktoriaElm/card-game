import popupStyles from "./popup.module.scss";
import Card from "../cards/Card";
import data from "../../../data/data.json";
import { useEffect, useState } from "react";

interface GameFieldPopupProps {
    closePopup: () => void;
    children: React.ReactNode;
}

type DoubledDataItem = typeof data[number];

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default function GameFieldPopup({ closePopup, children }: GameFieldPopupProps) {

    const [shuffledData, setShuffledData] = useState<DoubledDataItem[]>([])

    const filteredAnimeData = data.filter(item => item.category === "anime");

    const doubleAnimeData = filteredAnimeData.concat(filteredAnimeData.slice());


    useEffect(() => {
        const shuffled = shuffleArray(doubleAnimeData);
        setShuffledData(shuffled)
    }, [])


    return (
        <div className={`${popupStyles.popup__container} ${popupStyles.popup__container_cardStyles}`}>

            <span
                className={popupStyles.popup__closeBtn}
                onClick={closePopup}
            >
                x
            </span>

            <h2 className={popupStyles.popup__h2}>
                Уровень: {children}
            </h2>

            <div className={`${popupStyles.popup__cardContainer}`}>
                {shuffledData.map((item) => (
                    <Card src={item.src} alt={item.alt} />
                ))}
            </div>

        </div>
    );
}
