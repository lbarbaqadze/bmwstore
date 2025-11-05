import styles from "./Card.module.css"
import { Link } from "react-router-dom"

interface Props {
    Paragraph: string,
    Title: string,
    MiniTitle: string,
    ImgSrc: string,
    Button: string
}

export default function Card(props: Props) {    

    return (
        <>
            <div className={styles.card}>
                <img src={props.ImgSrc} alt="img" className={styles.img} />
                <div className={styles.des}>
                    <p className={styles.p1}>{props.Paragraph}</p>
                    <h5>{props.Title}</h5>
                    <p className={styles.p2}>{props.MiniTitle}</p>
                    <Link to="/shop" className={styles.button}>{props.Button}</Link>
                </div>
            </div>

        </>
    )
}

