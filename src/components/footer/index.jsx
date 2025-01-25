import Image from "next/image";
import Logo from '/public/images/logo.png';
import styles from './footer.module.css';
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.container_box}>
                <div className={styles.imgs}>
                    <Image className="img" src={Logo} priority alt="error" />
                </div>
                <div className={styles.container_content}>
                    <div className={styles.info}>
                        <div className={styles.address}>
                            <h3 className={`${styles.text_white} ${styles.bold}`}>ENDEREÇO</h3>
                            <p className={styles.text_white}>Av. Bernardino de Campos, 98
                                São Paulo, SP 12345-678</p>
                        </div>
                        <div className={styles.contact}>
                            <h3 className={`${styles.text_white} ${styles.bold}`}>CONTATO</h3>
                            <p className={styles.text_white}>info@meusite.com
                                Tel: (11) 3456-7890
                            </p>
                        </div>
                        <div className={styles.schedules}>
                            <h3 className={`${styles.text_white} ${styles.bold}`}>HORÁRIOS</h3>
                            <p className={styles.text_white}>
                                ABERTO TODOS OS DIAS
                                10:00 - 22:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.copyright} ${styles.text_white}`}>
                Gelateria. Orgulhosamente desenvolvido por <Link href="mailto:alexsanderesramos@gmail.com" target="_blank">Alexsander Sautier</Link>
            </div>
        </footer>
    );
}