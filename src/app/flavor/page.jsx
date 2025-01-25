import Card from '@/components/card';
import styles from  './flavor.module.css';

import Oreo from '/public/images/sabor-oreo.png';
import Pistache from '/public/images/sabor-pistache.png';
import CookiesAvela from '/public/images/sabor-cookies-avela.png';
import Kiwi from '/public/images/sorbet-kiwi.png';
import Morango from '/public/images/sorbet-morango.png';
import LimaoSiciliano from '/public/images/sorbet-limao.png';


export default function Flavor() {

    const flavors = [
        {
            imgSource: Oreo,
            title: "Sorvete Oreo",
            description: "Delicioso sorvete sabor Oreo. Uma explosão de sabor."
        },{
            imgSource: Pistache,
            title: "Sorvete Pistache",
            description: "Cremoso sorvete sabor pistache com pedacinhos de semente."
        },{
            imgSource: CookiesAvela,
            title: "Sorvete Cookies & Avelã",
            description: "O nosso melhor sorvete. Você vai adorar o sabor."
        },{
            imgSource: Kiwi,
            title: "Sorvete Cookies & Avelã",
            description: "O nosso melhor sorvete. Você vai adorar o sabor."
        },{
            imgSource: Morango,
            title: "Sorvete Cookies & Avelã",
            description: "O nosso melhor sorvete. Você vai adorar o sabor."
        },{
            imgSource: LimaoSiciliano,
            title: "Sorvete Cookies & Avelã",
            description: "O nosso melhor sorvete. Você vai adorar o sabor."
        }
    ];

    return(
        <main className={styles.container}>
            <section>
                <div className={styles.banner}>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </section>

            <section className={styles.flavors}>
                <div className={styles.cards}>
                    {
                        flavors.map((item, index) => (
                            <Card key={index} props={item} />
                        ))
                    }
                </div>
            </section>
        </main>
    );
}