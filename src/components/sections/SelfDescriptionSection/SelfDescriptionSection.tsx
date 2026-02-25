import styles from './SelfDescriptionSection.module.scss';
import type {Artist} from "../../../types/Artist.ts";
import {Button} from "@mui/material";
import {useState} from "react";

export const SelfDescriptionSection = ({artist}: {artist: Artist }) => {
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    const toggleDescription = () => {
        setIsDescriptionExpanded(!isDescriptionExpanded);
    }

    return (
        <section className={styles.selfDesctiption}>
            <div className="container">
                <div className={styles.selfDescription__content}>
                    <h2 className={styles.selfDescription__title}>{artist?.name}</h2>
                    <h3>{artist?.slogan}</h3>
                    <p
                        className={`${styles.selfDescription__text} ${isDescriptionExpanded ? `${styles.expanded}` : ''}`}
                    >
                        {artist?.description}
                    </p>
                    <Button
                        variant="text"
                        onClick={toggleDescription}
                        className={styles.selfDescription__button}
                    >
                        {!isDescriptionExpanded ? 'детальніше' : 'згорнути'}
                    </Button>
                    <div className={styles.selfDescription__imageContainer}>
                        <img src={artist?.images[0].image} alt="" className={styles.selfDescription__image}/>
                    </div>
                </div>
            </div>
        </section>
    )
}