import Image from "next/image";
import styles from "./page.module.css";
import Section from "@/components/section";

import Sabores from '/public/images/banner-sabores.jpg';
import Eventos from '/public/images/eventos-image.jpg';
import Sobre from '/public/images/sobre-image.jpg';

export default function Home() {

  const sectionFirst = {
    title: "NOSSOS SABORES",
    subtitle: "Novos e deliciosos!",
    content: "Sorvete bom é aquele feito " +
    "com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, "+
    "à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!"
  }

  const sectionSecond = {
    title: "NOSSOS EVENTOS",
    subtitle: "Delicias com sorvete!",
    content: "Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente."
  }

  const sectionThird = {
    title: "SOBRE NÓS",
    subtitle: "Alegria em cada casquinha!",
    content: "Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade."
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.banner}>
          <h1>SORVETE ARTESANAL</h1>
        </section>
        <Section props={{img: Sabores, alt: "ERROR", revert: false, content: sectionFirst}} />
        <Section props={{img: Eventos, alt: "ERROR", revert: true, content: sectionSecond}} />
        <Section props={{img: Sobre, alt: "ERROR", revert: false, content: sectionThird}} />
      </main>
    </div>
  );
}
