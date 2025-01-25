import Image from "next/image";
import styles from "./section.module.css";

export default function Section( {props} ) {
    return(
        <section className={`${styles.container} ${props.revert ? styles.revert : ''}`}>
            <Image className={styles.img} src={props.img} alt={props.alt} priority/>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.content.title}</h2>
                <p className={`italic ${styles.subtitle}`}>{props.content.subtitle}</p>
                <p className={styles.paragraph}>{props.content.content}</p>
            </div>
        </section>
    );
}