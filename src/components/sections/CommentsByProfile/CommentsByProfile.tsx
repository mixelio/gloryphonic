import {CommentsForm} from "../../CommentsForm/CommentsForm.tsx";
import type {Artist} from "../../../types/Artist.ts";
import styles from "./CommentsByProfile.module.scss";
import {CommentsList} from "../../CommentsList/CommentsList.tsx";
import {Divider} from "@mui/material";
import {useParams} from "react-router-dom";

export const CommentsByProfile = ({artist}:{artist: Artist}) => {
  const {slug} = useParams();
  console.log(artist.name);

    return (
        <section className={styles.commentsByProfile}>
            <div className="container">
                <h2>Залиште свій комментар для {artist.name}</h2>
                <CommentsForm artist={artist} />
                <Divider sx={{mb: 4, mt: 4}} />
                <CommentsList userId={String(artist.id)}/>
            </div>
        </section>
    )
}