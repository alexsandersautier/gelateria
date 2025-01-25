import Image from 'next/image';
import styles from './card.module.css';

export default function Card({ props }) {

    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <Image src={props.imgSource} alt='error' width="250" priority/>
            </div>

            <div className={styles.body}>
                <h3>{ props.title }</h3>
                <p>{ props.description }</p>
            </div>
        </div>
    );
}