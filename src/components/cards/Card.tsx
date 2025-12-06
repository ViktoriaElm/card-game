import cardStyles from "./Card.module.scss";

interface CardProps {
src: string;
alt?: string;
}

export default function Card({ src, alt }: CardProps) {
    return (
        <>
        <img
        className={cardStyles.card__img}
        src={src}
        alt={alt}
        />
        </>

    )
}
