import { Link } from "react-router-dom";
import styles from "./ChairCard.module.scss"


interface ChairCardProps {
    id: number;
    title: string;
    popularity: number;
    overview: string;
    imageSrc: string; // Доданий новий проп imageSrc
}

function ChairCard({ id, title, overview, popularity, imageSrc  }: ChairCardProps) {
    return (
        <div className={styles.card}>
            <img className={styles.thumbnail} src={imageSrc} alt="chair-benet"/>
            <div className={styles.content}>
                <div>
                    <Link to={`/chair/${id}`}>{title}</Link>
                </div>
                <div className={styles.overview}>{overview}</div>
                <div className={styles.popularity}>{popularity}</div>
            </div>
        </div>
    );
}

export default ChairCard;


