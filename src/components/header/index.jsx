import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import styles from './header.module.css';

export default function Header() {
    return(
        <header className={styles.container}>
            <div className={styles.content}>
                <div>
                    <Link href="/"><Image className="img" src={Logo} alt="ERROR" priority/></Link>
                </div>
                <nav className={styles.content_list}>
                    <ul className={styles.list}>
                        <li>
                            <Link href="/" className={styles.item_list}>Home</Link>
                        </li>
                        <li>
                            <Link href="/flavor" className={styles.item_list}>Sabores</Link>
                        </li>
                        <li>
                            <Link href="/about" className={styles.item_list}>Sobre</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}