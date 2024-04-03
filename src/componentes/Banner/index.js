/* eslint-disable jsx-a11y/alt-text */
import styles from "./Banner.module.css";
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/neto.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo} >
                    Sou Neto Russo, profissional de marketing com especialidade em Comunicação Efetiva.
                    Ajudo pequenos negócios a colocarem em prática boas ideias.
                    Investir em comunicação efetiva é fundamental para o sucesso do seu negócio, especialmente na era digital.
                    A comunicação efetiva ajuda a transmitir informações claramente, fortalecer relacionamentos e aprimorar a presença digital da sua empresa, levando seu negócio a novos patamares.
                </p>
            </div>
            <div className={styles.imagens} >
                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="foto do Neto de óculos escuro"
                />

            </div>
        </div>
    )
}
