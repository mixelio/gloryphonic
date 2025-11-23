import {CommentsForm} from "../../CommentsForm/CommentsForm.tsx";
import type {Artist} from "../../../types/Artist.ts";
import styles from "./CommentsByProfile.module.scss";
import {CommentsList} from "../../CommentsList/CommentsList.tsx";
import {Divider} from "@mui/material";

export const CommentsByProfile = ({artist}:{artist: Artist}) => {
    return (
        <section className={styles.commentsByProfile}>
            <div className="container">
                <h2>Залиште свій комментар</h2>
                <CommentsForm artist={artist} />
                <Divider sx={{mb: 4, mt: 4}} />
                <CommentsList userId={artist.id.toString()}/>
            </div>
        </section>
    )
}