import Image from 'next/image';
import styles from './about.module.css';

import Sobre from '/public/images/sobre-image.jpg';
import Sorveteria from '/public/images/sorveteria.jpg';

export default function About() {
    return (
        <main className={styles.container}>
            <section>
                <div className={styles.banner}>
                    <h1>A GELATERIA</h1>
                </div>
            </section>
            <section className={styles.content}>
                <div className={styles.texts}>
                    <h3>Sobre Nós</h3>
                    <h4>Nós simplesmente amamos sorvete!</h4>
                    <p>
                        Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.
                        Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                    </p>
                </div>
                <div className={styles.imgs}>
                    <Image className={styles.img} src={Sobre} alt='error' priority />
                    <Image className={styles.img} src={Sorveteria} alt='error' priority />
                </div>
            </section>
        </main>

    );
}