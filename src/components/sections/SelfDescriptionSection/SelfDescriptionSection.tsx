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
                        {artist?.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci eaque explicabo ipsa iusto porro, ullam vero voluptatum. Ab alias aliquam at aut blanditiis consequuntur corporis ducimus excepturi, expedita minima natus nisi nostrum nulla numquam perspiciatis, qui reiciendis, rem repellat repudiandae velit? Asperiores at cupiditate laborum laudantium, mollitia nisi non numquam officiis provident quas quasi ullam, veritatis? Dicta dolorem ducimus eaque exercitationem ipsam labore magnam maiores molestias nisi placeat, porro qui quia quibusdam quisquam repellat rerum, tenetur vel veniam. Alias aliquid animi autem deserunt dolore, enim facilis maiores minus molestiae molestias, nemo quia ratione reiciendis sapiente sequi temporibus veritatis vitae!
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